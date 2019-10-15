using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Shop_Diploma.Migrations
{
    public partial class updateproductuserordertables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tblOrders_AspNetUsers_UserId",
                table: "tblOrders");

            migrationBuilder.DropForeignKey(
                name: "FK_tblProducts_tblOrders_OrderId",
                table: "tblProducts");

            migrationBuilder.DropIndex(
                name: "IX_tblProducts_OrderId",
                table: "tblProducts");

            migrationBuilder.DropPrimaryKey(
                name: "PK_tblOrders",
                table: "tblOrders");

            migrationBuilder.DropIndex(
                name: "IX_tblOrders_UserId",
                table: "tblOrders");

            migrationBuilder.DropColumn(
                name: "OrderId",
                table: "tblProducts");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "tblOrders");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "tblOrders",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ProductId",
                table: "tblOrders",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_tblOrders",
                table: "tblOrders",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_tblOrders_ProductId",
                table: "tblOrders",
                column: "ProductId");

            migrationBuilder.AddForeignKey(
                name: "FK_tblOrders_tblProducts_ProductId",
                table: "tblOrders",
                column: "ProductId",
                principalTable: "tblProducts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_tblOrders_AspNetUsers_UserId",
                table: "tblOrders",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tblOrders_tblProducts_ProductId",
                table: "tblOrders");

            migrationBuilder.DropForeignKey(
                name: "FK_tblOrders_AspNetUsers_UserId",
                table: "tblOrders");

            migrationBuilder.DropPrimaryKey(
                name: "PK_tblOrders",
                table: "tblOrders");

            migrationBuilder.DropIndex(
                name: "IX_tblOrders_ProductId",
                table: "tblOrders");

            migrationBuilder.DropColumn(
                name: "ProductId",
                table: "tblOrders");

            migrationBuilder.AddColumn<int>(
                name: "OrderId",
                table: "tblProducts",
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "tblOrders",
                nullable: true,
                oldClrType: typeof(string));

            migrationBuilder.AddColumn<int>(
                name: "Id",
                table: "tblOrders",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            migrationBuilder.AddPrimaryKey(
                name: "PK_tblOrders",
                table: "tblOrders",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_tblProducts_OrderId",
                table: "tblProducts",
                column: "OrderId");

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
    }
}
