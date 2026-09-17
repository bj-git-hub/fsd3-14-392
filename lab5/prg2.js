import express from "express";
import path from 'path'
import { fileURLToPath } from "url";

const PORT = 4444;
const app = express()

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

app.use(express.static(path.join(dirname, "frontend")));

app.use((req,res) =>{
    res.status(404).send("Resource not found");
})

app.listen(PORT, () => console.log("Prg2 server is running at ", PORT));