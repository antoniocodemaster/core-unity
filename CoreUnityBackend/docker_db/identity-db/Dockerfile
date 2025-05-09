# docker_db/identity-db/Dockerfile
FROM postgres:15

ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=mysecretpassword

# Copy scripts from init and seeds
COPY init-scripts/*.sql /docker-entrypoint-initdb.d/init/
COPY seed-scripts/*.sql /docker-entrypoint-initdb.d/seeds/
COPY entrypoint.sh /docker-entrypoint-initdb.d/entrypoint.sh

# Execution permissions
RUN chmod +x /docker-entrypoint-initdb.d/entrypoint.sh