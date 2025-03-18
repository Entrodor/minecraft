ServerEvents.recipes(event => {
    event.custom({
        "type": "create:mixing",
        "ingredients": [
          {
            "item": "apotheosis:common_material"
          },
          {
            "item": "apotheosis:common_material"
          },
          {
            "item": "apotheosis:common_material"
          },
          {
            "item": "apotheosis:common_material"
          },
          {
            "item": "apotheosis:gem_dust"
          },
          {
            "item": "irons_spellbooks:uncommon_ink"
          }
        ],
        "results": [
          {
            "item": {"id":"apotheosis:uncommon_material"}
          }
        ]
      })
    event.custom({
        "type": "create:mixing",
        "ingredients": [
          {
            "item": "apotheosis:uncommon_material"
          },
          {
            "item": "apotheosis:uncommon_material"
          },
          {
            "item": "apotheosis:uncommon_material"
          },
          {
            "item": "apotheosis:uncommon_material"
          },
          {
            "item": "apotheosis:gem_dust"
          },
          {
            "item": "irons_spellbooks:rare_ink"
          }
        ],
        "results": [
          {
            "item": {"id":"apotheosis:rare_material"}
          }
        ]
    })
    event.custom({
        "type": "create:mixing",
        "heatRequirement": "heated",
        "ingredients": [
          {
            "item": "apotheosis:rare_material"
          },
          {
            "item": "apotheosis:rare_material"
          },
          {
            "item": "apotheosis:rare_material"
          },
          {
            "item": "apotheosis:rare_material"
          },
          {
            "item": "apotheosis:gem_dust"
          },
          {
            "item": "irons_spellbooks:epic_ink"
          },
          {
            "item": "minecraft:nether_star"
          }
        ],
        "results": [
          {
            "item": {"id":"apotheosis:epic_material"}
          }
        ]
      })
    event.custom({
        "type": "create:mixing",
        "heatRequirement": "superheated",
        "ingredients": [
          {
            "item": "apotheosis:epic_material"
          },
          {
            "item": "apotheosis:epic_material"
          },
          {
            "item": "apotheosis:epic_material"
          },
          {
            "item": "apotheosis:epic_material"
          },
          {
            "item": "apotheosis:gem_dust"
          },
          {
            "item": "irons_spellbooks:legendary_ink"
          },
          {
            "item": "forbidden_arcanus:dark_nether_star"
          }
        ],
        "results": [
          {
            "item": {"id":"apotheosis:mythic_material"}
          }
        ]
      })
})
