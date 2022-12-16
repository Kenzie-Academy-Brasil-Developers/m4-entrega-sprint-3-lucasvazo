import express from "express"
import categoriesRouter from "./routers/categoriesRouter"

const app = express()

app.use(express.json())
app.use('/categories', categoriesRouter)

export default app
