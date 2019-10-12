using Microsoft.EntityFrameworkCore.Migrations;

namespace Shop_Diploma.Migrations
{
    public partial class changeorderproducts : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tblOrders_AspNetUsers_UsserId",
                table: "tblOrders");

            migrationBuilder.DropForeignKey(
                name: "FK_tblProducts_tblOrders_OrderId",
                table: "tblProducts");

            migrationBuilder.DropIndex(
                name: "IX_tblOrders_UsserId",
                table: "tblOrders");

            migrationBuilder.DropColumn(
                name: "UsserId",
                table: "tblOrders");

            migrationBuilder.AlterColumn<int>(
                name: "OrderId",
                table: "tblProducts",
                nullable: true,
                oldClrType: typeof(int));

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

            migrationBuilder.AddForeignKey(
                name: "FK_tblProducts_tblOrders_OrderId",
                table: "tblProducts",
                column: "OrderId",
                principalTable: "tblOrders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tblOrders_AspNetUsers_UserId",
                table: "tblOrders");

            migrationBuilder.DropForeignKey(
                name: "FK_tblProducts_tblOrders_OrderId",
                table: "tblProducts");

            migrationBuilder.DropIndex(
                name: "IX_tblOrders_UserId",
                table: "tblOrders");

            migrationBuilder.AlterColumn<int>(
                name: "OrderId",
                table: "tblProducts",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

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

            migrationBuilder.AddForeignKey(
                name: "FK_tblProducts_tblOrders_OrderId",
                table: "tblProducts",
                column: "OrderId",
                principalTable: "tblOrders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
