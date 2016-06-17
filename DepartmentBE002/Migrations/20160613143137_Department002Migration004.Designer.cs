using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using DepartmentBE002.Models;

namespace DepartmentBE002.Migrations
{
    [DbContext(typeof(DepartmentContext))]
    [Migration("20160613143137_Department002Migration004")]
    partial class Department002Migration004
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.0.0-rc2-20901")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("DepartmentBE002.Models.Employee", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("DateOfBirth");

                    b.Property<Guid?>("EmployeeEventId");

                    b.Property<string>("FirstName");

                    b.Property<string>("LastName");

                    b.Property<string>("Phone");

                    b.HasKey("Id");

                    b.HasIndex("EmployeeEventId");

                    b.ToTable("Employees");
                });

            modelBuilder.Entity("DepartmentBE002.Models.EmployeeEvent", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<Guid?>("ResponsibleEmployeeId");

                    b.Property<Guid?>("TypeId");

                    b.HasKey("Id");

                    b.HasIndex("ResponsibleEmployeeId");

                    b.HasIndex("TypeId");

                    b.ToTable("EmployeeEvents");
                });

            modelBuilder.Entity("DepartmentBE002.Models.EventType", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("EventTypes");
                });

            modelBuilder.Entity("DepartmentBE002.Models.Payment", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<decimal>("Amount");

                    b.Property<DateTime>("Date");

                    b.Property<Guid>("EmployeeId");

                    b.HasKey("Id");

                    b.HasIndex("EmployeeId");

                    b.ToTable("Payments");
                });

            modelBuilder.Entity("DepartmentBE002.Models.Employee", b =>
                {
                    b.HasOne("DepartmentBE002.Models.EmployeeEvent")
                        .WithMany()
                        .HasForeignKey("EmployeeEventId");
                });

            modelBuilder.Entity("DepartmentBE002.Models.EmployeeEvent", b =>
                {
                    b.HasOne("DepartmentBE002.Models.Employee")
                        .WithMany()
                        .HasForeignKey("ResponsibleEmployeeId");

                    b.HasOne("DepartmentBE002.Models.EventType")
                        .WithMany()
                        .HasForeignKey("TypeId");
                });

            modelBuilder.Entity("DepartmentBE002.Models.Payment", b =>
                {
                    b.HasOne("DepartmentBE002.Models.Employee")
                        .WithMany()
                        .HasForeignKey("EmployeeId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
        }
    }
}
