module.exports = function(sequelize, DataTypes) {
    var Ingredients = sequelize.define("Ingredients", {
        recipeName: {
            ingredientName: DataTypes.STRING,
            allowNull: false
        }
    });
    Ingredients.asscociate = function (models) {
        models.Ingredients.belongsTo(models.Ingredients, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Ingredients;
};