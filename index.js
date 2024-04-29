const express = require("express")
const app = express()
const PORT= 3001

app.use(express.json())

app.use("/users",require("./routes/users"))
app.use("/users",require("./routes/users"))

app.listen(PORT,()=> console.log(`Server started on port ${PORT}`))