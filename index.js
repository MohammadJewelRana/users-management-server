const express=require('express')
const app=express();
const cors=require('cors');
const port=process.env.PORT || 5000;

const users=[
    {id:1,name:'sabana',email:'sabana@gmail.com'},
    {id:2,name:'sabnoor',email:'sabnoor@gmail.com'},
    {id:3,name:'sabila',email:'sabila@gmail.com'},
]

//middleware
app.use(cors());
 app.use(express.json());


app.get('/',(req,res)=>{
    res.send('Users management systems is running')
})


 



app.get('/users',(req,res)=>{

    res.send(users);
})

app.post('/users',(req,res)=>{

    console.log('Api hitting');
    console.log(req.body);

    const newUSer=req.body;
    newUSer.id=users.length+1;
    users.push(newUSer);

    res.send(newUSer);

})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})