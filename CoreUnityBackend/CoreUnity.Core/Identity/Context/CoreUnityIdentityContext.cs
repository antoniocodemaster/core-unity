using System;
using System.Collections.Generic;
using CoreUnity.Core.Identity.Entities;
using Microsoft.EntityFrameworkCore;

namespace CoreUnity.Core.Identity.Context;

public partial class CoreUnityIdentityContext : DbContext
{
    public CoreUnityIdentityContext()
    {
    }

    public CoreUnityIdentityContext(DbContextOptions<CoreUnityIdentityContext> options)
        : base(options)
    {
    }

    public virtual DbSet<company> company { get; set; }

    public virtual DbSet<role> role { get; set; }

    public virtual DbSet<user> user { get; set; }

    public virtual DbSet<user_detail> user_detail { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseNpgsql("Host=localhost;Port=5434;Database=core_unity_identity;Username=postgres;Password=mysecretpassword");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<company>(entity =>
        {
            entity.HasKey(e => e.company_id).HasName("company_pkey");

            entity.Property(e => e.active_flag).HasDefaultValue(true);
            entity.Property(e => e.created_at_ip).HasDefaultValueSql("'127.0.0.1'::inet");
            entity.Property(e => e.created_on).HasDefaultValueSql("now()");
        });

        modelBuilder.Entity<role>(entity =>
        {
            entity.HasKey(e => e.role_id).HasName("role_pkey");

            entity.Property(e => e.active_flag).HasDefaultValue(true);
            entity.Property(e => e.created_at_ip).HasDefaultValueSql("'127.0.0.1'::inet");
            entity.Property(e => e.created_on).HasDefaultValueSql("now()");

            entity.HasOne(d => d.company).WithMany(p => p.role)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("role_company_id_fkey");
        });

        modelBuilder.Entity<user>(entity =>
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

        modelBuilder.Entity<user_detail>(entity =>
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
