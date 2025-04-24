using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Net;

namespace CoreUnity.Domain.Entities;

[Table("department", Schema = "security")]
public partial class Department
{

    [Key]
    public int department_id { get; set; }

    public int? branch_office_id { get; set; }

    [StringLength(50)]
    public string name { get; set; } = null!;

    [StringLength(50)]
    public string? phone { get; set; }

    public bool? active_flag { get; set; }

    [Column(TypeName = "timestamp without time zone")]
    public DateTime? created_on { get; set; }

    public int created_by { get; set; }

    public IPAddress created_at_ip { get; set; } = null!;

    [ForeignKey("branch_office_id")]
    [InverseProperty("department")]
    public virtual Branch_office? branch_office { get; set; }

}
