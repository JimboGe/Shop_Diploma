using Microsoft.EntityFrameworkCore.Migrations;

namespace Shop_Diploma.Migrations
{
    public partial class updateorder : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tblInCategories_tblCategories_CategoryId",
                table: "tblInCategories");

            migrationBuilder.RenameColumn(
                name: "Price",
                table: "tblOrders",
                newName: "FullPrice");

            migrationBuilder.AddColumn<int>(
                name: "OrderId",
                table: "tblProducts",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<int>(
                name: "CategoryId",
                table: "tblInCategories",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_tblProducts_OrderId",
                table: "tblProducts",
                column: "OrderId");

            migrationBuilder.AddForeignKey(
                name: "FK_tblInCategories_tblCategories_CategoryId",
                table: "tblInCategories",
                column: "CategoryId",
                principalTable: "tblCategories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_tblProducts_tblOrders_OrderId",
                table: "tblProducts",
                column: "OrderId",
                principalTable: "tblOrders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tblInCategories_tblCategories_CategoryId",
                table: "tblInCategories");

            migrationBuilder.DropForeignKey(
                name: "FK_tblProducts_tblOrders_OrderId",
                table: "tblProducts");

            migrationBuilder.DropIndex(
                name: "IX_tblProducts_OrderId",
                table: "tblProducts");

            migrationBuilder.DropColumn(
                name: "OrderId",
                table: "tblProducts");

            migrationBuilder.RenameColumn(
                name: "FullPrice",
                table: "tblOrders",
                newName: "Price");

            migrationBuilder.AlterColumn<int>(
                name: "CategoryId",
                table: "tblInCategories",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddForeignKey(
                name: "FK_tblInCategories_tblCategories_CategoryId",
                table: "tblInCategories",
                column: "CategoryId",
                principalTable: "tblCategories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
