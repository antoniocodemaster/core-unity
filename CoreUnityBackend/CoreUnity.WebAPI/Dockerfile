# This stage is used when running from VS in fast mode (Default for Debug configuration)
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
USER $APP_UID
WORKDIR /app
EXPOSE 8080
# EXPOSE 8081

# This stage is used to build the service project
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src

COPY ../CoreUnity.WebAPI/CoreUnity.WebAPI.csproj CoreUnity.WebAPI/
COPY ../CoreUnity.Core/CoreUnity.Core.csproj CoreUnity.Core/
COPY ../CoreUnity.Domain/CoreUnity.Domain.csproj CoreUnity.Domain/
COPY ../CoreUnity.DTO/CoreUnity.DTO.csproj CoreUnity.DTO/
COPY ../CoreUnity.IOC/CoreUnity.IOC.csproj CoreUnity.IOC/
COPY ../CoreUnity.Infraestructure/CoreUnity.Infraestructure.csproj CoreUnity.Infraestructure/
COPY ../CoreUnity.Service/CoreUnity.Service.csproj CoreUnity.Service/

RUN dotnet restore "CoreUnity.WebAPI/CoreUnity.WebAPI.csproj"

COPY . .
WORKDIR "/src/CoreUnity.WebAPI"
RUN dotnet build "./CoreUnity.WebAPI.csproj" -c $BUILD_CONFIGURATION -o /app/build

# This stage is used to publish the service project to be copied to the final stage
FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./CoreUnity.WebAPI.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

# This stage is used in production or when running from VS in regular mode (Default when not using the Debug configuration)
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .

# Definir variables de entorno recomendadas
ENV DOTNET_RUNNING_IN_CONTAINER=true \
    ASPNETCORE_URLS=http://+:8080 \
    ASPNETCORE_ENVIRONMENT=Development

ENTRYPOINT ["dotnet", "CoreUnity.WebAPI.dll"]