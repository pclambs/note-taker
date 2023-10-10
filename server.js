const express = require('express')
const viewRoutes = require("./controllers/viewRoutes")
const apiRoutes = require("./controllers/apiRoutes")

const app = express();
const PORT = process.env.PORT || 3000

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(apiRoutes)
app.use(viewRoutes)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})