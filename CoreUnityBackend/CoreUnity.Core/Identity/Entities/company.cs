using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Net;
using Microsoft.EntityFrameworkCore;

namespace CoreUnity.Core.Identity.Entities;

[Table("company", Schema = "security")]
[Index("abbreviation", Name = "company_abbreviation_key", IsUnique = true)]
[Index("name", Name = "company_name_key", IsUnique = true)]
public partial class company
{
    [Key]
    public int company_id { get; set; }

    [StringLength(350)]
    public string? logo_url { get; set; }

    [StringLength(50)]
    public string abbreviation { get; set; } = null!;

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

    [InverseProperty("company")]
    public virtual ICollection<role> role { get; set; } = new List<role>();

    [InverseProperty("company")]
    public virtual ICollection<user> user { get; set; } = new List<user>();
}
