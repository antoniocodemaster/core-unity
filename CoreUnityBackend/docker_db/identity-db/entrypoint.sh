#!/bin/bash
set -e

echo "Running init scripts..."

# Executing init scripts
for sql_file in /docker-entrypoint-initdb.d/init/*.sql; do
  echo "Executing $sql_file..."
  psql -v ON_ERROR_STOP=1 -U "$POSTGRES_USER" -f "$sql_file"
done

echo "Running seed scripts..."

# Executing seeds scripts
for seed_file in /docker-entrypoint-initdb.d/seeds/*.sql; do
  echo "Executing $seed_file..."
  psql -v ON_ERROR_STOP=1 -U "$POSTGRES_USER" -f "$seed_file"
done

echo "All scripts were executed correctly."