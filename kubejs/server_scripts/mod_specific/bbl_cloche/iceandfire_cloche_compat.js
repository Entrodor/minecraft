ServerEvents.recipes(event => {
    tree(1200, 1.0, 2, "iceandfire:dreadwood_log", 0.2, 1, "iceandfire:dreadwood_sapling", "iceandfire:dreadwood_sapling", 2, "iceandfire:dreadwood_leaves", "floabg:farmland_grass")

    crop(1200, 1.0, 1, "iceandfire:lightning_lily", "iceandfire:lightning_lily", "floabg:farmland_grass")
    crop(1200, 1.0, 1, "iceandfire:frost_lily", "iceandfire:frost_lily", "floabg:farmland_grass")
    crop(1200, 1.0, 1, "iceandfire:frost_lily", "iceandfire:frost_lily", "floabg:farmland_grass")

    function crop(duration, chance, output_amount, output, seed, farmland_tag) {

      event.custom({
        "type": "cloche:cloche",
        "catalyst": [],
        "duration": duration,
        "results": [
          {
            "chance": chance,
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
  
  function tree(duration, chance, output_amount, output, chance_2, output_amount_2, output_2, sapling, farmland_tag) {

      event.custom({
        "type": "cloche:cloche",
        "catalyst": [],
        "duration": duration,
        "results": [
            {
              "chance": chance,
              "item": {              
                "count": output_amount,
                "id": output
              }
            },
            {
              "chance": chance_2,
              "item": {              
                "count": output_amount_2,
                "id": output_2
              }
            }
        ],
        "seed": {
          "item": sapling
        },
        "soil": {
          "tag": farmland_tag
        }
      })} 
})