using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DepartmentBE002.Migrations
{
    public partial class Department002Migration004 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "AreExpensesGenerated",
                table: "DepartmentEvents",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AreExpensesGenerated",
                table: "DepartmentEvents");
        }
    }
}
