const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Person = require('./Model/person')
const dotenv = require("dotenv")

dotenv.config()

mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser : true, useUnifiedTopology : true }).then(res=>{


    console.log("db successfuly connect")
})
const createPerson = async () => {

try {
    const person = new Person({
        name:fatma,
        age:24,
        favoriteFoods:['pizza','hamburger']})
    
     await Person.save()

 } catch (error) {
    console.log('error')
}

}
createPerson()
//Create Many Records with model.create()
const manyPerson = async () => {

   try {

    const newPerson = await Person.insertMany([{name:"jack",age:29,favoriteFoods:['spaghetti']},
    {name:"cyrine",age:18,favoriteFoods:['sushi']
     }])

   } catch (error) {
    console.log('err')
   }
}
manyPerson()


//Use model.find() to Search Your Database

const findPerson = async (person) => {

    try {
        const find = await Person.find({name: person})
        
    } catch (error) {
        console.log("error")
    }
}
findPerson()


//Use model.findOne() 

const onePerson = async (str) => {
try {
    const prson = await Person.findOne({name:str})
} catch (error) {
    console.log("error")
}
}
onePerson("fatma")

//Use model.findById()
const idPerson = async (id) => {
try {
    const findId = await Person.findById({_id:id})
} catch (error) {
    console.log(error)
}

}
//idPerson()

//Perform Classic Updates by Running Find, Edit, then Save
const updateName = async (id,name) => {

try {
const update = await Person.findOneAndUpdate({id},{name})
    

//await updateName.save();
} catch (error) {
    console.log(error)
}
}
updateName("rym",27)

//Delete One Document Using model.findByIdAndRemove
const deletePerson = async (id) =>{
    try {
        const user = await  Person.findByIdAndRemove({_id:id})
    } catch (error) {
    
    
        console.log(error)
    }
    }
   // deletePerson(id)








 
















app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`))





//await model:find


/*const deleteUser = async (id) =>{
try {


    const user = await  Person.deleteOne({_id:id})
} catch (error) {

    console.log(error)
}
}
deleteUser(id)
const updateOne = async () =>{
    try {
    
    
        const user = await Person.updateOne({name:jack},{age:20})
    } catch (error) {
    
        console.log(error)
    }
    }
    updateOne()*/