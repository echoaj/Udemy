const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/fruit', (req, res) => {
    res.send("GET /fruit response");
});

app.post("/fruit", (req, res) => {
    console.log(req.body);
    const { fruit, qty } = req.body;
    res.send(`GET /fruit response: Fruit: ${fruit} Quantity: ${qty}`);
});

app.listen(3000, () => {
    console.log("ON PORT 3000!");
});

