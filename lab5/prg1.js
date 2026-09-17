import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const PORT = 3333;
const app = express();

const filename = fileURLToPath(import.meta.url); //reference of root folder
const dirname = path.dirname(filename);  // store the address of project folder

app.get("/", (req,res)=>{
    res.sendFile(path.join(dirname, "public", "index.html" ))
})
app.get("/about", (req,res)=>{
    res.sendFile(path.join(dirname, "public", "about.html" ))
})
app.get("/enquiry", (req,res)=>{
    res.sendFile(path.join(dirname, "public", "enquiry.html" ))
})

app.listen(PORT, () => console.log("Prg1 Server is running at ", PORT));
