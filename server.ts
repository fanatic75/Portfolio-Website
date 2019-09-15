import * as express from "express";
import * as path from "path";
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.get("/",(req,res)=>{
    res.sendFile(__dirname + '/build/index.html');

});
app.use((req,res)=>{
    res.status(302).redirect("https://prateek.engineer");
})

app.listen(5000 as number);


