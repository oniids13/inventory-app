
const asyncHandler = require('express-async-handler')
const db = require('../db/queries')



const indexController = asyncHandler(async (req, res) => {
    const selectedCategory = req.query.category || 'All'
    const categories = await db.getAllCategories()
    const categoryName = await db.categoryName()
    let values;

    if (selectedCategory !== 'All') {
        const result = await db.getItemfromCategory(selectedCategory)
        values = result
    } else {
        const result = await db.getAllItems()
        values = result
    }

    res.render('index.ejs' , { categories, selectedCategory, values, categoryName })
})



module.exports = {indexController}