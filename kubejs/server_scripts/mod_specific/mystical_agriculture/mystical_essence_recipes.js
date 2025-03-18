ServerEvents.recipes(event => {
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

  //Forbidden & Arcanus
  event.shaped('forbidden_arcanus:arcane_crystal', ['AAA', 'AAA', 'AAA'], {
    A: 'mysticalagriculture:arcane_crystal_essence'
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

  event.remove({"output": "mysticalagriculture:air_agglomeratio"})
  event.remove({"output": "mysticalagriculture:fire_agglomeratio"})
  event.remove({"output": "mysticalagriculture:water_agglomeratio"})
  event.remove({"output": "mysticalagriculture:earth_agglomeratio"})
  event.remove({"output": "mysticalagriculture:nature_agglomeratio"})
  event.remove({"output": "mysticalagriculture:dye_agglomeratio"})
  event.remove({"output": "mysticalagriculture:nether_agglomeratio"})
  event.remove({"output": "mysticalagriculture:coral_agglomeratio"})
  event.remove({"output": "mysticalagriculture:honey_agglomeratio"})
  event.remove({"output": "mysticalagriculture:prismarine_agglomeratio"})
  event.remove({"output": "mysticalagriculture:end_agglomeratio"})
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