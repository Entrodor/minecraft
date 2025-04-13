ServerEvents.recipes(event => {
    //Black Hole
    event.shaped('kubejs:prepared_incomplete_black_hole_1', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:obsidian',
        B: 'allthemodium:unobtainium_block'
    }).id('kubejs/prepared_incomplete_black_hole_1')

    event.shaped('kubejs:prepared_incomplete_black_hole_2', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:obsidian',
        B: 'kubejs:incomplete_black_hole_1'
    }).id('kubejs/prepared_incomplete_black_hole_2')

    event.shaped('kubejs:prepared_incomplete_black_hole_3', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:obsidian',
        B: 'kubejs:incomplete_black_hole_2'
    }).id('kubejs/prepared_incomplete_black_hole_3')

    event.shaped('kubejs:prepared_incomplete_black_hole_4', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:obsidian',
        B: 'kubejs:incomplete_black_hole_3'
    }).id('kubejs/prepared_incomplete_black_hole_4')

    event.shaped('kubejs:prepared_incomplete_black_hole_5', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:obsidian',
        B: 'kubejs:incomplete_black_hole_4'
    }).id('kubejs/prepared_incomplete_black_hole_5')

    event.shaped('kubejs:prepared_incomplete_black_hole_6', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:obsidian',
        B: 'kubejs:incomplete_black_hole_5'
    }).id('kubejs/prepared_incomplete_black_hole_6')

    event.shaped('kubejs:prepared_incomplete_black_hole_7', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:obsidian',
        B: 'kubejs:incomplete_black_hole_6'
    }).id('kubejs/prepared_incomplete_black_hole_7')

    event.shaped('kubejs:prepared_incomplete_black_hole_8', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:obsidian',
        B: 'kubejs:incomplete_black_hole_7'
    }).id('kubejs/prepared_incomplete_black_hole_8')
   
  //  event.custom({
  //      "type": "create:mixing",
  //      "heatRequirement": "heated",
  //      "ingredients": [
  //        {
  //          "item": "minecraft:pink_dye"
  //        },
  //        {
  //          "item": "minecraft:magenta_dye"
  //        },
  //        {
  //          "item": "create:blaze_cake"
  //        }
  //      ],
  //      "results": [
  //        {
  //          "item": "create:creative_blaze_cake"
  //        }
  //      ]
  //    })
    pressing("kubejs:prepared_incomplete_black_hole_1", "kubejs:incomplete_black_hole_1")
    pressing("kubejs:prepared_incomplete_black_hole_2", "kubejs:incomplete_black_hole_2")
    pressing("kubejs:prepared_incomplete_black_hole_3", "kubejs:incomplete_black_hole_3")
    pressing("kubejs:prepared_incomplete_black_hole_4", "kubejs:incomplete_black_hole_4")
    pressing("kubejs:prepared_incomplete_black_hole_5", "kubejs:incomplete_black_hole_5")
    pressing("kubejs:prepared_incomplete_black_hole_6", "kubejs:incomplete_black_hole_6")
    pressing("kubejs:prepared_incomplete_black_hole_7", "kubejs:incomplete_black_hole_7")
    pressing("kubejs:prepared_incomplete_black_hole_8", "kubejs:incomplete_black_hole_8")
    pressing("kubejs:incomplete_black_hole_8", "kubejs:completed_black_hole")

    function pressing (input, output) {
    event.custom({
      "type": "create:pressing",
      "ingredients": [
        {
          "item": input
        }
      ],
      "results": [
        {
          "item": {
            "id": output
        }
      }
      ]
    })}
  })