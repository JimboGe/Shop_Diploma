using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Shop_Diploma.Migrations
{
    public partial class addsizeimagetable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tblOrder_AspNetUsers_UserId",
                table: "tblOrder");

            migrationBuilder.DropForeignKey(
                name: "FK_tblProducts_tblBrand_BrandId",
                table: "tblProducts");

            migrationBuilder.DropPrimaryKey(
                name: "PK_tblOrder",
                table: "tblOrder");

            migrationBuilder.DropPrimaryKey(
                name: "PK_tblBrand",
                table: "tblBrand");

            migrationBuilder.RenameTable(
                name: "tblOrder",
                newName: "tblOrders");

            migrationBuilder.RenameTable(
                name: "tblBrand",
                newName: "tblBrands");

            migrationBuilder.RenameIndex(
                name: "IX_tblOrder_UserId",
                table: "tblOrders",
                newName: "IX_tblOrders_UserId");

            migrationBuilder.AddColumn<int>(
                name: "SizeImageId",
                table: "tblProducts",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddPrimaryKey(
                name: "PK_tblOrders",
                table: "tblOrders",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_tblBrands",
                table: "tblBrands",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "tblSizeImages",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Path = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tblSizeImages", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_tblProducts_SizeImageId",
                table: "tblProducts",
                column: "SizeImageId");

            migrationBuilder.AddForeignKey(
                name: "FK_tblOrders_AspNetUsers_UserId",
                table: "tblOrders",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_tblProducts_tblBrands_BrandId",
                table: "tblProducts",
                column: "BrandId",
                principalTable: "tblBrands",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_tblProducts_tblSizeImages_SizeImageId",
                table: "tblProducts",
                column: "SizeImageId",
                principalTable: "tblSizeImages",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tblOrders_AspNetUsers_UserId",
                table: "tblOrders");

            migrationBuilder.DropForeignKey(
                name: "FK_tblProducts_tblBrands_BrandId",
                table: "tblProducts");

            migrationBuilder.DropForeignKey(
                name: "FK_tblProducts_tblSizeImages_SizeImageId",
                table: "tblProducts");

            migrationBuilder.DropTable(
                name: "tblSizeImages");

            migrationBuilder.DropIndex(
                name: "IX_tblProducts_SizeImageId",
                table: "tblProducts");

            migrationBuilder.DropPrimaryKey(
                name: "PK_tblOrders",
                table: "tblOrders");

            migrationBuilder.DropPrimaryKey(
                name: "PK_tblBrands",
                table: "tblBrands");

            migrationBuilder.DropColumn(
                name: "SizeImageId",
                table: "tblProducts");

            migrationBuilder.RenameTable(
                name: "tblOrders",
                newName: "tblOrder");

            migrationBuilder.RenameTable(
                name: "tblBrands",
                newName: "tblBrand");

            migrationBuilder.RenameIndex(
                name: "IX_tblOrders_UserId",
                table: "tblOrder",
                newName: "IX_tblOrder_UserId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_tblOrder",
                table: "tblOrder",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_tblBrand",
                table: "tblBrand",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_tblOrder_AspNetUsers_UserId",
                table: "tblOrder",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_tblProducts_tblBrand_BrandId",
                table: "tblProducts",
                column: "BrandId",
                principalTable: "tblBrand",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
