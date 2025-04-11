ServerEvents.recipes(event => {
  const essence = ["iron", "gold", "copper", "uranium", "tin", "aluminum", "lead", "nickel", "platinum", "osmium", "silver", "zinc", "iridium"]
  essence.forEach(ingred => {
    event.remove({input: `mysticalagriculture:${ingred}_essence`})
  })
  //Mystical
  event.shaped('mysticalagriculture:prosperity_shard', ['AAA', 'AAA', 'AAA'], {
    A: 'mysticalagriculture:prosperity_shard_essence'
  })
    
  event.shaped('mysticalagriculture:cognizant_dust', ['AAA', 'AAA', 'AAA'], {
    A: 'mysticalagriculture:cognizant_dust_essence'
  })
  //All The Modium
  event.shaped('allthemodium:allthemodium_nugget', ['AAA', 'A A', 'AAA'], {
    A: 'mysticalagriculture:allthemodium_essence'
  })

  event.shaped('allthemodium:vibranium_nugget', ['AAA', 'A A', 'AAA'], {
    A: 'mysticalagriculture:vibranium_essence'
  })

  event.shaped('allthemodium:unobtainium_nugget', ['AAA', 'A A', 'AAA'], {
    A: 'mysticalagriculture:unobtainium_essence'
  })
  //All The Ores
  event.shaped('6x minecraft:raw_iron', ['AAA', 'A A', 'AAA'], {
    A: 'mysticalagriculture:iron_essence'
  })
  event.shaped('6x minecraft:raw_copper', ['AAA', 'A A', 'AAA'], {
    A: 'mysticalagriculture:copper_essence'
  })
  event.shaped('4x minecraft:raw_gold', ['AAA', 'A A', 'AAA'], {
    A: 'mysticalagriculture:gold_essence'
  })
  event.shaped('6x alltheores:raw_aluminum', ['AAA', 'A A', 'AAA'], {
    A: 'mysticalagriculture:aluminum_essence'
  })
  event.shaped('4x alltheores:raw_lead', ['AAA', 'A A', 'AAA'], {
    A: 'mysticalagriculture:lead_essence'
  })
  event.shaped('4x alltheores:raw_nickel', ['AAA', 'A A', 'AAA'], {
    A: 'mysticalagriculture:nickel_essence'
  })
  event.shaped('2x alltheores:raw_platinum', ['AAA', 'A A', 'AAA'], {
    A: 'mysticalagriculture:platinum_essence'
  })
  event.shaped('4x alltheores:raw_osmium', ['AAA', 'A A', 'AAA'], {
    A: 'mysticalagriculture:osmium_essence'
  })
  event.shaped('4x alltheores:raw_silver', ['AAA', 'A A', 'AAA'], {
    A: 'mysticalagriculture:silver_essence'
  })
  event.shaped('4x alltheores:raw_tin', ['AAA', 'A A', 'AAA'], {
    A: 'mysticalagriculture:tin_essence'
  })
  event.shaped('4x alltheores:raw_zinc', ['AAA', 'A A', 'AAA'], {
    A: 'mysticalagriculture:zinc_essence'
  })
  event.shaped('2x alltheores:raw_iridium', ['AAA', 'A A', 'AAA'], {
    A: 'mysticalagriculture:iridium_essence'
  })
  event.shaped('2x alltheores:raw_uranium', ['AAA', 'A A', 'AAA'], {
    A: 'mysticalagriculture:uranium_essence'
  })

  //Forbidden & Arcanus
  event.shaped('forbidden_arcanus:arcane_crystal', ['AAA', 'AAA', 'AAA'], {
    A: 'mysticalagriculture:arcane_crystal_essence'
  })

  event.shaped('forbidden_arcanus:deorum_nugget', ['AAA', 'A A', 'AAA'], {
    A: 'mysticalagriculture:deorum_essence'
  })
  
  event.shapeless(
    Item.of('forbidden_arcanus:arcane_crystal_dust_speck', 1),
    [
      'mysticalagriculture:arcane_crystal_essence',
    ]
  )  
  
  event.shaped('16x forbidden_arcanus:aurum_log', ['AAA', 'ABA', 'AAA'], {
    A: 'mysticalagriculture:wood_essence',
    B: 'mysticalagriculture:gold_essence'
  }).id('kubejs:forbidden_arcanus/aurum_log')

  //Irons Spellbooks
  event.shaped('irons_spellbooks:cinder_essence', ['AAA', 'AAA', 'AAA'], {
    A: 'mysticalagriculture:cinder_essence_essence'
  })

  event.shaped('irons_spellbooks:arcane_essence', ['AAA', 'AAA', 'AAA'], {
    A: 'mysticalagriculture:arcane_essence_essence'
  })

  event.shaped('irons_spellbooks:raw_mithril', ['AAA', 'AAA', 'AAA'], {
    A: 'mysticalagriculture:mithril_essence'
  })

  //Xycraft
  event.shaped('8x xycraft_world:xychorium_gem_red', ['AAA', 'A A', 'AAA'], {
    A: 'mysticalagriculture:red_xychorium_gem_essence'
  })

  event.shaped('8x xycraft_world:xychorium_gem_green', ['AAA', 'A A', 'AAA'], {
    A: 'mysticalagriculture:green_xychorium_gem_essence'
  })

  event.shaped('8x xycraft_world:xychorium_gem_blue', ['AAA', 'A A', 'AAA'], {
    A: 'mysticalagriculture:blue_xychorium_gem_essence'
  })

  event.shaped('8x xycraft_world:xychorium_gem_light', ['AAA', 'A A', 'AAA'], {
    A: 'mysticalagriculture:light_xychorium_gem_essence'
  })

  event.shaped('8x xycraft_world:xychorium_gem_dark', ['AAA', 'A A', 'AAA'], {
    A: 'mysticalagriculture:dark_xychorium_gem_essence'
  })
  //Remove Recipes
  const aggs = ["air", "fire", "water", "earth", "nature", "nature", "dye", "nether", "coral", "honey", "prismarine", "end"]
  aggs.forEach(agg => {
  event.remove({"output": `mysticalagriculture:${agg}_agglomeratio`})
  })
  //Mystical Agriculture
  event.shaped("mysticalagriculture:air_agglomeratio", ['ABB', 'BBC', 'CCD'], {
    A: 'minecraft:glass_bottle',
    B: 'minecraft:gravel',
    C: 'minecraft:dirt',
    D: 'minecraft:clay'
  })
  event.shaped("mysticalagriculture:fire_agglomeratio", ['ABB', 'BBC', 'CCD'], {
    A: 'minecraft:lava_bucket',
    B: 'minecraft:gravel',
    C: 'minecraft:dirt',
    D: 'minecraft:clay'
  })
  event.shaped("mysticalagriculture:water_agglomeratio", ['ABB', 'BBC', 'CCD'], {
    A: 'minecraft:water_bucket',
    B: 'minecraft:gravel',
    C: 'minecraft:dirt',
    D: 'minecraft:clay'
  })
  event.shaped("mysticalagriculture:earth_agglomeratio", ['ABB', 'BBC', 'CCD'], {
    A: 'minecraft:short_grass',
    B: 'minecraft:gravel',
    C: 'minecraft:dirt',
    D: 'minecraft:clay'
  })
  event.shaped("mysticalagriculture:nature_agglomeratio", ['ABC', 'DDD', 'EEE'], {
    A: 'allthecompressed:pumpkin_1x',
    B: 'farmersdelight:potato_crate',
    C: 'farmersdelight:carrot_crate',
    D: 'minecraft:cactus',
    E: 'minecraft:sugar_cane'
  })
  event.shaped("mysticalagriculture:dye_agglomeratio", ['ABC', 'DEF', 'GHI'], {
    A: 'minecraft:cyan_wool',
    B: 'minecraft:orange_wool',
    C: 'minecraft:light_gray_wool',
    D: 'minecraft:pink_wool',
    E: 'minecraft:lime_wool',
    F: 'minecraft:magenta_wool',
    G: 'minecraft:black_wool',
    H: 'minecraft:brown_wool',
    I: 'minecraft:white_wool'
  })
  event.shaped("mysticalagriculture:nether_agglomeratio", ['ABC', 'DEF', 'GHI'], {
    A: 'minecraft:netherrack',
    B: 'minecraft:soul_sand',
    C: 'minecraft:soul_soil',
    D: 'minecraft:nether_bricks',
    E: 'minecraft:nether_wart_block',
    F: 'minecraft:crimson_nylium',
    G: 'minecraft:warped_nylium',
    H: 'minecraft:red_nether_bricks',
    I: 'minecraft:blackstone'
  })
  event.shaped("mysticalagriculture:coral_agglomeratio", ['ABA', 'CDE', 'AFA'], {
    A: 'mysticalagriculture:fish_essence',
    B: 'minecraft:tube_coral_block',
    C: 'minecraft:brain_coral_block',
    D: 'minecraft:bubble_coral_block',
    E: 'minecraft:fire_coral_block',
    F: 'minecraft:horn_coral_block'
  })
  event.shaped("mysticalagriculture:honey_agglomeratio", ['ABA', 'BCB', 'ABA'], {
    A: 'minecraft:honey_block',
    B: 'minecraft:honeycomb_block',
    C: 'minecraft:bee_nest'
  })
  event.shaped("mysticalagriculture:prismarine_agglomeratio", ['ABA', 'BAB', 'ABA'], {
    A: 'minecraft:sea_lantern',
    B: 'minecraft:prismarine_bricks'
  })
  event.shaped("mysticalagriculture:end_agglomeratio", ['ABA', 'BAB', 'ABA'], {
    A: 'minecraft:end_stone',
    B: 'cataclysm:chiseled_purpur_block'
  })
})