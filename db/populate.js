const { Client } = require('pg')

const SQL = `

    CREATE TABLE IF NOT EXISTS categories (
    id SERIAL PRIMARY KEY,
    title VARCHAR ( 255 ) NOT NULL
    );


    CREATE TABLE IF NOT EXISTS items (
    id SERIAL PRIMARY KEY,
    item_name VARCHAR ( 255 ) NOT NULL,
    description TEXT,
    qty INTEGER NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    category_id INTEGER REFERENCES categories(id)
    );


    INSERT INTO categories (title)
    VALUES
    ('Shoes'), ('Watches'), ('Apparels'), ('Accessories');

    INSERT INTO items (item_name, description, qty, price, category_id)
    VALUES
    ('HOKA skyflow', 'Your training day shoe', 10, 6000, 1),
    ('GARMIN forerunner 55', 'Entry level running watch', 15, 7999, 2),
    ('HOKA dryfit singlet', 'Lightweight shirt for daily running', 25, 999, 3),
    ('GARMIN chest strap HR monitor', 'HR monitor for daily use', 10, 2500, 4);
`;

async function main() {
    console.log('...seeding')
    const client = new Client({
        connectionString: "postgresql://postgres:Asakapa00@localhost:5432/inventory_app",
    })
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log('Seeding done')
}
main();