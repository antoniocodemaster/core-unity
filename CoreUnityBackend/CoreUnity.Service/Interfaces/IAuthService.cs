using CoreUnity.Domain.Entities;
using CoreUnity.DTO;

namespace CoreUnity.Service.Interfaces
{
    public interface IAuthService
    {

        Task<User?> IsUserAuthenticated(AuthUserDto authUserDto);

        Task<Dictionary<string, object>> GetAccessToken(AuthUserDto authUserDto);

        Task<AuthUserInfoDto> GetAuthUserInfo(User user, Dictionary<string, object> authToken);

    }
}
