using System.Text.Json;
using CoreUnity.Domain.Entities;
using CoreUnity.DTO;
using CoreUnity.Service.Interfaces;
using Microsoft.Extensions.Configuration;

namespace CoreUnity.Service.Implementation
{
    public class AuthServiceImpl : IAuthService
    {

        private readonly IBaseGenericService<User> _userService;
        private readonly HttpClient _httpClient;
        private readonly IConfiguration _configuration;

        public AuthServiceImpl(IBaseGenericService<User> userService,
                               HttpClient httpClient,
                               IConfiguration configuration)
        {
            _userService = userService;
            _httpClient = httpClient;
            _configuration = configuration;
        }

        public async Task<User?> IsUserAuthenticated(AuthUserDto authUserDto)
        {
            try
            {
                var usersList = await _userService
                    .RetrieveForFilterAsync(x => x.login.Equals(authUserDto.UserName) && x.password_hash.Equals(authUserDto.Password));

                if (usersList is null)
                    return null;

                return usersList.FirstOrDefault();
            }
            catch
            {
                throw;
            }
        }

        public async Task<Dictionary<string, object>?> GetAccessToken(AuthUserDto authUserDto)
        {
            try
            {
                var keycloakConfig = _configuration.GetSection("Keycloak");

                var tokenEndpoint = keycloakConfig["TokenEndpoint"];
                var clientId = keycloakConfig["ClientId"];
                var clientSecret = keycloakConfig["ClientSecret"];

                var formData = new Dictionary<string, string>
                {
                    { "grant_type", "password" },
                    { "client_id", clientId },
                    { "client_secret", clientSecret },
                    { "username", authUserDto.UserName },
                    { "password", authUserDto.Password }
                };

                var content = new FormUrlEncodedContent(formData);
                var keycloackResponse = await _httpClient.PostAsync(tokenEndpoint, content);

                if (!keycloackResponse.IsSuccessStatusCode)
                {
                    throw new Exception("Invalid credentials.");
                }

                var responseString = await keycloackResponse.Content.ReadAsStringAsync();
                var responseJson = JsonSerializer.Deserialize<Dictionary<string, object>>(responseString);

                return responseJson;
            }
            catch (Exception ex) 
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<AuthUserInfoDto> GetAuthUserInfo(User user, Dictionary<string, object> authToken)
        {
            throw new NotImplementedException();
        }

    }
}
