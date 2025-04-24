using Npgsql;

namespace CoreUnity.Core.Interfaces
{

    /// <summary>
    /// Description: Interface in charge of managing the connection to the data source.
    /// <para></para>
    /// <author>Created By: César Adolfo Solís Álvarez (CSOLIS).</author>
    /// <para></para>
    /// <since>Creation Date: 21/04/2025.</since>
    /// </summary>
    public interface IConnectionManager
    {

        /// <summary>
        /// Gets a connection to database.
        /// </summary>
        NpgsqlConnection GetDatabaseConnection();

        /// <summary>
        /// Obtains a connection to the database.
        /// </summary>
        /// <summary>
        /// Gets a connection to a specific environment database (e.g., Production, Development).
        /// </summary>
        /// <param name="environment">Environment key (e.g., "prod", "dev", "docker").</param>
        /// <returns>An instance of Postgres server representing the connection to the data source.</returns>
        NpgsqlConnection GetEnvironmentDbConnection(string environment);

    }
}
