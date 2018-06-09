module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        userName: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                len: [7,17]
            }
        },
        password: {
            type: DataType.STRING,
            allowNull: false
        }
    })
    return User;
}