using System.Linq.Expressions;

namespace CoreUnity.Service.Interfaces
{
    public interface IBaseGenericService<T> where T : class
    {

        Task<T?> RetrieveForIDAsync(int entityID);

        Task<IEnumerable<T>> RetrieveAsync();

        Task<IEnumerable<T>> RetrieveForFilterAsync(Expression<Func<T, bool>> predicate);

        Task AddAsync(T entity);

        Task AddListAsync(IEnumerable<T> entityList);

        Task Update(T entity);

        Task Delete(int entity);

        Task DeleteList(IEnumerable<T> entityList);

    }
}
