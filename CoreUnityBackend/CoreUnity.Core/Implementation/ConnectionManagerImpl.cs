using CoreUnity.Core.Enums;
using CoreUnity.Core.Extensions;
using CoreUnity.Core.Interfaces;
using Microsoft.Extensions.Configuration;
using Npgsql;

namespace CoreUnity.Core.Implementation
{
    public class ConnectionManagerImpl : IConnectionManager
    {

        private readonly IConfiguration _configuration;
        private readonly Dictionary<string, string> _environmentConnectionMap;

        public ConnectionManagerImpl(IConfiguration configuration)
        {
            _configuration = configuration;

            // Map environments with their keys in appsettings
            _environmentConnectionMap = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase)
            {
                { "identity", "ConnectionStrings:IdentityDB" },
                { "prod", "ConnectionStrings:ProdDB" },
                { "dev", "ConnectionStrings:DevDB" },
                { "docker", "ConnectionStrings:DockerDB" },
                { "local", "ConnectionStrings:LocalDB"}
            };

        }

        public NpgsqlConnection GetIdentityDbConnection()
        {
            try
            {
                string? connString = _configuration[_environmentConnectionMap[EnvironmentKeysEnum.Identity.GetDescription()]];

                if (string.IsNullOrEmpty(connString))
                    throw new Exception("An error occurred, the identity database is not available.");

                return new NpgsqlConnection(connString);
            } 
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public NpgsqlConnection GetEnvironmentDbConnection(string environment)
        {
            try
            {
                if (!_environmentConnectionMap.TryGetValue(environment, out var configKey))
                    throw new ArgumentException($"No configuration found for the environment '{environment}'.");

                string? connString = _configuration[configKey];

                if (string.IsNullOrWhiteSpace(connString))
                    throw new InvalidOperationException($"The connection string is not configured for '{environment}'.");

                return new NpgsqlConnection(connString);
            } 
            catch
            {
                throw;
            }
        }

    }
}
