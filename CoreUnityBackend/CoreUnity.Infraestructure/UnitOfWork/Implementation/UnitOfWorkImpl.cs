using CoreUnity.Domain.Persistence.Context;
using CoreUnity.Infraestructure.Repository.Implementation;
using CoreUnity.Infraestructure.Repository.Interfaces;
using CoreUnity.Infraestructure.UnitOfWork.Interfaces;

namespace CoreUnity.Infraestructure.UnitOfWork.Implementation
{
    public class UnitOfWorkImpl : IUnitOfWork
    {

        private readonly CoreUnityContext _coreUnityContext;
        private readonly Dictionary<Type, object> _repositories = new();

        public UnitOfWorkImpl(CoreUnityContext coreUnityContext)
        {
            _coreUnityContext = coreUnityContext ?? throw new ArgumentNullException(nameof(coreUnityContext));
        }

        public IGenericEFRepository<T> EFRepository<T>() where T : class
        {
            if (!_repositories.ContainsKey(typeof(T)))
            {
                var repository = new GenericEFRepositoryImpl<T>(_coreUnityContext);
                _repositories.Add(typeof(T), repository);
            }

            return (IGenericEFRepository<T>)_repositories[typeof(T)];
        }

        public async Task<int> SaveChangesAsync()
        {
            try
            {
                return await _coreUnityContext.SaveChangesAsync();
            }
            catch
            {
                throw;
            }
        }

        public void Dispose()
        {
            _coreUnityContext.Dispose();
        }

    }
}
