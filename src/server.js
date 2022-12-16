import app from "./app";
import "dotenv/config";
import { startDatabase } from "./database";

app.listen(3000, () => {
    console.log("Server running");
    startDatabase();
});