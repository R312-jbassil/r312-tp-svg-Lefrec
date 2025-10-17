/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2169175225")

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "json3487451989",
    "maxSize": 0,
    "name": "chat_history2",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2169175225")

  // remove field
  collection.fields.removeById("json3487451989")

  return app.save(collection)
})
