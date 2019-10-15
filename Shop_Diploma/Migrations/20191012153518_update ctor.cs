using Microsoft.EntityFrameworkCore.Migrations;

namespace Shop_Diploma.Migrations
{
    public partial class updatector : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_tblOrdersProducts",
                table: "tblOrdersProducts");

            migrationBuilder.DropIndex(
                name: "IX_tblOrdersProducts_OrderId",
                table: "tblOrdersProducts");

            migrationBuilder.AddPrimaryKey(
                name: "PK_tblOrdersProducts",
                table: "tblOrdersProducts",
                columns: new[] { "OrderId", "ProductId" });

            migrationBuilder.CreateIndex(
                name: "IX_tblOrdersProducts_ProductId",
                table: "tblOrdersProducts",
                column: "ProductId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_tblOrdersProducts",
                table: "tblOrdersProducts");

            migrationBuilder.DropIndex(
                name: "IX_tblOrdersProducts_ProductId",
                table: "tblOrdersProducts");

            migrationBuilder.AddPrimaryKey(
                name: "PK_tblOrdersProducts",
                table: "tblOrdersProducts",
                columns: new[] { "ProductId", "OrderId" });

            migrationBuilder.CreateIndex(
                name: "IX_tblOrdersProducts_OrderId",
                table: "tblOrdersProducts",
                column: "OrderId");
        }
    }
}
