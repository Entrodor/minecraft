ServerEvents.recipes(event => {
    event.custom({
      "type": "cloche:cloche",
      "catalyst": [],
      "duration": 1200,
      "results": [
        {
          "item": {
            "count": 2,
            "id": "silentgear:netherwood_log"
          }
        },
        {
          "chance": 0.2,
          "item": {
            "count": 1,
            "id": "silentgear:netherwood_sapling"
          }
        },
        {
          "chance": 0.1,
          "item": {
            "count": 1,
            "id": "silentgear:nether_banana"
          }
        }
      ],
      "seed": {
        "item": "silentgear:netherwood_sapling"
      },
      "shears_result": {
        "count": 2,
        "id": "silentgear:netherwood_leaves"
      },
      "soil": {
        "tag": "floabg:farmland_grass"
      }
    })
    crop('silentgear:fluffy_seeds', farmland_tag, 1200, 1.0, 1, 'silentgear:fluffy_puff')
    crop('silentgear:flax_seeds', farmland_tag, 1200, 1.0, 1, 'silentgear:flax_fiber', 0.1, 1, 'silentgear:flax_flowers')

    function crop( seed, farmland_tag, duration, chance, output_amount, output, chance_1, output_amount_1, output_1) {

      if (chance_1 === undefined) {
        chance_1 = 0.0;
        output_amount_1 = 0;
        output_1 = "kubejs:invisible_item"
      };

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
          "chance": chance_1,
          "item": {                
            "count": output_amount_1,
            "id": output_1
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