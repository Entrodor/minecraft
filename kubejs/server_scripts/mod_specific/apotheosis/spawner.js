ServerEvents.recipes(event => {

    event.remove({ type: "apothic_spawners:spawner_modifier" })
    
    // spawner modifier upgrade items.
    const material = [
        "justdirethings:coal_t1",   // Burning modifier
        "deeperdarker:heart_of_the_deep",   // Echoing modifier
        "minecraft:dragon_egg",     // Ignore Conditions modifier
        "forbidden_arcanus:deorum_lantern",     // Ignore Light modifier
        "minecraft:conduit",    // Ignore Player modifier
        "mob_grinding_utils:spikes",    // Initial Health multiplier
        "allthemodium:unobtainium_ingot",   // spawner Max Delay modifier
        "mysticalagriculture:ghast_essence",    // Max Nearby Entities modifier
        "allthemodium:vibranium_ingot",     // spawner Min Delay modifier
        "allthemodium:piglich_heart",       // No AI modifier
        "mysticalagriculture:prismarine_essence",   // Required Player Range modifier
        "minecraft:redstone_torch",     // Redstone Control modifier
        "mekanism:upgrade_muffling",    // Silent Mobs modifier
        "silentgear:starmetal_dust",    // Spawn Count modifier
        "create:mechanical_piston",     // Spawn Range modifier
        "minecraft:turtle_egg"          // Youthful modifier
    ]
    // spawner modifier stats. dont need to change.
    const spawnerstat = [
        "apothic_spawners:burning",
        "apothic_spawners:echoing",
        "apothic_spawners:ignore_conditions",
        "apothic_spawners:ignore_light",
        "apothic_spawners:ignore_players",
        "apothic_spawners:initial_health",
        "apothic_spawners:max_delay",
        "apothic_spawners:max_nearby_entities",
        "apothic_spawners:min_delay",
        "apothic_spawners:no_ai",
        "apothic_spawners:req_player_range",
        "apothic_spawners:redstone_control",
        "apothic_spawners:silent",
        "apothic_spawners:spawn_count",
        "apothic_spawners:spawn_range",
        "apothic_spawners:youthful"
    ]
 
    // burning
    boolspawnermod(material[0], spawnerstat[0], true)
    invboolspawnermod(material[0], spawnerstat[0], false)
    // echoing
    valspawnermod(material[1], spawnerstat[1], 1, 0, 3)
    invvalspawnermod(material[1], spawnerstat[1], -1, 0, 3)
    // ignore spawn conditions
    boolspawnermod(material[2], spawnerstat[2], true)
    invboolspawnermod(material[2], spawnerstat[2], false)
    // ignore light level
    boolspawnermod(material[3], spawnerstat[3], true)
    invboolspawnermod(material[3], spawnerstat[3], false)
    // ignore nearby player
    boolspawnermod(material[4], spawnerstat[4], true)
    invboolspawnermod(material[4], spawnerstat[4], false)
    // initial health
    valspawnermod(material[5], spawnerstat[5], -0.1, 0.2, 1)
    invvalspawnermod(material[5], spawnerstat[5], 0.1, 0.2, 1)
    // max delay
    valspawnermod(material[6], spawnerstat[6], -20, 100, 800)
    invvalspawnermod(material[6], spawnerstat[6], 20, 100, 800)
    // max nearby entities
    valspawnermod(material[7], spawnerstat[7], 2, 2, 16)
    invvalspawnermod(material[7], spawnerstat[7], -2, 2, 16)
    // min delay
    valspawnermod(material[8], spawnerstat[8], -10, 20, 200)
    invvalspawnermod(material[8], spawnerstat[8], 10, 20, 200)
    // no ai
    boolspawnermod(material[9], spawnerstat[9], true)
    invboolspawnermod(material[9], spawnerstat[9], false)
    // required player range
    valspawnermod(material[10], spawnerstat[10], 4, 8, 48)
    invvalspawnermod(material[10], spawnerstat[10], -4, 8, 48)
    // redstone control
    boolspawnermod(material[11], spawnerstat[11], true)
    invboolspawnermod(material[11], spawnerstat[11], false)
    // silent mobs
    boolspawnermod(material[12], spawnerstat[12], true)
    invboolspawnermod(material[12], spawnerstat[12], false)
    // spawn count
    valspawnermod(material[13], spawnerstat[13], 2, 4, 16)
    invvalspawnermod(material[13], spawnerstat[13], -2, 4, 16)
    // spawn range
    valspawnermod(material[14], spawnerstat[14], 2, 4, 32)
    invvalspawnermod(material[14], spawnerstat[14], -2, 4, 32)
    // youthful
    boolspawnermod(material[15], spawnerstat[15], true)
    invboolspawnermod(material[15], spawnerstat[15], false)

    // Changes a spawner modifier to true/false depending on the mod
    function boolspawnermod(item, stat, value){
        event.custom({
            "type": "apothic_spawners:spawner_modifier",
            "mainhand": {
                "item": item
            },
            "stat_changes": [{
                "type": stat,
                "value": value
            }]
        })
    }
    // negates a "boolean" type spawner modifier
    function invboolspawnermod(item, stat, value){
        event.custom({
            "type": "apothic_spawners:spawner_modifier",
            "mainhand": {
                "item": item
            },
            "offhand": {
                "item": "minecraft:quartz"
            },
            "consume_offhand": false,
            "stat_changes": [{
                "type": stat,
                "value": value
            }]
        })
    }
    // Changes a spawner modifier stat by the value, with min/max
    function valspawnermod(item, stat, value, min, max){
        event.custom({
            "type": "apothic_spawners:spawner_modifier",
            "mainhand": {
                "item": item
            },
            "stat_changes": [{
                "type": stat,
                "value": value,
                "min": min,
                "max": max
            }]
        })
    }
    // inverse Changes a spawner modifier stat by the value, with min/max
    function invvalspawnermod(item, stat, value, min, max){
        event.custom({
            "type": "apothic_spawners:spawner_modifier",
            "mainhand": {
                "item": item
            },
            "offhand": {
                "item": "minecraft:quartz"
            },
            "consume_offhand": false,
            "stat_changes": [{
                "type": stat,
                "value": value,
                "min": min,
                "max": max
            }]
        })
    }

})