const express = require("express")
const app = express()
const PORT = 3001
const { typeError } = require('./middleware/errors');
app.use(express.json())
const cors = require('cors');
app.use(cors());

app.use("/products", require("./routes/products"));
app.use("/categories", require("./routes/categories"));
app.use("/orders", require("./routes/orders"));
app.use("/users", require("./routes/users"));
app.use("/reviews", require("./routes/reviews"));

app.use(typeError)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))