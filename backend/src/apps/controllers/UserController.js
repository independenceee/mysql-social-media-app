const { databaseMysql } = require("../../configs/databases");

class UserController {
    async getUser(request, response) {
        const query = "SELECT * FROM users";

        databaseMysql.query(query, function (error, data) {
            if (error) {
                return;
            }
            response.status(200).json(data);
        });
    }
}

module.exports = new UserController();
