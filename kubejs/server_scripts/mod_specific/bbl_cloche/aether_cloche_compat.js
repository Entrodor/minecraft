ServerEvents.recipes(event => {
    //duration = time in ticks (default 1200)
    //output_amount = number of items will be generated after each operation
    //output = the item generated after each operation
    //seed = input seed that will determin what crop will be used
    //farmland_tag = the farmland that will be used (#note you will need to use a tag in this option (custom tags can be found in "corsta_custom/custom_tag.js"))
    //crop(duration, output_amount, output, seed, "floabg:farmland_0")
    //example = crop(1200, 1, "minecraft:wheat", "minecraft:wheat_seeds", "floabg:farmland_0")
    //Aether Crops
    crop(1200, 1, "aether:blue_berry", "aether:blue_berry", "floabg:farmland_grass")
    crop(1200, 1, "aether:white_apple", "aether:white_apple", "floabg:crystal_fruit_leaves")
    crop(1200, 1, "aether:purple_flower", "aether:purple_flower", "floabg:farmland_grass")
    crop(1200, 1, "aether:white_flower", "aether:white_flower", "floabg:farmland_grass")
    //Deep Aether Crops
    crop(1200, 1, "deep_aether:goldenleaf_berries", "deep_aether:goldenleaf_berries", "c:stone")
    crop(1200, 1, "deep_aether:aerlavender", "deep_aether:aerlavender", "floabg:farmland_grass")
    crop(1200, 1, "deep_aether:radiant_orchid", "deep_aether:radiant_orchid", "floabg:farmland_grass")
    crop(1200, 1, "deep_aether:aether_cattails", "deep_aether:aether_cattails", "floabg:farmland_grass")
    crop(1200, 1, "deep_aether:golden_flower", "deep_aether:golden_flower", "floabg:farmland_grass")
    crop(1200, 1, "deep_aether:enchanted_blossom", "deep_aether:enchanted_blossom", "floabg:farmland_grass")
    crop(1200, 1, "deep_aether:sky_tulips", "deep_aether:sky_tulips", "floabg:farmland_grass")
    crop(1200, 1, "deep_aether:iaspove", "deep_aether:iaspove", "floabg:farmland_grass")
    crop(1200, 1, "deep_aether:echaisy", "deep_aether:echaisy", "floabg:farmland_grass")
    crop(1200, 1, "deep_aether:lightcap_mushrooms", "deep_aether:lightcap_mushrooms", "c:stones")
    //Aether Trees
    //tree(sapling, leaf_amount, leaf, farmland_tag, duration, chance_1, output_amount_1, output_1, chance_2, output_amount_2, output_2, chance_3, output_amount_3, output_3, chance_4, output_amount_4, output_4)
    //Example = ("minecraft:sapling", 2, "minecraft:oak_leaves", "floabg:farmland_grass",1200, 1.0, 2, "minecraft:oak_log", 0.3, 1, "minecraft:apple", 0.3, 1, "minecraft:stick", 0.2, 1, "minecraft:oak_sapling")
    // tree(sapling, leaf_amount, leaf, farmland_tag, duration, chance_1, output_amount_1, output_1, chance_2, output_amount_2, output_2, chance_3, output_amount_3, output_3, chance_4, output_amount_4, output_4)
    //Aether
    tree("aether:skyroot_sapling", 2, "aether:skyroot_leaves", "floabg:farmland_grass", 1200, 1.0, 2, "aether:skyroot_log", 0.2, 1, "aether:skyroot_sapling")
    tree("aether:golden_oak_sapling", 2, "aether:golden_oak_leaves", "floabg:farmland_grass", 1200, 1.0, 2,"aether:golden_oak_log", 0.2, 1, "aether:golden_oak_sapling")
    //Deep Aether 
    tree("deep_aether:roseroot_sapling", 2, "deep_aether:roseroot_leaves", "floabg:farmland_grass", 1200, 1.0, 2, "deep_aether:roseroot_log", 0.2, 2,"deep_aether:rotten_roseroot_log", 0.2, 1, "deep_aether:roseroot_sapling")
    tree("deep_aether:blue_roseroot_sapling", 2, "deep_aether:blue_roseroot_leaves", "floabg:farmland_grass", 1200, 1.0, 2, "deep_aether:roseroot_log", 0.2, 1, "deep_aether:rotten_roseroot_log", 0.2, 1, "deep_aether:blue_roseroot_sapling")
    tree("deep_aether:yagroot_sapling", 2, "deep_aether:yagroot_leaves", "floabg:farmland_grass", 1200, 1.0, 2, "deep_aether:yagroot_log", 0.2, 1, "deep_aether:yagroot_roots", 0.2, 1, "deep_aether:yagroot_sapling", 0.1, 1, "deep_aether:yagroot_vine")
    tree("deep_aether:cruderoot_sapling", 2, "deep_aether:cruderoot_leaves", "floabg:farmland_grass", 1200, 1.0, 2, "deep_aether:cruderoot_log", 0.2, 1, "deep_aether:cruderoot_sapling")
    tree("deep_aether:conberry_sapling", 2, "deep_aether:conberry_leaves", "floabg:farmland_grass", 1200, 1.0, 2, "deep_aether:conberry_log", 0.2, 1, "deep_aether:conberry_sapling")
    tree("deep_aether:sunroot_sapling", 2, "deep_aether:sunroot_leaves", "floabg:farmland_grass", 1200, 1.0, 2, "deep_aether:sunroot_log", 0.2, 1, "deep_aether:sunroot_sapling", 0.1, 1, "deep_aether:sunroot_hanger")
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

      function tree(sapling, leaf_amount, leaf, farmland_tag, duration, chance_1, output_amount_1, output_1, chance_2, output_amount_2, output_2, chance_3, output_amount_3, output_3, chance_4, output_amount_4, output_4) {

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
    
    event.shapeless('deep_aether:roseroot_leaves', 'deep_aether:flowering_roseroot_leaves')
    event.shapeless('deep_aether:flowering_roseroot_leaves', 'deep_aether:roseroot_leaves')
    event.shapeless('deep_aether:blue_roseroot_leaves', 'deep_aether:flowering_blue_roseroot_leaves')
    event.shapeless('deep_aether:flowering_blue_roseroot_leaves', 'deep_aether:blue_roseroot_leaves')
})