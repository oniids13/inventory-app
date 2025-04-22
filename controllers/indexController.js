
const asyncHandler = require('express-async-handler')
const db = require('../db/queries')



const indexController = asyncHandler(async (req, res) => {
    const selectedCategory = req.query.category || 'All'
    const searchQuery = req.query.search || ''
    const categories = await db.getAllCategories()
    const categoryName = await db.categoryName()
    let values;

    if (searchQuery) {
        values = await db.searchItem(searchQuery)
    } else if (selectedCategory !== 'All') {
        const result = await db.getItemfromCategory(selectedCategory)
        values = result
    } else {
        values= await db.getAllItems()
    }

    res.render('index.ejs' , { categories: categories || [], selectedCategory, searchQuery, values: values || [], categoryName })
})

const singlePageController = asyncHandler(async (req, res) => {
    const id = Number(req.params.id)

    const result = await db.getItem(id)
    const categoryName = await db.categoryName()
 
    res.render('singlePageView', { item: result, categoryName })
})


const editItemController = asyncHandler(async (req, res) => {
    const id = Number(req.params.id)

    const result = await db.getItem(id)
    const categoryName = await db.categoryName()

    res.render('editItemPage', { item: result, categoryName })
})


const editSuccessController = asyncHandler(async (req, res) => {
    const {item_name, description, price, qty, category, item_id} = req.body

    await db.updateItem(item_id, item_name, description, qty, price, category)


    res.redirect('/')
})

const deleteItemController = asyncHandler(async (req, res) => {
    const id = Number(req.params.id)

    await db.deleteItem(id)

    res.redirect('/')
})

const addItemController = asyncHandler(async (req, res) => {
    const categoryName = await db.categoryName()
    res.render('addItemForm', {categoryName})
})

const addCategoryController = asyncHandler( async (req, res) => {
    const categoryName = await db.categoryName()
    res.render('addCategoryForm', {categoryName})
})


const addItemPostController = asyncHandler(async (req, res) => {
    const {item_name, description, price, qty, category} = req.body

    await db.addItems(item_name, description, qty, price, category)


    res.redirect('/')
})


const addCategoryPostController = asyncHandler(async (req, res) => {
    const { categoryName } = req.body

    await db.addCategory(categoryName)

    res.redirect('/')
})

const deleteCategoryController = asyncHandler(async (req, res) => {
    const { id } = req.params

    await db.deleteCategory(id)

    res.redirect('/addCategory')
})

module.exports = {indexController, singlePageController, editItemController, editSuccessController, deleteItemController, addItemController, addCategoryController, addCategoryPostController, addItemPostController, deleteCategoryController}
