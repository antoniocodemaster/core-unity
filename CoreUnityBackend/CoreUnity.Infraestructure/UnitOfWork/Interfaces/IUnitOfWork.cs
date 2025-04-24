using CoreUnity.Infraestructure.Repository.Interfaces;

namespace CoreUnity.Infraestructure.UnitOfWork.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {

        IGenericEFRepository<T> EFRepository<T>() where T : class;

        Task<int> SaveChangesAsync();

    }
}
