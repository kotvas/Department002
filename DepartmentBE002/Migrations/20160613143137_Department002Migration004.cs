using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DepartmentBE002.Migrations
{
    public partial class Department002Migration004 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "EventTypes",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EventTypes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "EmployeeEvents",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ResponsibleEmployeeId = table.Column<Guid>(nullable: true),
                    TypeId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EmployeeEvents", x => x.Id);
                    table.ForeignKey(
                        name: "FK_EmployeeEvents_Employees_ResponsibleEmployeeId",
                        column: x => x.ResponsibleEmployeeId,
                        principalTable: "Employees",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_EmployeeEvents_EventTypes_TypeId",
                        column: x => x.TypeId,
                        principalTable: "EventTypes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.AddColumn<Guid>(
                name: "EmployeeEventId",
                table: "Employees",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Employees_EmployeeEventId",
                table: "Employees",
                column: "EmployeeEventId");

            migrationBuilder.CreateIndex(
                name: "IX_EmployeeEvents_ResponsibleEmployeeId",
                table: "EmployeeEvents",
                column: "ResponsibleEmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_EmployeeEvents_TypeId",
                table: "EmployeeEvents",
                column: "TypeId");

            migrationBuilder.AddForeignKey(
                name: "FK_Employees_EmployeeEvents_EmployeeEventId",
                table: "Employees",
                column: "EmployeeEventId",
                principalTable: "EmployeeEvents",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Employees_EmployeeEvents_EmployeeEventId",
                table: "Employees");

            migrationBuilder.DropIndex(
                name: "IX_Employees_EmployeeEventId",
                table: "Employees");

            migrationBuilder.DropColumn(
                name: "EmployeeEventId",
                table: "Employees");

            migrationBuilder.DropTable(
                name: "EmployeeEvents");

            migrationBuilder.DropTable(
                name: "EventTypes");
        }
    }
}
