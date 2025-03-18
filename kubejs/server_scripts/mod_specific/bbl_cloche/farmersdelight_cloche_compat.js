ServerEvents.recipes(event => {
    crop(1200, 1, "farmersdelight:tomato", "farmersdelight:tomato_seeds", "floabg:farmland_0")
    crop(1200, 1,"farmersdelight:cabbage","farmersdelight:cabbage_seeds", "floabg:farmland_0")
    crop(1200, 1, "farmersdelight:onion", "farmersdelight:onion", "floabg:farmland_0")
    crop(1200, 1, "farmersdelight:rice", "farmersdelight:rice_panicle", "floabg:farmland_0")

    function crop(duration, output_amount, output, seed, farmland_tag) {

        event.custom({
          "type": "cloche:cloche",
          "catalyst": [],
          "duration": duration,
          "results": [
            {
              "item": {
                "count": output_amount,
                "id": output
              }
            }
          ],
          "seed": {
            "item": seed
          },
          "soil": {
            "tag": farmland_tag
          }
        })} 
})