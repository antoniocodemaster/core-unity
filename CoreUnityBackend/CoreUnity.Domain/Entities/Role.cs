using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Net;
using Microsoft.EntityFrameworkCore;

namespace CoreUnity.Domain.Entities;

[Table("role", Schema = "security")]
[Index("name", Name = "role_name_key", IsUnique = true)]
public partial class Role
{

    [Key]
    public int role_id { get; set; }

    public int? company_id { get; set; }

    [StringLength(50)]
    public string name { get; set; } = null!;

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
    [InverseProperty("role")]
    public virtual Company? company { get; set; }

    [InverseProperty("role")]
    public virtual ICollection<User> user { get; set; } = new List<User>();

}
