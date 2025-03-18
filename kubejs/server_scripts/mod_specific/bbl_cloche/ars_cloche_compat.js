ServerEvents.recipes(event => {
    //duration = time in ticks (default 1200)
    //output_amount = number of items will be generated after each operation
    //output = the item generated after each operation
    //seed = input seed that will determin what crop will be used
    //farmland_tag = the farmland that will be used (#note you will need to use a tag in this option (custom tags can be found in "corsta_custom/custom_tag.js"))
    //crop(duration, output_amount, output, seed, farmland_tag)
    //example = crop(1200, 1, "minecraft:wheat", "minecraft:wheat_seeds", "floabg:farmland_0")
    //Ars Nouveau
    crop(1200, 1, "ars_nouveau:magebloom", "ars_nouveau:magebloom_crop", "floabg:farmland_0")
    crop(1200, 1, "ars_nouveau:sourceberry_bush", "ars_nouveau:sourceberry_bush", "floabg:farmland_0")
    tree("ars_nouveau:blue_archwood_sapling", 2, "ars_nouveau:blue_archwood_leaves", "floabg:farmland_grass", 1200, 1.0, 2, "ars_nouveau:blue_archwood_log", 0.2, 1, "ars_nouveau:blue_archwood_sapling", 0.1, 1, "ars_nouveau:frostaya_pod")
    tree("ars_nouveau:red_archwood_sapling", 2, "ars_nouveau:red_archwood_leaves", "floabg:farmland_grass", 1200, 1.0, 2, "ars_nouveau:red_archwood_log", 0.2, 1, "ars_nouveau:red_archwood_sapling", 0.1, 1, "ars_nouveau:bombegranate_pod")
    tree("ars_nouveau:green_archwood_sapling", 2, "ars_nouveau:green_archwood_leaves", "floabg:farmland_grass", 1200, 1.0, 2, "ars_nouveau:green_archwood_log", 0.2, 1, "ars_nouveau:green_archwood_sapling", 0.1, 1, "ars_nouveau:mendosteen_pod")
    tree("ars_nouveau:purple_archwood_sapling", 2, "ars_nouveau:purple_archwood_leaves", "floabg:farmland_grass", 1200, 1.0, 2, "ars_nouveau:purple_archwood_log", 0.2, 1, "ars_nouveau:purple_archwood_sapling", 0.1, 1, "ars_nouveau:bastion_pod")
    
    //Ars Elemental
    crop(1200, 1, "ars_elemental:sparkflower", "ars_elemental:sparkflower", "floabg:farmland_grass")
    tree("ars_elemental:yellow_archwood_sapling", 2, "ars_elemental:yellow_archwood_leaves", "floabg:farmland_grass", 1200, 1.0, 2, "ars_elemental:yellow_archwood_log", 0.2, 1, "ars_elemental:yellow_archwood_sapling", 0.1, 1, "ars_elemental:flashpine_pod")
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

    function tree(sapling, leaf_amount, leaf, farmland_tag, duration, chance_1, output_amount_1, output_1, chance_2, output_amount_2, output_2, chance_3, output_amount_3, output_3) {

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