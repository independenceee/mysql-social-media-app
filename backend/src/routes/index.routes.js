const authRouter = require("./auth.routes");

const router = function (app) {
    app.use("/api/v1/auth", authRouter);
};

module.exports = router;
