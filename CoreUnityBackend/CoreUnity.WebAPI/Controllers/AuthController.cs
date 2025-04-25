using CoreUnity.DTO;
using Microsoft.AspNetCore.Mvc;
using CoreUnity.Core.Response;
using CoreUnity.Service.Interfaces;
using CoreUnity.Core.Utils;
using CoreUnity.Core.Enums;
using CoreUnity.Domain.Entities;

namespace CoreUnity.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {

        private readonly IAuthService _authService;
        
        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost(Name = "Login")]
        public async Task<IActionResult> Login([FromBody] AuthUserDto authUserDto)
        {
            var response = new GenericResponse<AuthUserInfoDto>();

            try
            {

                if (string.IsNullOrEmpty(authUserDto.UserName) || string.IsNullOrEmpty(authUserDto.Password))
                {
                    response.Status = false;
                    response.Message = "You must enter an email address and password";
                    response.AlertType = AlertsUtils.ConvertAlertTypeToString(AlertTypeEnum.Danger);
                    response.Object = null;
                    return Unauthorized(response);
                }

                // Convert user to uppercase and encrypt password.
                authUserDto.UserName = authUserDto.UserName.ToUpper();
                string hashPassword = SecurityUtils.EncryptToSHA256(authUserDto.Password);
                authUserDto.Password = hashPassword;

                // Validate authentication
                User? userProfile = await _authService.IsUserAuthenticated(authUserDto);

                if (userProfile is null || (bool)!userProfile.active_flag)
                {
                    response.Status = false;
                    response.Message = userProfile is null ? "No matches found" : "The user is disabled";
                    response.AlertType = AlertsUtils.ConvertAlertTypeToString(AlertTypeEnum.Danger);
                    response.Object = null;
                    return Unauthorized(response);
                }

                var tokenInfo = await _authService.GetAccessToken();

                response.Status = true;
                response.Object = await _authService.GetAuthUserInfo(userProfile, tokenInfo);
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Status = false;
                response.Message = ex.Message;
                response.Object = null;
                return BadRequest(response);
            }
        }

    }
}
