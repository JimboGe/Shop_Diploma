using Microsoft.EntityFrameworkCore.Migrations;

namespace Shop_Diploma.Migrations
{
    public partial class deleteclienttbl : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tblOrders_AspNetUsers_UserId",
                table: "tblOrders");

            migrationBuilder.DropIndex(
                name: "IX_tblOrders_UserId",
                table: "tblOrders");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "tblOrders",
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UsserId",
                table: "tblOrders",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_tblOrders_UsserId",
                table: "tblOrders",
                column: "UsserId");

            migrationBuilder.AddForeignKey(
                name: "FK_tblOrders_AspNetUsers_UsserId",
                table: "tblOrders",
                column: "UsserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tblOrders_AspNetUsers_UsserId",
                table: "tblOrders");

            migrationBuilder.DropIndex(
                name: "IX_tblOrders_UsserId",
                table: "tblOrders");

            migrationBuilder.DropColumn(
                name: "UsserId",
                table: "tblOrders");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "tblOrders",
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_tblOrders_UserId",
                table: "tblOrders",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_tblOrders_AspNetUsers_UserId",
                table: "tblOrders",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
