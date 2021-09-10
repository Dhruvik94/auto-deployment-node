const express = require('express');
const app = express();

app.get("/user/test", (req, res) => {
    res.send({ msg: "Testing" });
});

app.listen(6000,console.log("Running on Port No 6000 ...."))
console.log("Hello production!!!!!!")