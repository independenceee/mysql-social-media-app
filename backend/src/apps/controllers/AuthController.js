const { databaseMysql } = require("../../configs/databases");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class AuthController {
    async register(request, response) {
        try {
            const { username, password, email, name } = request.body;
            const query = "SELECT * FROM users WHERE username = ?";
            databaseMysql.query(query, [username], function (error, data) {
                if (error) {
                    return response.status(404).json({
                        message: error,
                    });
                }
                if (data.length) {
                    return response.status(409).json("User already exists!");
                }

                const salt = bcrypt.genSaltSync(10);
                const hashedPassword = bcrypt.hashSync(password, salt);

                const queryInsert =
                    "INSERT INTO users(`username`,`email`, `password`,`name`) VALUE (?, ?, ?, ?)";
                databaseMysql.query(
                    queryInsert,
                    [username, email, hashedPassword, name],
                    function (error, data) {
                        if (error) {
                            return response.status(200).json({
                                message: error,
                            });
                        }
                        return response.status(200).json({
                            message: "User has been created.",
                        });
                    }
                );
            });
        } catch (error) {
            if (error instanceof Error) {
                response.status(404).json({
                    message: error,
                });
            }
        }
    }

    async login(request, response) {
        try {
            const { email } = request.body;

            const query = "SELECT * FROM users WHERE username = ?";
            databaseMysql.query(query, [email], function (error, data) {
                if (error) {
                    return response.status(404).json({
                        messgae: error,
                    });
                }
                if (data.length == 0) {
                    response.status(404).json({
                        message: "User not found",
                    });
                }

                const checkPassword = bcrypt.compareSync(
                    request.body.password,
                    data[0].password
                );

                if (!checkPassword) {
                    return response.status(404).json("Wrong password or email");
                }

                const token = jwt.sign({ id: data[0].id }, "secretkey");
                const { password, ...other } = data[0];
                response
                    .cookie("accessToken", token, {
                        httpOnly: true,
                    })
                    .status(200)
                    .json(other);
            });
        } catch (error) {
            if (error instanceof Error) {
                response.status(404).json({
                    message: error,
                });
            }
        }
    }

    async logout(request, response) {
        try {
            response
                .clearCookie("accessToken", {
                    secure: true,
                    sameSite: "none",
                })
                .status(200)
                .json({
                    message: "User has been logout.",
                });
        } catch (error) {
            response.status(404).json({
                message: error,
            });
        }
    }
}

module.exports = new AuthController();
