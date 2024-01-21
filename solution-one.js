const mongoose = require('mongoose');
const express = require('express');
const app = express();



app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/softwarejune')
.then(()=>console.log('connected to MongoDB...'))
.catch(err => console.log('could not connect to MongoDB...', err))




const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
    })

    
    const Course = mongoose.model('Course', courseSchema);



    async function getCourses() {
        const courses = await Course.find({ tags: 'backend', isPublished: true });
        console.log(courses)
        }


        // async function getCourses() {
        //     const courses = await Course
        //     .find({  isPublished: true })
        //     .sort({ price:-1})
        //     .select({name: 1,  author: 1, price:1})

        //     console.log(courses)
        //     }
            
        //     async function getCourses() {
        //         const courses = await Course
        //         .find()
        //     .or([{price:{$gte:15}},{name:/.*by.*/}])
        //         .sort({ price:-1})
        //         .select({name: 1,  author: 1, price:1, isPublished: true})
    
        //         console.log(courses)
        //         }
        
        // getCourses()


        // async function updateCourse(id) {
        //     const course = await Course.findById(id);
        //     if (!course) return;
        //     course.isPublished = true;
        //     course.author = 'James Brown';
        //     const result = await course.save();
        //     console.log(result)
        //     }
        //     updateCourse("6574467c9f4af0745b500420") 


        // async function updateCourse(id) {
        //     const course = await Course.findByIdAndUpdate(id, {
        //         $set: {
        //             author : 'Jack',
        //             isPublished : true
        //         }
        //     });
        //     console.log(course)
        //     }
        //     updateCourse("6574467c9f4af0745b500420") 

            // async function updateCourse(id) {
            //     const course = await Course.findByIdAndUpdate(id, {
            //         $set: {
            //             author : 'Jason',
            //             isPublished : true
            //         }
            //     }, {new: true});
            //     console.log(course)
            //     }
            //     updateCourse("6574467c9f4af0745b500420") 

                async function removeCourse(id) {
                    const result = await Course.deleteOne({ _id: id});
                    console.log(result)
                    }
                    removeCourse("6574467c9f4af0745b500420")



const port = process.env.PORT || 3000;

app.listen(port, () => {console.log(`listening on port ${port}...`)});