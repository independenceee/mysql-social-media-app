const { databaseMysql } = require("../../configs/databases");

class PostController {
    async getPosts(request, response) {
        try {
            const query = `SELECT p.*, u.id AS userId, name, profilePicture FROM posts AS p JOIN users AS u ON (u.id = p.userId)`;
            databaseMysql.query(query, function (error, data) {
                if (error) {
                    return response.status(404).json({
                        message: error,
                    });
                }
                return response.status(200).json(data)
            });
        } catch (error) {
            if (error instanceof Error) {
                response.status(404).json({
                    message: error,
                });
            }
        }
    }
}
