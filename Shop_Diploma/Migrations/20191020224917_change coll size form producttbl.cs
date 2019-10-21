using Microsoft.EntityFrameworkCore.Migrations;

namespace Shop_Diploma.Migrations
{
    public partial class changecollsizeformproducttbl : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Size",
                table: "tblProducts");

            migrationBuilder.AddColumn<string>(
                name: "Sizes",
                table: "tblProducts",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Sizes",
                table: "tblProducts");

            migrationBuilder.AddColumn<string>(
                name: "Size",
                table: "tblProducts",
                nullable: true);
        }
    }
}
