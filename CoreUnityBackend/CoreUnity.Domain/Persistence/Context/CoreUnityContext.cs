using CoreUnity.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace CoreUnity.Domain.Persistence.Context;

public partial class CoreUnityContext : DbContext
{

    public CoreUnityContext() {}

    public CoreUnityContext(DbContextOptions<CoreUnityContext> options) : base(options) {}

    public virtual DbSet<Branch_office> branch_office { get; set; }

    public virtual DbSet<Company> company { get; set; }

    public virtual DbSet<Department> department { get; set; }

    public virtual DbSet<Role> role { get; set; }

    public virtual DbSet<User> user { get; set; }

    public virtual DbSet<User_detail> user_detail { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {}

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Branch_office>(entity =>
        {
            entity.HasKey(e => e.branch_office_id).HasName("branch_office_pkey");

            entity.Property(e => e.active_flag).HasDefaultValue(true);
            entity.Property(e => e.created_at_ip).HasDefaultValueSql("'127.0.0.1'::inet");
            entity.Property(e => e.created_on).HasDefaultValueSql("now()");

            entity.HasOne(d => d.company).WithMany(p => p.branch_office)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("branch_office_company_id_fkey");
        });

        modelBuilder.Entity<Company>(entity =>
        {
            entity.HasKey(e => e.company_id).HasName("company_pkey");

            entity.Property(e => e.active_flag).HasDefaultValue(true);
            entity.Property(e => e.created_at_ip).HasDefaultValueSql("'127.0.0.1'::inet");
            entity.Property(e => e.created_on).HasDefaultValueSql("now()");
        });

        modelBuilder.Entity<Department>(entity =>
        {
            entity.HasKey(e => e.department_id).HasName("department_pkey");

            entity.Property(e => e.active_flag).HasDefaultValue(true);
            entity.Property(e => e.created_at_ip).HasDefaultValueSql("'127.0.0.1'::inet");
            entity.Property(e => e.created_on).HasDefaultValueSql("now()");

            entity.HasOne(d => d.branch_office).WithMany(p => p.department)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("department_branch_office_id_fkey");
        });

        modelBuilder.Entity<Role>(entity =>
        {
            entity.HasKey(e => e.role_id).HasName("role_pkey");

            entity.Property(e => e.active_flag).HasDefaultValue(true);
            entity.Property(e => e.created_at_ip).HasDefaultValueSql("'127.0.0.1'::inet");
            entity.Property(e => e.created_on).HasDefaultValueSql("now()");

            entity.HasOne(d => d.company).WithMany(p => p.role)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("role_company_id_fkey");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.user_id).HasName("user_pkey");

            entity.Property(e => e.active_flag).HasDefaultValue(true);
            entity.Property(e => e.created_at_ip).HasDefaultValueSql("'127.0.0.1'::inet");
            entity.Property(e => e.created_on).HasDefaultValueSql("now()");
            entity.Property(e => e.master_flag).HasDefaultValue(false);

            entity.HasOne(d => d.company).WithMany(p => p.user)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("user_company_id_fkey");

            entity.HasOne(d => d.role).WithMany(p => p.user)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("user_role_id_fkey");
        });

        modelBuilder.Entity<User_detail>(entity =>
        {
            entity.HasKey(e => e.user_detail_id).HasName("user_detail_pkey");

            entity.Property(e => e.active_flag).HasDefaultValue(true);
            entity.Property(e => e.change_key_flag).HasDefaultValue(false);
            entity.Property(e => e.created_at_ip).HasDefaultValueSql("'127.0.0.1'::inet");
            entity.Property(e => e.created_on).HasDefaultValueSql("now()");
            entity.Property(e => e.factor_authentication_flag).HasDefaultValue(false);
            entity.Property(e => e.factor_authentication_type_flag).HasDefaultValue(false);
            entity.Property(e => e.failed_attempts_flag).HasDefaultValue(false);
            entity.Property(e => e.temporary_key_flag).HasDefaultValue(false);
            entity.Property(e => e.user_authentication_type_flag).HasDefaultValue(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);

}
