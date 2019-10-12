using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Shop_Diploma.Migrations
{
    public partial class updatedtables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.CreateTable(
                name: "tblOrdersProducts",
                columns: table => new
                {
                    ProductId = table.Column<int>(nullable: false),
                    OrderId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tblOrdersProducts", x => new { x.ProductId, x.OrderId });
                    table.ForeignKey(
                        name: "FK_tblOrdersProducts_tblOrders_OrderId",
                        column: x => x.OrderId,
                        principalTable: "tblOrders",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_tblOrdersProducts_tblProducts_ProductId",
                        column: x => x.ProductId,
                        principalTable: "tblProducts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_tblOrders_UserId",
                table: "tblOrders",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_tblOrdersProducts_OrderId",
                table: "tblOrdersProducts",
                column: "OrderId");

            migrationBuilder.AddForeignKey(
                name: "FK_tblOrders_AspNetUsers_UserId",
                table: "tblOrders",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tblOrders_AspNetUsers_UserId",
                table: "tblOrders");

            migrationBuilder.DropTable(
                name: "tblOrdersProducts");

            migrationBuilder.DropPrimaryKey(
                name: "PK_tblOrders",
                table: "tblOrders");

            migrationBuilder.DropIndex(
                name: "IX_tblOrders_UserId",
                table: "tblOrders");

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
    }
}
