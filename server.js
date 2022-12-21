// const express = require('express')
const { MongoClient } = require('mongodb')
// const app = express()
// const port = 4000
// const routes = require('./routes/routes')
const productList = require('./json/products.json')

async function main() {
  const uri =
    'mongodb+srv://todoappuser:todoappuserpassword123@cluster0.81uxjpw.mongodb.net/?retryWrites=true&w=majority'

  const client = new MongoClient(uri)
  try {
    await client.connect()
    // await listDatabases(client)
    // await createListing(client, { name: 'Go to gym' })
    // await createMultipleProductListing(client, productList)
    // await findOneTodoByName(client, 'first todo')
    // await findProductByName(client, 'iPhone X')
  } catch (e) {
    console.error(e)
  } finally {
    await client.close()
  }
}

main().catch(console.error)

async function findProductsWithMinimumStocksRatingAndMostLowerPrice() {
  const result = await client.db('sample_products').collection('productListing')
}

async function createMultipleProductListing(client, newTodos) {
  const result = await client
    .db('sample_products')
    .collection('productListing')
    .insertMany(newTodos)

  console.log(
    `${result.insertedCount} new listings created with the following id(s):`
  )
  console.log(result.insertedIds)
}

async function findProductByName(client, nameOfProduct) {
  const result = await client
    .db('sample_products')
    .collection('productListing')
    .findOne({ title: nameOfProduct })

  if (result) {
    console.log(
      `Found a listing in the collection with the title '${nameOfProduct}'`
    )
  } else {
    console.log(`No listing found with the title '${nameOfProduct}'`)
  }
}

async function findOneTodoByName(client, nameOfTodo) {
  const result = await client
    .db('sample_todoapp')
    .collection('todoLists')
    .findOne({ title: nameOfTodo })

  if (result) {
    console.log(
      `Found a listing in the collection with the title '${nameOfTodo}'`
    )
  } else {
    console.log(`No listing found with the title '${nameOfTodo}'`)
  }
}

async function createMultipleListing(client, newTodos) {
  const result = await client
    .db('sample_todoapp')
    .collection('todoLists')
    .insertMany(newTodos)

  console.log(
    `${result.insertedCount} new listings created with the following id(s):`
  )
  console.log(result.insertedIds)
}

async function createListing(client, newTodo) {
  const result = await client
    .db('sample_todoapp')
    .collection('todoLists')
    .insertOne(newTodo)

  console.log(`New listing created with the following id: ${result.insertedId}`)
}

async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases()

  console.log('Databases')
  databasesList.databases.forEach((db) => {
    console.log(`-${db.name}`)
  })
}
// app.use(express.json())
// app.use('/todos', routes)
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
