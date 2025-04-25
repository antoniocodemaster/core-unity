namespace CoreUnity.DTO
{
    public class AuthUserInfoDto
    {

        public int UserID { get; set; }

        public string? UserName { get; set; }

        public string? FullName { get; set; }

        public int? CompanyID { get; set; }

        public int? RolID { get; set; }

        public Dictionary<string, object>? TokenInfo { get; set; }

    }
}
