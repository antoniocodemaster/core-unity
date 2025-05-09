#!/bin/bash

# Despliegue automatizado limpio con logging para servidor de desarrollo

# Obtener fecha y hora actual para nombrar el log
TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")
LOG_DIR="./logs"
LOG_FILE="${LOG_DIR}/deploy-${TIMESTAMP}.log"

# Crear directorio de logs si no existe
mkdir -p "$LOG_DIR"

# Redirigir toda la salida (stdout y stderr) al log
exec > >(tee -i "$LOG_FILE") 2>&1

echo "🚀 Iniciando despliegue limpio en DigitalOcean - $(date)"

# Paso 1: Ir al directorio raíz del proyecto (ajusta si es necesario)
cd "$(dirname "$0")"

# Paso 2: Detener contenedores existentes y eliminar volúmenes
echo "🛑 Deteniendo contenedores y eliminando volúmenes antiguos..."
docker compose -f docker-compose.dev.yml down --volumes

# Paso 3: Limpiar imágenes no usadas (opcional)
echo "🧹 Eliminando imágenes no utilizadas..."
docker image prune -f

# Paso 4: Obtener últimos cambios del repositorio
echo "📍 Verificando rama actual..."
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

if [ "$CURRENT_BRANCH" != "development" ]; then
  echo "🔄 Cambiando a la rama 'development'..."
  git fetch origin development
  git checkout development || git switch development
fi

echo "📥 Ejecutando git pull..."
git pull origin development

# Paso 5: Crear el archivo .env para el frontend
ENV_PATH="./any-admin-front-end/.env"
echo "📝 Generando archivo .env en $ENV_PATH..."
cat > "$ENV_PATH" <<EOL
VITE_BASE_URL=https://httpbin.org
EOL

# Paso 6: Construir y levantar contenedores
echo "🐳 Levantando contenedores con docker-compose.dev.yml..."
docker compose -f docker-compose.dev.yml up -d --build

# Paso 7: Confirmar estado final
echo "✅ Despliegue completado - $(date)"
docker ps

echo "📄 Log de despliegue guardado en: $LOG_FILE"