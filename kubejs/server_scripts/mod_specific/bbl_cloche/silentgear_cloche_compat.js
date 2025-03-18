ServerEvents.recipes(event => {
    crop('silentgear:fluffy_seeds', 'floabg:farmland_0', 1200, 1.0, 1, 'silentgear:fluffy_puff')
    crop('silentgear:flax_seeds', 'floabg:farmland_0', 1200, 1.0, 1, 'silentgear:flax_fiber', 0.1, 1, 'silentgear:flax_flowers') 
    tree("silentgear:netherwood_sapling", 2, "silentgear:netherwood_leaves", "floabg:farmland_grass", 1200, 1.0, 2, "silentgear:netherwood_log", 0.2, 1, "silentgear:netherwood_sapling", 0.1, 1, "silentgear:nether_banana")

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

   

    function tree(sapling, leaf_amount, leaf, farmland_tag, duration, chance_1, output_amount_1, output_1, chance_2, output_amount_2, output_2, chance_3, output_amount_3, output_3) {

      if (chance_2 === undefined) {
        chance_2 = 0.0;
        output_amount_2 = 0;
        output_2 = "kubejs:invisible_item"
      };
      if (chance_3 === undefined) {
        chance_3 = 0.0;
        output_amount_3 = 0;
        output_3 = "kubejs:invisible_item"
      };
      event.custom({
        "type": "cloche:cloche",
        "catalyst": [],
        "duration": duration,
        "results": [
            {
              "chance": chance_1,
              "item": {                
                "count": output_amount_1,
                "id": output_1
              }
            },
          {
            "chance": chance_2,
            "item": {
              "count": output_amount_2,
              "id": output_2
            }
          },
          {
            "chance": chance_3,
            "item": {
              "count": output_amount_3,
              "id": output_3
            }
          }
        ],
        "seed": {
          "item": sapling
        },
        "shears_result": {
          "count": leaf_amount,
          "id": leaf
        },
        "soil": {
          "tag": farmland_tag
        }
      })} 
})