/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2169175225")

  // update collection data
  unmarshal({
    "name": "SVG"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2169175225")

  // update collection data
  unmarshal({
    "name": "SVG"
  }, collection)

  return app.save(collection)
})
