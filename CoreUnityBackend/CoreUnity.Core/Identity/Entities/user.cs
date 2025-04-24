using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Net;
using Microsoft.EntityFrameworkCore;

namespace CoreUnity.Core.Identity.Entities;

[Table("user", Schema = "security")]
[Index("email", Name = "user_email_key", IsUnique = true)]
[Index("login", Name = "user_login_key", IsUnique = true)]
[Index("username", Name = "user_username_key", IsUnique = true)]
public partial class user
{
    [Key]
    public int user_id { get; set; }

    [StringLength(50)]
    public string username { get; set; } = null!;

    [StringLength(100)]
    public string login { get; set; } = null!;

    [StringLength(350)]
    public string password_hash { get; set; } = null!;

    [StringLength(50)]
    public string first_name { get; set; } = null!;

    [StringLength(50)]
    public string second_name { get; set; } = null!;

    [StringLength(50)]
    public string first_last_name { get; set; } = null!;

    [StringLength(50)]
    public string second_last_name { get; set; } = null!;

    [StringLength(100)]
    public string email { get; set; } = null!;

    public int? company_id { get; set; }

    public int? role_id { get; set; }

    public bool? master_flag { get; set; }

    public bool? active_flag { get; set; }

    [Column(TypeName = "timestamp without time zone")]
    public DateTime? created_on { get; set; }

    public int created_by { get; set; }

    public IPAddress created_at_ip { get; set; } = null!;

    [Column(TypeName = "timestamp without time zone")]
    public DateTime? modified_on { get; set; }

    public int? modified_by { get; set; }

    public IPAddress? modified_at_ip { get; set; }

    [ForeignKey("company_id")]
    [InverseProperty("user")]
    public virtual company? company { get; set; }

    [ForeignKey("role_id")]
    [InverseProperty("user")]
    public virtual role? role { get; set; }
}
