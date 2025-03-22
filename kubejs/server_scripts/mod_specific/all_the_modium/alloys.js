ServerEvents.recipes(event => {
      event.custom({
        "type": "iceandfire:dragonforge",
        "dragonType": "ice",
        "cookTime": 1000,
        "input": {
          "item": "allthemodium:vibranium_block"
        },
        "blood": {
          "item": "allthemodium:unobtainium_block"
        },
        "result": {
          "id": "allthemodium:unobtainium_vibranium_alloy_ingot"
        }
      })

      event.custom({
        "type": "iceandfire:dragonforge",
        "dragonType": "ice",
        "cookTime": 1000,
        "input": {
          "item": "allthemodium:unobtainium_block"
        },
        "blood": {
          "item": "allthemodium:vibranium_block"
        },
        "result": {
          "id": "allthemodium:unobtainium_vibranium_alloy_ingot"
        }
      })

      event.custom({
        "type": "iceandfire:dragonforge",
        "dragonType": "fire",
        "cookTime": 1000,
        "input": {
          "item": "allthemodium:vibranium_block"
        },
        "blood": {
          "item": "allthemodium:allthemodium_block"
        },
        "result": {
          "id": "allthemodium:vibranium_allthemodium_alloy_ingot"
        }
      })

      event.custom({
        "type": "iceandfire:dragonforge",
        "dragonType": "fire",
        "cookTime": 1000,
        "input": {
          "item": "allthemodium:allthemodium_block"
        },
        "blood": {
          "item": "allthemodium:vibranium_block"
        },
        "result": {
          "id": "allthemodium:vibranium_allthemodium_alloy_ingot"
        }
      })

      event.custom({
        "type": "iceandfire:dragonforge",
        "dragonType": "lightning",
        "cookTime": 1000,
        "input": {
          "item": "allthemodium:unobtainium_block"
        },
        "blood": {
          "item": "allthemodium:allthemodium_block"
        },
        "result": {
          "id": "allthemodium:unobtainium_allthemodium_alloy_ingot"
        }
      })

      event.custom({
        "type": "iceandfire:dragonforge",
        "dragonType": "lightning",
        "cookTime": 1000,
        "input": {
          "item": "allthemodium:allthemodium_block"
        },
        "blood": {
          "item": "allthemodium:unobtainium_block"
        },
        "result": {
          "id": "allthemodium:unobtainium_allthemodium_alloy_ingot"
        }
      })
})
