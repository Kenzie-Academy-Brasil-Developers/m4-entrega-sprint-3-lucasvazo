import "express-async-errors";
import express from "express"
import categoriesRouter from "./routers/categoriesRouter"
import { handleErrors } from "./errors";

const app = express()

app.use(express.json())
app.use('/categories', categoriesRouter)

app.use(handleErrors)

export default app
