let exp = require('express');
let app = exp();
let cors = require('cors');
app.use(exp.urlencoded({extended:true}));
app.use(exp.json());
app.listen(3000,()=>{
    console.log("server started");
});
app.use(cors());
let cardsinfo = [
{
name:"Cat",
img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUv7s2i6T-PI3CreSYV1veCJKNMWVmLrJCMVFU2-kDhpHkfYctXoUF17foU70SHjq8VbQ&usqp=CAU",
dec:"Domestic cats are characterized by retractable claws, powerful bodies, acute senses, long tails, and specialized teeth adapted for hunting prey. domestic cats. Also called: house cat or domestic cat"
},
{
name:"Dog",
img:"https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg",
dec:"The dog is a domesticated descendant of the wolf. Also called the domestic dog, it is derived from extinct gray wolves, and the gray wolf is the dog's "
},
{
name:"Pig",
img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYWS1tgyTUcYThcF4FJko37zaDKpJWFEmUpuVqFS6s182varp7",
dec:"When domesticated pigs arrived in Europe, they extensively interbred with wild boar but retained their domesticated features. Pig. Domestic pigs. Conservation .",
}
];

app.get("/GET/carts",(req,res)=>{
res.json(cardsinfo);
})

app.post("/edit/:name",(req,res)=>{
let user = req.body;

let arr=cardsinfo.map((val)=>{
if(val.name==req.body.oldname){
console.log(req.body.img);
return {name:req.body.name,dec:req.body.dec,img:req.body.img};
}
return val;
})


cardsinfo = arr ;
res.send();
})


app.delete("/",(req,res)=>{
let arr = cardsinfo.filter((val)=>{
return val.name!=req.body.name;
});
cardsinfo = arr;
res.send("seleted");
})