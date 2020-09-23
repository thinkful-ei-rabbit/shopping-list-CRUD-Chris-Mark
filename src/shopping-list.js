require('dotenv').config();
const knex = require('knex');
const ShoppingListService = require('./shopping-list-service')

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL
})


// ShoppingListService.getAllItems(knexInstance)
//   .then(items => console.log(items))
//   .then( () =>
//     ShoppingListService.insertItems(knexInstance, {
//       name: 'New Name',
//       price: new decimal(12,2),
//       date_added: new Date(),
//       checked: false,
//       category: 'Snack'
//     })
//   )
//   .then(newItem => )

