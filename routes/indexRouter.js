const { Router } = require('express')
const {indexController, singlePageController, editItemController, editSuccessController, deleteItemController, addItemController, addCategoryController, addCategoryPostController, addItemPostController, deleteCategoryController} = require('../controllers/indexController')

const indexRouter = Router()


indexRouter.get('/', indexController)
indexRouter.get('/item/:id', singlePageController)
indexRouter.get('/edit/:id', editItemController)
indexRouter.get('/delete/:id', deleteItemController)
indexRouter.get('/add', addItemController)
indexRouter.get('/addCategory', addCategoryController)
indexRouter.get('/deleteCategory/:id', deleteCategoryController)

indexRouter.post('/edit', editSuccessController)
indexRouter.post('/add', addItemPostController)
indexRouter.post('/addCategory', addCategoryPostController)



module.exports = indexRouter