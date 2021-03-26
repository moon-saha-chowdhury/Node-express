const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
app.use(cors());
app.use(bodyParser.json());

const users =['Asad', 'Moin','Sabed','Shusmita','Sohana','Sabana'];

// const rootCall =(request, response)=>response.send('Thank you');
// app.get('/',(request, response)=>{
//     const fruits ={
//         product: 'ada',
//         price: 200
//     }
//     response.send(fruits);

// });
// app.get('/fruit/banana', (req, res)=>{
//     res.send({fruit:"banana", quantity:1000, price:10000});
// })

//get

app.get('/users/:id', (req,res)=>{
    // console.log(req.params.id);
    // //orthat parameter hisebe request jasse kina seta check korchi console kore
    const id = req.params.id;
    const name = users[id];
    res.send({id, name});

})
//post
app.post('/addUser',(req,res)=>{
    // console.log("data received",req.body);

    const user = req.body;
    user.id = 55;
    res.send(user);
    //have to save to database
})


app.listen(4200, ()=>console.log('Listening to port 4200'))