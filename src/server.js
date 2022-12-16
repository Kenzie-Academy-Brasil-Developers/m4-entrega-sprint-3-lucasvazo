import app from "./app";
import "dotenv/config";
import { startDatabase } from "./database";

export default app.listen(3000, async () => {
    console.log("Server running");
    await startDatabase();
});