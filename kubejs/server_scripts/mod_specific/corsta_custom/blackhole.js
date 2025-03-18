ServerEvents.recipes(event => {
    //Black Hole
    event.shaped('kubejs:prepared_incomplete_black_hole_1', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:obsidian',
        B: 'minecraft:nether_star'
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
    event.custom({
        "type": "create:pressing",
        "ingredients": [
          {
            "item": "kubejs:prepared_incomplete_black_hole_1"
          }
        ],
        "results": [
          {
            "item": {
              "id": "kubejs:incomplete_black_hole_1"
          }
        }
        ]
    })
    event.custom({
      "type": "create:pressing",
      "ingredients": [
        {
          "item": "kubejs:prepared_incomplete_black_hole_2"
        }
      ],
      "results": [
        {
          "item": {
            "id": "kubejs:incomplete_black_hole_2"
        }
      }
      ]
    })
    event.custom({
      "type": "create:pressing",
      "ingredients": [
        {
          "item": "kubejs:prepared_incomplete_black_hole_3"
        }
      ],
      "results": [
        {
          "item": {
            "id": "kubejs:incomplete_black_hole_3"
        }
      }
      ]
    })
    event.custom({
      "type": "create:pressing",
      "ingredients": [
        {
          "item": "kubejs:prepared_incomplete_black_hole_4"
        }
      ],
      "results": [
        {
          "item": {
            "id": "kubejs:incomplete_black_hole_4"
        }
      }
      ]
    })
    event.custom({
      "type": "create:pressing",
      "ingredients": [
        {
          "item": "kubejs:prepared_incomplete_black_hole_5"
        }
      ],
      "results": [
        {
          "item": {
            "id": "kubejs:incomplete_black_hole_5"
        }
      }
      ]
    })
    event.custom({
      "type": "create:pressing",
      "ingredients": [
        {
          "item": "kubejs:prepared_incomplete_black_hole_6"
        }
      ],
      "results": [
        {
          "item": {
            "id": "kubejs:incomplete_black_hole_6"
        }
      }
      ]
    })
    event.custom({
      "type": "create:pressing",
      "ingredients": [
        {
          "item": "kubejs:prepared_incomplete_black_hole_7"
        }
      ],
      "results": [
        {
          "item": {
            "id": "kubejs:incomplete_black_hole_7"
        }
      }
      ]
    })
    event.custom({
      "type": "create:pressing",
      "ingredients": [
        {
          "item": "kubejs:prepared_incomplete_black_hole_8"
        }
      ],
      "results": [
        {
          "item": {
            "id": "kubejs:incomplete_black_hole_8"
        }
      }
      ]
    })
    event.custom({
      "type": "create:pressing",
      "ingredients": [
        {
          "item": "kubejs:incomplete_black_hole_8"
        }
      ],
      "results": [
        {
          "item": {
            "id": "kubejs:completed_black_hole"
        }
      }
      ]
    })
  })