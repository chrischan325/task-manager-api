const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

// ------------------------------------------------------------------------

// const me = new User({ //instance of the model
//     name: 'PPPPP',
//     email: 'PPPP@gmail.com',
//     password: 'EHEHEHHEEH'
// })

// me.save().then((result) =>{
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })



// const task = new Task({
//     description: 'Take out trash     ',
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log(error)
// })