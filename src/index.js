const app = require('./app')
const port = process.env.PORT

// app.use((req, res, next) => { // will run after new request but before route handler
//     if(req.method === 'GET'){
//         res.send('GET requests are disabled')
//     }else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site under maintenance')
// })


// const jwt = require('jsonwebtoken')
// const myFunction = async () => {
//     const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse')
//     console.log(token)

//     const data = jwt.verify(token, 'thisismynewcourses')
//     console.log(data)
// }

// myFunction()

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})


// const main = async () => {
//     // const task = await Task.findById('609624ab126b3933e05b6fe7')
//     // await task.populate('owner').execPopulate() //populates owner to be the entire profile of owner through the reference field in the task model
//     // console.log(task.owner)

//     const user = await User.findById('609623957951fa5200dab048')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()

// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb) {
//         if(!file.originalname.match(/\.(doc|docx)$/)){
//             return cb(new Error('Please upload a word document'))
//         }

//         cb(undefined, true)

//         // cb(new Error('File must be a PDF'))
//         // cb(undefined, true)
//         // cb(undefined, false)
//     }
// })

