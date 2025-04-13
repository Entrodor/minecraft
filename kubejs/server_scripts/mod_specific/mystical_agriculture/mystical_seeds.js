ServerEvents.recipes(event => {
//File used to edit the infusion recipes for mystical seeds
//seed(input, essence, output)
//Following is to upgrade mystical tiered seeds that I have created
//seedupgrade(previous, input, output)

    //event.remove({"output": '#floabg:mob_seed'})
    event.remove({"output": '#floabg:resource_seed'})
    event.remove({"id": /mysticalcustomization:*/})
    event.remove({"output": /mysticalcustomization:*/})
    const augments = ["flight"]
    augments.forEach( augment => {
        event.remove({"output": `mysticalagriculture:${augment}_augment`})
    })
//Augments
    augment('mysticalagriculture:unattuned_augment', 'mysticalagradditions:creative_essence', 'silentgear:starmetal_dust', 'mysticalagradditions:creative_essence', 'silentgear:starmetal_dust', 'mysticalagradditions:creative_essence', 'silentgear:starmetal_dust', 'mysticalagradditions:creative_essence', 'silentgear:starmetal_dust', 'mysticalagriculture:flight_augment')

//Seed Upgrade
    seedupgrade("mysticalagriculture:inferium_seeds", "mysticalagriculture:prudentium_essence", "mysticalagriculture:prudentium_seeds")
    seedupgrade("mysticalagriculture:prudentium_seeds", "mysticalagriculture:tertium_essence", "mysticalagriculture:tertium_seeds")
    seedupgrade("mysticalagriculture:tertium_seeds", "mysticalagriculture:imperium_essence", "mysticalagriculture:imperium_seeds")
    seedupgrade("mysticalagriculture:imperium_seeds", "mysticalagriculture:supremium_essence", "mysticalagriculture:supremium_seeds")
    seedupgrade("mysticalagriculture:supremium_seeds", "mysticalagradditions:insanium_essence", "mysticalagriculture:insanium_seeds")
//Seed Tier Elemental
    seed("mysticalagriculture:air_agglomeratio", "mysticalagriculture:inferium_essence", "mysticalagriculture:air_seeds")
    seed("mysticalagriculture:fire_agglomeratio", "mysticalagriculture:inferium_essence", "mysticalagriculture:fire_seeds")
    seed("mysticalagriculture:water_agglomeratio", "mysticalagriculture:inferium_essence", "mysticalagriculture:water_seeds")
    seed("mysticalagriculture:earth_agglomeratio", "mysticalagriculture:inferium_essence", "mysticalagriculture:earth_seeds")
//Seed Tier 1
    seed("allthecompressed:stone_1x", "mysticalagriculture:inferium_essence", "mysticalagriculture:stone_seeds")
    seed("allthecompressed:dirt_1x", "mysticalagriculture:inferium_essence", "mysticalagriculture:dirt_seeds")
    seed("allthecompressed:oak_log_1x", "mysticalagriculture:inferium_essence", "mysticalagriculture:wood_seeds")
    seed("minecraft:packed_ice", "mysticalagriculture:inferium_essence", "mysticalagriculture:ice_seeds")
    seed("allthecompressed:deepslate_1x", "mysticalagriculture:inferium_essence", "mysticalagriculture:deepslate_seeds")
//Seed Tier 2
    seed("mysticalagriculture:nature_agglomeratio", "mysticalagriculture:prudentium_essence", "mysticalagriculture:nature_seeds")
    seed("mysticalagriculture:dye_agglomeratio", "mysticalagriculture:prudentium_essence", "mysticalagriculture:dye_seeds")
    seed("mysticalagriculture:nether_agglomeratio", "mysticalagriculture:prudentium_essence", "mysticalagriculture:nether_seeds")
    seed("minecraft:coal_block", "mysticalagriculture:prudentium_essence", "mysticalagriculture:coal_seeds")
    seed("mysticalagriculture:coral_agglomeratio", "mysticalagriculture:prudentium_essence", "mysticalagriculture:coral_seeds")
    seed("mysticalagriculture:honey_agglomeratio", "mysticalagriculture:prudentium_essence", "mysticalagriculture:honey_seeds")
    seed("minecraft:amethyst_block", "mysticalagriculture:prudentium_essence", "mysticalagriculture:amethyst_seeds")
    //soulseed("", "mysticalagriculture:prudentium_essence", "mysticalagriculture:pig_seeds")
    //soulseed("", "mysticalagriculture:prudentium_essence", "mysticalagriculture:chicken_seeds")
    //soulseed("", "mysticalagriculture:prudentium_essence", "mysticalagriculture:cow_seeds")
    //soulseed("", "mysticalagriculture:prudentium_essence", "mysticalagriculture:sheep_seeds")
    //soulseed("", "mysticalagriculture:prudentium_essence", "mysticalagriculture:squid_seeds")
    //soulseed("", "mysticalagriculture:prudentium_essence", "mysticalagriculture:fish_seeds")
    //soulseed("", "mysticalagriculture:prudentium_essence", "mysticalagriculture:slime_seeds")
    //soulseed("", "mysticalagriculture:prudentium_essence", "mysticalagriculture:turtle_seeds")
    //soulseed("", "mysticalagriculture:prudentium_essence", "mysticalagriculture:armadillo_seeds")
    seed("oritech:silicon_block", "mysticalagriculture:prudentium_essence", "mysticalagriculture:silicon_seeds")
    seed("alltheores:sulfur_block", "mysticalagriculture:prudentium_essence", "mysticalagriculture:sulfur_seeds")
    seed("alltheores:aluminum_block", "mysticalagriculture:prudentium_essence", "mysticalagriculture:aluminum_seeds")
    seed("create:limestone", "mysticalagriculture:prudentium_essence", "mysticalagriculture:limestone_seeds")
//Seed Tier 3
    seed("forbidden_arcanus:arcane_crystal_block", "mysticalagriculture:tertium_essence", "mysticalagriculture:arcane_crystal_seeds")
    seed("minecraft:iron_block", "mysticalagriculture:tertium_essence", "mysticalagriculture:iron_seeds")
    seed("minecraft:copper_block", "mysticalagriculture:tertium_essence", "mysticalagriculture:copper_seeds")
    seed("minecraft:quartz_block", "mysticalagriculture:tertium_essence", "mysticalagriculture:nether_quartz_seeds")
    seed("minecraft:glowstone", "mysticalagriculture:tertium_essence", "mysticalagriculture:glowstone_seeds")
    seed("minecraft:redstone_block", "mysticalagriculture:tertium_essence", "mysticalagriculture:redstone_seeds")
    seed("allthecompressed:obsidian_1x", "mysticalagriculture:tertium_essence", "mysticalagriculture:obsidian_seeds")
    seed("mysticalagriculture:prismarine_agglomeratio", "mysticalagriculture:tertium_essence", "mysticalagriculture:prismarine_seeds")
    //soulseed("", "mysticalagriculture:tertium_essence", "mysticalagriculture:zombie_seeds")
    //soulseed("", "mysticalagriculture:tertium_essence", "mysticalagriculture:skeleton_seeds")
    //soulseed("", "mysticalagriculture:tertium_essence", "mysticalagriculture:creeper_seeds")
    //soulseed("", "mysticalagriculture:tertium_essence", "mysticalagriculture:spider_seeds")
    //soulseed("", "mysticalagriculture:tertium_essence", "mysticalagriculture:rabbit_seeds")
    seed("alltheores:tin_block", "mysticalagriculture:tertium_essence", "mysticalagriculture:tin_seeds")
    seed("alltheores:bronze_block", "mysticalagriculture:tertium_essence", "mysticalagriculture:bronze_seeds")
    seed("alltheores:zinc_block", "mysticalagriculture:tertium_essence", "mysticalagriculture:zinc_seeds")
    seed("alltheores:brass_block", "mysticalagriculture:tertium_essence", "mysticalagriculture:brass_seeds")
    seed("alltheores:silver_block", "mysticalagriculture:tertium_essence", "mysticalagriculture:silver_seeds")
    seed("alltheores:lead_block", "mysticalagriculture:tertium_essence", "mysticalagriculture:lead_seeds")
    seed("allthecompressed:sky_stone_block_1x", "mysticalagriculture:tertium_essence", "mysticalagriculture:sky_stone_seeds")
    seed("ae2:quartz_block", "mysticalagriculture:tertium_essence", "mysticalagriculture:certus_quartz_seeds")
    seed("xycraft_world:xychorium_storage_red", "mysticalagriculture:tertium_essence", "mysticalagriculture:red_xychorium_gem_seeds")
    seed("xycraft_world:xychorium_storage_green", "mysticalagriculture:tertium_essence", "mysticalagriculture:green_xychorium_gem_seeds")
    seed("xycraft_world:xychorium_storage_blue", "mysticalagriculture:tertium_essence", "mysticalagriculture:blue_xychorium_gem_seeds")
    seed("xycraft_world:xychorium_storage_light", "mysticalagriculture:tertium_essence", "mysticalagriculture:light_xychorium_gem_seeds")
    seed("xycraft_world:xychorium_storage_dark", "mysticalagriculture:tertium_essence", "mysticalagriculture:dark_xychorium_gem_seeds")
//Seed Tier 4
    seed("minecraft:gold_block", "mysticalagriculture:imperium_essence", "mysticalagriculture:gold_seeds")
    seed("minecraft:lapis_block", "mysticalagriculture:imperium_essence", "mysticalagriculture:lapis_lazuli_seeds")
    seed("mysticalagriculture:end_agglomeratio", "mysticalagriculture:imperium_essence", "mysticalagriculture:end_seeds")
    //soulseed("", "mysticalagriculture:tertium_essence", "mysticalagriculture:experience_seeds")
    //soulseed("", "mysticalagriculture:tertium_essence", "mysticalagriculture:breeze_seeds")
    //soulseed("", "mysticalagriculture:tertium_essence", "mysticalagriculture:blaze_seeds")
    //soulseed("", "mysticalagriculture:tertium_essence", "mysticalagriculture:ghast_seeds")
    //soulseed("", "mysticalagriculture:tertium_essence", "mysticalagriculture:enderman_seeds")
    seed("alltheores:steel_block", "mysticalagriculture:imperium_essence", "mysticalagriculture:steel_seeds")
    seed("alltheores:nickel_block", "mysticalagriculture:imperium_essence", "mysticalagriculture:nickel_seeds")
    seed("alltheores:constantan_block", "mysticalagriculture:imperium_essence", "mysticalagriculture:constantan_seeds")
    seed("alltheores:electrum_block", "mysticalagriculture:imperium_essence", "mysticalagriculture:electrum_seeds")
    seed("alltheores:invar_block", "mysticalagriculture:imperium_essence", "mysticalagriculture:invar_seeds")
    seed("alltheores:uranium_block", "mysticalagriculture:imperium_essence", "mysticalagriculture:uranium_seeds")
    seed("alltheores:ruby_block", "mysticalagriculture:imperium_essence", "mysticalagriculture:ruby_seeds")
    seed("alltheores:sapphire_block", "mysticalagriculture:imperium_essence", "mysticalagriculture:sapphire_seeds")
    seed("alltheores:peridot_block", "mysticalagriculture:imperium_essence", "mysticalagriculture:peridot_seeds")
    seed("mysticalagriculture:soulium_block", "mysticalagriculture:imperium_essence", "mysticalagriculture:soulium_seeds")
    seed("immersiveengineering:dust_hop_graphite", "mysticalagriculture:imperium_essence", "mysticalagriculture:hop_graphite_seeds")
    seed("alltheores:osmium_block", "mysticalagriculture:imperium_essence", "mysticalagriculture:osmium_seeds")
    seed("alltheores:fluorite_block", "mysticalagriculture:imperium_essence", "mysticalagriculture:fluorite_seeds")
    seed("alltheores:signalum_block", "mysticalagriculture:imperium_essence", "mysticalagriculture:signalum_seeds")
    seed("alltheores:lumium_block", "mysticalagriculture:imperium_essence", "mysticalagriculture:lumium_seeds")
    seed("mekanism:block_refined_glowstone", "mysticalagriculture:imperium_essence", "mysticalagriculture:refined_glowstone_seeds")
    seed("mekanism:block_refined_obsidian", "mysticalagriculture:imperium_essence", "mysticalagriculture:refined_obsidian_seeds")
    seed("ae2:fluix_block", "mysticalagriculture:imperium_essence", "mysticalagriculture:fluix_seeds")
    seed("powah:energized_steel_block", "mysticalagriculture:imperium_essence", "mysticalagriculture:energized_steel_seeds")
    seed("powah:blazing_crystal_block", "mysticalagriculture:imperium_essence", "mysticalagriculture:blazing_crystal_seeds")
//Seed Tier 5
    seed("mysticalagriculture:prosperity_block", "mysticalagriculture:supremium_essence", "mysticalagriculture:prosperity_shard_seeds")
    seed("minecraft:diamond_block", "mysticalagriculture:supremium_essence", "mysticalagriculture:diamond_seeds")
    seed("minecraft:emerald_block", "mysticalagriculture:supremium_essence", "mysticalagriculture:emerald_seeds")
    seed("minecraft:netherite_block", "mysticalagriculture:supremium_essence", "mysticalagriculture:netherite_seeds")
    //soulseed("", "mysticalagriculture:supremium_essence", "mysticalagriculture:wither_skeleton_seeds")
    seed("alltheores:platinum_block", "mysticalagriculture:supremium_essence", "mysticalagriculture:platinum_seeds")
    seed("alltheores:iridium_block", "mysticalagriculture:supremium_essence", "mysticalagriculture:iridium_seeds")
    seed("powah:niotic_crystal_block", "mysticalagriculture:supremium_essence", "mysticalagriculture:niotic_crystal_seeds")
    seed("powah:spirited_crystal_block", "mysticalagriculture:supremium_essence", "mysticalagriculture:spirited_crystal_seeds")
    seed("powah:uraninite_block", "mysticalagriculture:supremium_essence", "mysticalagriculture:uraninite_seeds")
    seed("alltheores:enderium_block", "mysticalagriculture:supremium_essence", "mysticalagriculture:enderium_seeds")
//Seed Tier 6
    seed("mysticalagradditions:nether_star_crux", "mysticalagradditions:insanium_essence", "mysticalagriculture:nether_star_seeds")
    seed("mysticalagradditions:dragon_egg_crux", "mysticalagradditions:insanium_essence", "mysticalagriculture:dragon_egg_seeds")
    seed("powah:nitro_crystal_block", "mysticalagradditions:insanium_essence", "mysticalagriculture:nitro_crystal_seeds")
//Seed Tier Mythic
    seed("allthemodium:allthemodium_block", "mysticalagradditions:creative_essence", "mysticalagriculture:allthemodium_seeds")
    seed("allthemodium:vibranium_block", "mysticalagradditions:creative_essence", "mysticalagriculture:vibranium_seeds")
    seed("allthemodium:unobtainium_block", "mysticalagradditions:creative_essence", "mysticalagriculture:unobtainium_seeds")
//Seed Tier Magical
    seed("forbidden_arcanus:deorum_block", "mysticalagriculture:imperium_essence", "mysticalagriculture:deorum_seeds")
//Seed Tier Awakened
    seed("mysticalagriculture:cognizant_dust","mysticalagradditions:creative_essence","mysticalagriculture:cognizant_dust_seeds")
function seed (input, essence, output){
    event.custom({
        "type": "mysticalagriculture:infusion",
        "input": { "item": "mysticalagriculture:prosperity_seed_base" },
        "ingredients": [
            {"item": input},
            {"item": essence},
            {"item": input},
            {"item": essence},
            {"item": input},
            {"item": essence},
            {"item": input},
            {"item": essence}
        ],
        "result": 
        { "id": output, 
            "count": 1 
        }
    })}

//function soulseed (input, essence, output){
//    event.custom({
//        "type": "mysticalagriculture:infusion",
//        "input": { "item": "mysticalagriculture:soulium_seed_base" },
//        "ingredients": [
//            {"type": input,},
//            {"item": essence},
//            {"type": input,},
//            {"item": essence},
//            {"type": input,},
//            {"item": essence},
//            {"type": input,},
//            {"item": essence}
//        ],
//        "result": 
//        { "id": output, 
//            "count": 1 
//        }
//    })}

function seedupgrade (previous, input, output){
    event.custom({
        "type": "mysticalagriculture:infusion",
        "input": { "item": previous },
        "ingredients": [
            {"item": input},
            {"item": input},
            {"item": input},
            {"item": input},
            {"item": input},
            {"item": input},
            {"item": input},
            {"item": input}
        ],
        "result": 
        { "id": output, 
            "count": 1 
        }
    })}

function augment (catalyst, input1, input2, input3, input4, input5, input6, input7, input8, output){
    event.custom({
        "type": "mysticalagriculture:infusion",
        "input": { "item": catalyst },
        "ingredients": [
            {"item": input1},
            {"item": input2},
            {"item": input3},
            {"item": input4},
            {"item": input5},
            {"item": input6},
            {"item": input7},
            {"item": input8}
        ],
        "result": 
        { "id": output, 
            "count": 1 
        }
    })}
})
