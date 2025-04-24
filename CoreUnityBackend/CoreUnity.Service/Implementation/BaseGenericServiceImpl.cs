using System.Linq.Expressions;
using CoreUnity.Infraestructure.UnitOfWork.Interfaces;
using CoreUnity.Service.Interfaces;

namespace CoreUnity.Service.Implementation
{
    public class BaseGenericServiceImpl<T> : IBaseGenericService<T> where T : class
    {

        private readonly IUnitOfWork _unitOfWork;

        public BaseGenericServiceImpl(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<T?> RetrieveForIDAsync(int entityID)
        {
            try
            {
                return await _unitOfWork.EFRepository<T>().RetrieveForIDAsync(entityID);
            }
            catch
            {
                throw;
            }
        }

        public async Task<IEnumerable<T>> RetrieveAsync()
        {
            try
            {
                return await _unitOfWork.EFRepository<T>().RetrieveAsync();
            }
            catch
            {
                throw;
            }
        }

        public async Task<IEnumerable<T>> RetrieveForFilterAsync(Expression<Func<T, bool>> predicate)
        {
            try
            {
                return await _unitOfWork.EFRepository<T>().RetrieveForFilterAsync(predicate);
            }
            catch
            {
                throw;
            }
        }

        public async Task AddAsync(T entity)
        {
            try
            {
                await _unitOfWork.EFRepository<T>().AddAsync(entity);
                await _unitOfWork.SaveChangesAsync();
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
                await _unitOfWork.EFRepository<T>().AddListAsync(entityList);
                await _unitOfWork.SaveChangesAsync();
            }
            catch
            {
                throw;
            }
        }

        public async Task Update(T entity)
        {
            try
            {
                _unitOfWork.EFRepository<T>().Update(entity);
                await _unitOfWork.SaveChangesAsync();
            }
            catch
            {
                throw;
            }
        }

        public async Task Delete(int entityID)
        {
            try
            {
                var entity = await RetrieveForIDAsync(entityID);
                if (entity == null)
                    throw new ArgumentException($"The Entity of type {typeof(T).Name} with ID {entityID} was not found.");

                _unitOfWork.EFRepository<T>().Delete(entity);
                await _unitOfWork.SaveChangesAsync();
            }
            catch
            {
                throw;
            }
        }

        public async Task DeleteList(IEnumerable<T> entityList)
        {
            try
            {
                _unitOfWork.EFRepository<T>().DeleteList(entityList);
                await _unitOfWork.SaveChangesAsync();
            }
            catch
            {
                throw;
            }
        }

    }
}
