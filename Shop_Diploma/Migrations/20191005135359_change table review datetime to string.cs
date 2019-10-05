using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Shop_Diploma.Migrations
{
    public partial class changetablereviewdatetimetostring : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Date",
                table: "tblReviews",
                nullable: true,
                oldClrType: typeof(DateTime));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "Date",
                table: "tblReviews",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);
        }
    }
}
