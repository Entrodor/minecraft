ServerEvents.recipes(event => {
    event.custom({
        "type": "create:mixing",
        "ingredients": [
          {
            "item": "minecraft:glass_bottle"
          },
          {
            "item": "minecraft:ink_sac"
          },
          {
            "item": "minecraft:ink_sac"
          },
          {
            "item": "irons_spellbooks:arcane_essence"
          }
        ],
        "results": [
          {
            "item": {"id":"irons_spellbooks:common_ink"} 
          }
        ]
      })

    event.custom({
        "type": "create:mixing",
        "ingredients": [
          {
            "item": "irons_spellbooks:common_ink"
          },
          {
            "item": "irons_spellbooks:common_ink"
          },
          {
            "item": "irons_spellbooks:common_ink"
          },
          {
            "item": "irons_spellbooks:common_ink"
          },
          {
            "item": "minecraft:copper_ingot"
          }
        ],
        "results": [
          {
            "item": {"id":"irons_spellbooks:uncommon_ink"} 
          }
        ]
      })
    event.custom({
        "type": "create:mixing",
        "ingredients": [
          {
            "item": "irons_spellbooks:uncommon_ink"
          },
          {
            "item": "irons_spellbooks:uncommon_ink"
          },
          {
            "item": "irons_spellbooks:uncommon_ink"
          },
          {
            "item": "irons_spellbooks:uncommon_ink"
          },
          {
            "item": "minecraft:iron_ingot"
          }
        ],
        "results": [
          {
            "item": {"id":"irons_spellbooks:rare_ink"} 
          }
        ]
      })
    event.custom({
        "type": "create:mixing",
        "heatRequirement": "heated",
        "ingredients": [
            {
              "item": "irons_spellbooks:rare_ink"
            },
            {
              "item": "irons_spellbooks:rare_ink"
            },
            {
              "item": "irons_spellbooks:rare_ink"
            },
            {
              "item": "irons_spellbooks:rare_ink"
            },
            {
              "item": "minecraft:gold_ingot"
            }
          ],
          "results": [
            {
              "count": 1,
              "item": {"id": "irons_spellbooks:epic_ink"}
            }
          ]
      })
    event.custom({
        "type": "create:mixing",
        "heatRequirement": "superheated",
        "ingredients": [
            {
              "item": "irons_spellbooks:epic_ink"
            },
            {
              "item": "irons_spellbooks:epic_ink"
            },
            {
              "item": "irons_spellbooks:epic_ink"
            },
            {
              "item": "irons_spellbooks:epic_ink"
            },
            {
              "item": "minecraft:amethyst_shard"
            }
          ],
          "results": [
            {
              "item": {"id":"irons_spellbooks:legendary_ink"} 
            }
          ]
      })
})
