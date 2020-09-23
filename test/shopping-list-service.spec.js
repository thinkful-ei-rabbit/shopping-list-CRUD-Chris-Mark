const ShoppingListService = require('../src/shopping-list-service');
const knex = require('knex');
const { expect } = require('chai');


describe('Items service object', function () {

  let db;

  let testItems = [
    {
      id: 1,
      name: ' First New Name',
      price: "12.55",
      date_added: new Date('2029-01-22T16:28:32.615Z'),
      checked: false,
      category: 'Snack'
    },
    {
      id: 2,
      name: ' Second New Name',
      price: "17.55",
      date_added: new Date('2029-01-21T16:28:32.615Z'),
      checked: false,
      category: 'Snack'
    },
    {
      id: 3,
      name: ' third New Name',
      price: "19.55",
      date_added: new Date('2029-01-20T16:28:32.615Z'),
      checked: false,
      category: 'Snack'
    },
  ];
  before(() => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DB_URL,
    });
  })
  before(() => db('shopping_list').truncate());
  afterEach(() => db('shopping_list').truncate());
  after(() => db.destroy());

  context('Given shopping list has items', () => {
    beforeEach(() => {
      return db
        .into('shopping_list')
        .insert(testItems)
    })

    it('getAllItems() pulls all items from table', () => {
      return ShoppingListService.getAllItems(db)
        .then(actual => {
          expect(actual).to.eql(testItems);
        })

    })
    it(`getById() resolves an item by id from 'shopping_list' table`, () => {
      const thirdId = 3
      const thirdTestArticle = testItems[thirdId - 1]
      return ShoppingListService.getById(db, thirdId)
        .then(actual => {
          expect(actual).to.eql({
            id: thirdId,
            name: thirdTestArticle.name,
            price: thirdTestArticle.price,
            date_added: thirdTestArticle.date_added,
            checked: thirdTestArticle.checked,
            category: thirdTestArticle.category

          })
        })
    })
    it(`deleteItem() removes an item by id from 'shopping_list' table`, () => {
      const articleId = 3
      return ShoppingListService.deleteItem(db, articleId)
        .then(() => ShoppingListService.getAllItems(db))
        .then(allArticles => {
          // copy the test articles array without the "deleted" article
          const expected = testItems.filter(article => article.id !== articleId)
          expect(allArticles).to.eql(expected)
        })
    })
    it(`updateItem() updates an item from the 'shopping_list' table`, () => {
      const idOfArticleToUpdate = 3
      const newArticleData = {
        name: 'updated name',
        price: '19.99',
        date_added: new Date(),
        checked: false,
        category: 'Breakfast'
      }
      return ShoppingListService.updateItem(db, idOfArticleToUpdate, newArticleData)
        .then(() => ShoppingListService.getById(db, idOfArticleToUpdate))
        .then(article => {
          expect(article).to.eql({
            id: idOfArticleToUpdate,
            ...newArticleData,
          })
        })
    })

  })

  context(`Given 'shopping_list' has no data`, () => {
    it(`getAllItems() resolves an empty array`, () => {
      return ShoppingListService.getAllItems(db)
        .then(actual => {
          expect(actual).to.eql([]);
        });
    });
  })

  it(`insertItems() inserts a new item and resolves the new item with an 'id'`, () => {
    const newItem = {
      name: ' New Name Twst',
      price: "12.56",
      date_added: new Date('2029-01-29T16:28:32.615Z'),
      checked: false,
      category: 'Snack'
    }
    return ShoppingListService.insertItems(db, newItem)
      .then(actual => {
        expect(actual).to.eql({
          id: 1,
          name: newItem.name,
          price: newItem.price,
          date_added: newItem.date_added,
          checked: newItem.checked,
          category: newItem.category
        })
      })
  })






});