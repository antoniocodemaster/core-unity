using System.Linq.Expressions;

namespace CoreUnity.Infraestructure.Repository.Interfaces
{
    public interface IGenericEFRepository<T> where T : class
    {

        Task<T?> RetrieveForIDAsync(int entityID);

        Task<IEnumerable<T>> RetrieveAsync();

        Task<IEnumerable<T>> RetrieveForFilterAsync(Expression<Func<T, bool>> predicate);

        Task AddAsync(T entity);

        Task AddListAsync(IEnumerable<T> entityList);

        void Update(T entity);

        void Delete(T entity);

        void DeleteList(IEnumerable<T> entityList);

        Task<int> SaveChangesAsync();

    }
}
