using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Net;
using Microsoft.EntityFrameworkCore;

namespace CoreUnity.Domain.Entities;

[Table("branch_office", Schema = "security")]
[Index("abbreviation", Name = "branch_office_abbreviation_key", IsUnique = true)]
public partial class Branch_office
{

    [Key]
    public int branch_office_id { get; set; }

    public int? company_id { get; set; }

    [StringLength(50)]
    public string abbreviation { get; set; } = null!;

    [StringLength(50)]
    public string name { get; set; } = null!;

    public bool? active_flag { get; set; }

    [Column(TypeName = "timestamp without time zone")]
    public DateTime? created_on { get; set; }

    public int created_by { get; set; }

    public IPAddress created_at_ip { get; set; } = null!;

    [ForeignKey("company_id")]
    [InverseProperty("branch_office")]
    public virtual Company? company { get; set; }

    [InverseProperty("branch_office")]
    public virtual ICollection<Department> department { get; set; } = new List<Department>();

}
