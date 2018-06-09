module.exports = function(sequelize, DataTypes) {
    var Recipe = sequelize.define("Recipe", {
        recipeName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    Recipe.asscociate = function (models) {
        models.Recipe.belongsTo(models.Recipe, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Recipe;
};