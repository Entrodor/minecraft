ServerEvents.recipes(event => {
    crop("forbidden_arcanus:yellow_orchid", "floabg:farmland_grass", 1200, 1, "forbidden_arcanus:yellow_orchid")
    crop("forbidden_arcanus:fungyss", "floabg:farmland_f_fungal", 1200, 1, "forbidden_arcanus:fungyss")
    //crop("forbidden_arcanus:golden_orchid_seeds", "floabg:farmland_f_magic", 1200, 1, "forbidden_arcanus:deorum_nugget", 0.1, 1, "forbidden_arcanus:deorum_ingot")

    tree("forbidden_arcanus:growing_edelwood", 1, "forbidden_arcanus:edelwood_stick", "floabg:farmland_grass", 1200, 1.0, 2, "forbidden_arcanus:edelwood_log", 0.1, 1, "forbidden_arcanus:carved_edelwood_log", 0.2, 1, "forbidden_arcanus:growing_edelwood")
    tree("forbidden_arcanus:aurum_sapling", 2, "forbidden_arcanus:aurum_leaves", "floabg:farmland_grass", 1200, 1.0, 2, "forbidden_arcanus:aurum_log", 0.2, 1, "forbidden_arcanus:aurum_sapling", 0.05, 1, "minecraft:golden_apple", 0.01, 1, "minecraft:enchanted_golden_apple")

    function crop(seed, farmland_tag, duration, output_amount, output, chance_1, output_amount_1, output_1) {

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
})