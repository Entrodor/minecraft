ServerEvents.recipes(event => {
  //duration = time in ticks (default 1200)
    //output_amount = number of items will be generated after each operation
    //output = the item generated after each operation
    //seed = input seed that will determin what crop will be used
    //farmland_tag = the farmland that will be used (#note you will need to use a tag in this option (custom tags can be found in "corsta_custom/custom_tag.js"))
    //crop(duration, output_amount, output, seed, farmland_tag)
    //example = crop(1200, 1, "minecraft:wheat", "minecraft:wheat_seeds", "floabg:farmland_0")
    //Ars Nouveau
    crop(1200, 1, "allthemodium:ancient_soulberries", "allthemodium:ancient_soulberries", "floabg:farmland_stone_atm")
    tree("allthemodium:soul_sapling", 2, "allthemodium:soul_leaves", "floabg:farmland_grass_atm", 1200, 1.0, 2, "allthemodium:soul_log", 0.2, 1, "allthemodium:soul_sapling", 0.1, 1, "allthemodium:soul_log_0" , 0.1, 1, "allthemodium:soul_log_1" , 0.1, 1, "allthemodium:soul_log_2" )
    tree("allthemodium:ancient_sapling", 2, "allthemodium:ancient_leaves", "floabg:farmland_grass_atm", 1200, 1.0, 2, "allthemodium:ancient_log_0", 0.2, 1, "allthemodium:ancient_sapling", 0.1, 1, "allthemodium:ancient_log_1" , 0.1, 1, "allthemodium:ancient_log_2" )
    tree("allthemodium:demonic_sapling", 2, "allthemodium:demonic_leaves", "floabg:farmland_grass_atm", 1200, 1.0, 2, "allthemodium:demonic_log", 0.2, 1, "allthemodium:demonic_sapling", )
    
    //tree(sapling, leaf_amount, leaf, farmland_tag, duration, chance_1, output_amount_1, output_1, chance_2, output_amount_2, output_2, chance_3, output_amount_3, output_3, chance_4, output_amount_4, output_4)
    //Example = ("minecraft:sapling", 2, "minecraft:oak_leaves", "floabg:farmland_grass",1200, 1.0, 2, "minecraft:oak_log", 0.3, 1, "minecraft:apple", 0.3, 1, "minecraft:stick", 0.2, 1, "minecraft:oak_sapling")
    // tree(sapling, leaf_amount, leaf, farmland_tag, duration, chance_1, output_amount_1, output_1, chance_2, output_amount_2, output_2, chance_3, output_amount_3, output_3, chance_4, output_amount_4, output_4)
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

    function tree(sapling, leaf_amount, leaf, farmland_tag, duration, chance_1, output_amount_1, output_1, chance_2, output_amount_2, output_2, chance_3, output_amount_3, output_3, chance_4, output_amount_4, output_4, chance_5, output_amount_5, output_5) {

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
      if (chance_4 === undefined) {
        chance_4 = 0.0;
        output_amount_4 = 0;
        output_4 = "kubejs:invisible_item"
      };
      if (chance_5 === undefined) {
        chance_5 = 0.0;
        output_amount_5 = 0;
        output_5 = "kubejs:invisible_item"
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
          },
          {
            "chance": chance_4,
            "item": {
              "count": output_amount_4,
              "id": output_4
            }
          },
          {
            "chance": chance_5,
            "item": {
              "count": output_amount_5,
              "id": output_5
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