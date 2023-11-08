using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace APIProjetoBlog.Migrations
{
    /// <inheritdoc />
    public partial class ForeignKey : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Posts_CategoryFK",
                table: "Posts",
                column: "CategoryFK");

            migrationBuilder.AddForeignKey(
                name: "FK_Posts_Categories_CategoryFK",
                table: "Posts",
                column: "CategoryFK",
                principalTable: "Categories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Posts_Categories_CategoryFK",
                table: "Posts");

            migrationBuilder.DropIndex(
                name: "IX_Posts_CategoryFK",
                table: "Posts");
        }
    }
}
