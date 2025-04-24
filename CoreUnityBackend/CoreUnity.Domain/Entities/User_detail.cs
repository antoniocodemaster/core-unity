using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Net;

namespace CoreUnity.Domain.Entities;

[Table("user_detail", Schema = "security")]
public partial class User_detail
{

    [Key]
    public int user_detail_id { get; set; }

    public int user_id { get; set; }

    public bool? user_authentication_type_flag { get; set; }

    public int? number_failed_attempts { get; set; }

    [StringLength(350)]
    public string? factor_authentication_value { get; set; }

    [Column(TypeName = "timestamp without time zone")]
    public DateTime? authentication_factor_expiration_date { get; set; }

    [Column(TypeName = "timestamp without time zone")]
    public DateTime? blocking_date { get; set; }

    public bool? failed_attempts_flag { get; set; }

    public bool? factor_authentication_type_flag { get; set; }

    public bool? factor_authentication_flag { get; set; }

    public bool? temporary_key_flag { get; set; }

    public bool? change_key_flag { get; set; }

    public bool? active_flag { get; set; }

    [Column(TypeName = "timestamp without time zone")]
    public DateTime? created_on { get; set; }

    public int created_by { get; set; }

    public IPAddress created_at_ip { get; set; } = null!;

    [Column(TypeName = "timestamp without time zone")]
    public DateTime? modified_on { get; set; }

    public int? modified_by { get; set; }

    public IPAddress? modified_at_ip { get; set; }

}
