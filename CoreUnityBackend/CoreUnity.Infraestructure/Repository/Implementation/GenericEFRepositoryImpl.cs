using System.Linq.Expressions;
using CoreUnity.Domain.Persistence.Context;
using CoreUnity.Infraestructure.Repository.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace CoreUnity.Infraestructure.Repository.Implementation
{
    public class GenericEFRepositoryImpl<T> : IGenericEFRepository<T> where T : class
    {

        private readonly CoreUnityContext _coreUnityContext;
        private readonly DbSet<T> _dbSet;

        public GenericEFRepositoryImpl(CoreUnityContext coreUnityContext)
        {
            _coreUnityContext = coreUnityContext ?? throw new ArgumentNullException(nameof(coreUnityContext));
            _dbSet = _coreUnityContext.Set<T>();
        }

        public async Task<T?> RetrieveForIDAsync(int entityID)
        {
            try
            {
                return await _dbSet.FindAsync(entityID);
            }
            catch (Exception ex)
            {
                throw new Exception($"An error occurred when retrieving the entity by id, {ex.Message}.");
            }
        }

        public async Task<IEnumerable<T>> RetrieveAsync()
        {
            try
            {
                return await _dbSet.ToListAsync();
            }
            catch (Exception ex)
            {
                throw new Exception($"An error occurred while recovering the entity, {ex.Message}.");
            }
        }

        public async Task<IEnumerable<T>> RetrieveForFilterAsync(Expression<Func<T, bool>> predicate)
        {
            try
            {
                return await _dbSet.AsNoTracking().Where(predicate).ToListAsync();
            }
            catch (Exception ex)
            {
                throw new Exception($"An error occurred when retrieving the entity with the provided filters, {ex.Message}.");
            }
        }

        public async Task AddAsync(T entity)
        {
            try
            {
                if (entity == null) throw new ArgumentNullException($"The entity {nameof(entity)} cannot be null.");
                await _dbSet.AddAsync(entity);
            }
            catch
            {
                throw;
            }
        }

        public async Task AddListAsync(IEnumerable<T> entityList)
        {
            try
            {
                if (entityList == null || !entityList.Any())
                    throw new ArgumentException($"The collection {nameof(entityList)} cannot be null or empty.");
                await _dbSet.AddRangeAsync(entityList);
            }
            catch
            {
                throw;
            }
        }

        public void Update(T entity)
        {
            try
            {
                if (entity == null) throw new ArgumentNullException($"The entity {nameof(entity)} cannot be null.");
                _dbSet.Update(entity);
            }
            catch
            {
                throw;
            }
        }

        public void Delete(T entity)
        {
            try
            {
                if (entity == null) throw new ArgumentNullException($"The entity {nameof(entity)} cannot be null.");
                _dbSet.Remove(entity);
            }
            catch
            {
                throw;
            }
        }

        public void DeleteList(IEnumerable<T> entityList)
        {
            try
            {
                if (entityList == null || !entityList.Any())
                    throw new ArgumentException($"The collection {nameof(entityList)} cannot be null or empty.");
                _dbSet.RemoveRange(entityList);
            }
            catch
            {
                throw;
            }
        }

        public async Task<int> SaveChangesAsync()
        {
            try
            {
                return await _coreUnityContext.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw new Exception($"An error occurred while saving, {ex.Message}");
            }
        }

    }
}
