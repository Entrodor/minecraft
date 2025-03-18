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
    event.custom({
      "type": "cloche:cloche",
      "catalyst": [],
      "duration": 1200,
      "results": [
        {
          "item": {
            "count": 1,
            "id": 'silentgear:fluffy_puff'
          }
        }
      ],
      "seed": {
        "item": 'silentgear:fluffy_seeds'
      },
      "soil": {
        "tag": "floabg:farmland_0"
      }
    })

    event.custom({
      "type": "cloche:cloche",
      "catalyst": [],
      "duration": 1200,
      "results": [
        {
          "item": {
            "count": 1,
            "id": "silentgear:flax_fiber"
          }
        },
        {
          "chance": 0.1,
          "item": {
            "count": 1,
            "id": "silentgear:flax_flowers"
          }
        }
      ],
      "seed": {
        "item": "silentgear:flax_seeds"
      },
      "soil": {
        "tag": "floabg:farmland_0"
      }
    })
})