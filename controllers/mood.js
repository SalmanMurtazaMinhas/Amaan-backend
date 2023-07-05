const Mood = require('../models/Mood');


// exports.mood_create_get = async (req, res) => {
//     try {
//         res.render('mood/add')
//     } catch (error) {
//         console.log(error.message)
//     }

    
// }


exports.mood_create_post = async (req, res) => {
    req.body.user = req.user.id


    const mood = new Mood(req.body)
    await mood.save()
        .then(() => {
            console.log('Your mood has been saved')
            res.status(201).json(mood)
        })
        .catch((err) => {
            console.log('an error occurred', err.message)
        })
}


exports.mood_index_get = async (req, res) => {
    try{
        const moods = await Mood.find()
        console.log(moods)
        res.status(200).json(moods)

    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: 'Something Went Wrong!'})
    }


}