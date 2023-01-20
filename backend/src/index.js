require("dotenv").config();
require("express-async-error");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const router = require("./routes/index.routes");
const app = express();

app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true, //access-control-allow-credentials:true
        optionSuccessStatus: 200,
    })
);
app.use(express.json());
app.use(cookieParser());

router(app);
const PORT = process.env.PORT || 5000;
const start = async function () {
    try {
        app.listen(PORT, function () {
            return console.log(`http://localhost:${PORT}`);
        });
    } catch (error) {
        if (error instanceof Error) {
            console.log(error);
        }
    }
};

(function () {
    start();
})();
