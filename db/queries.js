const pool = require('./pool')


async function getAllCategories() {
    try {
        const { rows } = await pool.query('SELECT * FROM categories')
        return rows
    } catch(err) {
        console.error(err)
    }
    
}


async function getAllItems() {
    try {
        const { rows } = await pool.query('SELECT * FROM items')
        return rows
    } catch (err) {
        console.log(err)
    }
    
}

async function getItem(id) {
    try {
        const  item  = await pool.query('SELECT * FROM items WHERE id=($1)', [id])
        return item.rows
    } catch(err) {
        console.log(err)
    }
}


async function getItemfromCategory(title) {
    try {
        const { rows } = await pool.query(
            `SELECT * FROM items INNER JOIN categories ON categories.id = items.category_id WHERE title = ($1)`, [title]
        );
    
        return rows
    } catch(err) {
        console.error(err)
    }
    
}

async function addItems(item_name, description, qty, price, category_id) {
    try {
        await pool.query('INSERT INTO items (item_name, description, qty, price, category_id) VALUES ($1, $2, $3, $4, $5)', [item_name, description, qty, price, category_id])

        console.log(`Item ${item_name} added successfully`)
    } catch(err) {
        console.error(err)
    }
    
}

async function addCategory(title) {
    try {
        await pool.query('INSERT INTO categories (title) VALUES ($1)', [title])
        console.log(`Category ${title} is added successfully.`)
    } catch(err) {
        console.error(err)
    }
    
}

async function updateItem(id, item_name, description, qty, price, category_id) {
    try {
        const query = `
            UPDATE items
            SET item_name = $1,
                description = $2,
                qty = $3,
                price = $4,
                category_id = $5
            WHERE id = $6
        `;

        await pool.query(query, [item_name, description, qty, price, category_id, id])
        console.log(`Item with ID ${id} updated successfully`)
        } catch(err) {
            console.error(err)
        }
    
}



async function deleteItem(id) {
    try {
        await pool.query('DELETE FROM items WHERE id=($1)', [id])
        console.log(`Item with id no. ${id} has deleted successully`)
    } catch  (err) {
        console.error(err)
    }
}


async function deleteCategory(id) {
    try {
        await pool.query('DELETE FROM categories WHERE id=($1)', [id])
        console.log(`Category with id no. ${id} has deleted successully`)
    } catch  (err) {
        console.error(err)
    }
}

async function searchItem(item_name) {
    try {
        const query = `
            SELECT * FROM items
            WHERE item_name ILIKE $1
        `;

        const result = await pool.query(query, [`%${item_name}%`])
        return result.rows;
    } catch (err) {
        console.error('Error searching for item: ', err)
        return []
    }
}

async function categoryName() {
    try{
        const result = await pool.query('SELECT * FROM categories')
        return result.rows
    } catch (err) {
        console.error(err)
    }
}

module.exports = {
    getAllCategories,
    getAllItems,
    getItem,
    getItemfromCategory,
    addCategory,
    addItems,
    updateItem,
    deleteCategory,
    deleteItem,
    searchItem,
    categoryName
}