# docker_db/identity-db/Dockerfile
FROM postgres:15

ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=mysecretpassword

# Copiar scripts SQL y el entrypoint.sh al lugar correcto
COPY init-scripts/*.sql /docker-entrypoint-initdb.d/
COPY entrypoint.sh /docker-entrypoint-initdb.d/entrypoint.sh

# Permisos de ejecución
RUN chmod +x /docker-entrypoint-initdb.d/entrypoint.sh