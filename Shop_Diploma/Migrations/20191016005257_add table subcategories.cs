using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Shop_Diploma.Migrations
{
    public partial class addtablesubcategories : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tblProducts_tblCategories_CategoryId",
                table: "tblProducts");

            migrationBuilder.RenameColumn(
                name: "CategoryId",
                table: "tblProducts",
                newName: "SubcategoryId");

            migrationBuilder.RenameIndex(
                name: "IX_tblProducts_CategoryId",
                table: "tblProducts",
                newName: "IX_tblProducts_SubcategoryId");

            migrationBuilder.CreateTable(
                name: "tblSubcategories",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    CategoryId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tblSubcategories", x => x.Id);
                    table.ForeignKey(
                        name: "FK_tblSubcategories_tblCategories_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "tblCategories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_tblSubcategories_CategoryId",
                table: "tblSubcategories",
                column: "CategoryId");

            migrationBuilder.AddForeignKey(
                name: "FK_tblProducts_tblSubcategories_SubcategoryId",
                table: "tblProducts",
                column: "SubcategoryId",
                principalTable: "tblSubcategories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tblProducts_tblSubcategories_SubcategoryId",
                table: "tblProducts");

            migrationBuilder.DropTable(
                name: "tblSubcategories");

            migrationBuilder.RenameColumn(
                name: "SubcategoryId",
                table: "tblProducts",
                newName: "CategoryId");

            migrationBuilder.RenameIndex(
                name: "IX_tblProducts_SubcategoryId",
                table: "tblProducts",
                newName: "IX_tblProducts_CategoryId");

            migrationBuilder.AddForeignKey(
                name: "FK_tblProducts_tblCategories_CategoryId",
                table: "tblProducts",
                column: "CategoryId",
                principalTable: "tblCategories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
