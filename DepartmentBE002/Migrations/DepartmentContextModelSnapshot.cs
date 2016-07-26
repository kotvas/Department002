using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using DepartmentBE002.Models;

namespace DepartmentBE002.Migrations
{
    [DbContext(typeof(DepartmentContext))]
    partial class DepartmentContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.0.0-rc2-20901")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("DepartmentBE002.Models.DepartmentEvent", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<double>("AmountOfDepartment");

                    b.Property<double>("AmountOfEmployee");

                    b.Property<bool>("AreExpensesGenerated");

                    b.Property<DateTime>("DateCreated");

                    b.Property<DateTime>("DateOfEvent");

                    b.Property<Guid>("EmployeeId");

                    b.Property<Guid>("EventTypeId");

                    b.HasKey("Id");

                    b.HasIndex("EmployeeId");

                    b.HasIndex("EventTypeId");

                    b.ToTable("DepartmentEvents");
                });

            modelBuilder.Entity("DepartmentBE002.Models.Deposit", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<decimal>("Amount");

                    b.Property<DateTime>("Date");

                    b.Property<Guid>("EmployeeId");

                    b.HasKey("Id");

                    b.HasIndex("EmployeeId");

                    b.ToTable("Deposits");
                });

            modelBuilder.Entity("DepartmentBE002.Models.Employee", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("DateOfBirth");

                    b.Property<string>("FirstName");

                    b.Property<bool>("IsActive");

                    b.Property<string>("LastName");

                    b.Property<string>("Phone");

                    b.HasKey("Id");

                    b.ToTable("Employees");
                });

            modelBuilder.Entity("DepartmentBE002.Models.EmployeeAccount", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<decimal>("Amount");

                    b.Property<DateTime>("DateOfLastUpdate");

                    b.Property<Guid>("EmployeeId");

                    b.HasKey("Id");

                    b.HasIndex("EmployeeId");

                    b.ToTable("EmployeesAccounts");
                });

            modelBuilder.Entity("DepartmentBE002.Models.EventType", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<double>("AmountOfDepartment");

                    b.Property<double>("AmountOfEmployee");

                    b.Property<bool>("IsActive");

                    b.Property<string>("Title");

                    b.HasKey("Id");

                    b.ToTable("EventTypes");
                });

            modelBuilder.Entity("DepartmentBE002.Models.Expense", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<double>("Amount");

                    b.Property<DateTime>("DateCreate");

                    b.Property<DateTime?>("DateOfPayment");

                    b.Property<Guid>("DepartmentEventId");

                    b.Property<Guid?>("EmployeeId");

                    b.Property<string>("Status");

                    b.HasKey("Id");

                    b.HasIndex("DepartmentEventId");

                    b.HasIndex("EmployeeId");

                    b.ToTable("Expenses");
                });

            modelBuilder.Entity("DepartmentBE002.Models.DepartmentEvent", b =>
                {
                    b.HasOne("DepartmentBE002.Models.Employee")
                        .WithMany()
                        .HasForeignKey("EmployeeId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("DepartmentBE002.Models.EventType")
                        .WithMany()
                        .HasForeignKey("EventTypeId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("DepartmentBE002.Models.Deposit", b =>
                {
                    b.HasOne("DepartmentBE002.Models.Employee")
                        .WithMany()
                        .HasForeignKey("EmployeeId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("DepartmentBE002.Models.EmployeeAccount", b =>
                {
                    b.HasOne("DepartmentBE002.Models.Employee")
                        .WithMany()
                        .HasForeignKey("EmployeeId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("DepartmentBE002.Models.Expense", b =>
                {
                    b.HasOne("DepartmentBE002.Models.DepartmentEvent")
                        .WithMany()
                        .HasForeignKey("DepartmentEventId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("DepartmentBE002.Models.Employee")
                        .WithMany()
                        .HasForeignKey("EmployeeId");
                });
        }
    }
}
