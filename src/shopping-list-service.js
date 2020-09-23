const ShoppingListService = {
  getAllItems(knex) {
    return knex.select('*').from('shopping_list');
  },
  insertItems(knex, newItem) {
    return knex
      .insert(newItem)
      .into('shopping_list')
      .returning('*')
      .then(rows => {
        return rows[0];
      });
  },
  getById(knex, id) {
    return knex('shopping_list').select('*')
      .where('id', id).first();
  },

  deleteItem(knex, id){
    return knex('shopping_list')
      .where({id})
      .delete();
  },
  updateItem(knex, id, newItemField) {
    return knex ('shopping_list')
      .where({id})
      .update(newItemField);
  },

};










module.exports = ShoppingListService;