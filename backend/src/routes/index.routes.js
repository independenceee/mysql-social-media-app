const authRouter = require("./auth.routes");
const userRouter = require("./users.routes");
const router = function (app) {
    app.use("/api/v1/auth", authRouter);
    app.use("/api/v1/user", userRouter);
};

module.exports = router;
