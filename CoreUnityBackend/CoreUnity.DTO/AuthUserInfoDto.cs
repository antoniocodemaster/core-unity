namespace CoreUnity.DTO
{
    public class AuthUserInfoDto
    {

        public int UserID { get; set; }

        public string? UserName { get; set; }

        public Dictionary<string, object>? TokenInfo { get; set; }

    }
}
