using CoreUnity.Core.Implementation;
using CoreUnity.Core.Interfaces;
using CoreUnity.Domain.Persistence.Context;
using CoreUnity.Infraestructure.Repository.Implementation;
using CoreUnity.Infraestructure.Repository.Interfaces;
using CoreUnity.Infraestructure.UnitOfWork.Implementation;
using CoreUnity.Infraestructure.UnitOfWork.Interfaces;
using CoreUnity.Service.Implementation;
using CoreUnity.Service.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace CoreUnity.IOC
{
    public static class Dependency
    {

        public static void DependencyInyection(this IServiceCollection services, IConfiguration configuration)
        {
            // Persistence - CORE
            services.AddTransient<IConnectionManager, ConnectionManagerImpl>();

            services.AddDbContext<CoreUnityContext>(options =>
                options.UseNpgsql(configuration.GetConnectionString("DockerDB"))
            );

            // Infraestructure
            services.AddScoped<IUnitOfWork, UnitOfWorkImpl>();
            services.AddScoped(typeof(IGenericEFRepository<>), typeof(GenericEFRepositoryImpl<>));
           
            // Services
            services.AddScoped(typeof(IBaseGenericService<>), typeof(BaseGenericServiceImpl<>));

            services.AddScoped<IAuthService, AuthServiceImpl>(); // AuthService

            // Registrar IConnectionMultiplexer para Redis
            /*services.AddSingleton<IConnectionMultiplexer>(sp =>
            {
                var redisConnection = Environment.GetEnvironmentVariable("REDIS_CONNECTION") ?? "localhost:6379";
                return ConnectionMultiplexer.Connect(redisConnection);
            });*/

            // Configurar Redis Cache
            /*services.AddStackExchangeRedisCache(options =>
            {
                options.Configuration = Environment.GetEnvironmentVariable("REDIS_CONNECTION") ?? "localhost:6379";
                options.InstanceName = "Session_";
            });*/

            // Registrar el servicio genérico de Redis
            //services.AddScoped(typeof(IRedisCacheService<>), typeof(RedisCacheService<>));

        }


    }
}
