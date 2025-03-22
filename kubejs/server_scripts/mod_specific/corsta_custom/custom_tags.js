ServerEvents.tags('item', event => {
    //Adding new item tags = event.add('item_tag', 'item')
    //You can create new or use existing tags this way
    //Using an existing tag example = event.add('minecraft:logs', 'minecraft:stone')
    //Creating new item tag example = event.add('floabg:test_tag', 'minecraft:stone')
    //Adding new tags to another tag = event.add('item_tag', '#item_tag') the "#" is very important
    //Example event.add('c:stones', '#minecraft:dirt') This makes it so any item that has the "minecraft:dirt" tag will now have the "c:stones" tag
    //Removing a tag from and item = event.remove('item_tag', 'item')
    //Example = event.remove('minecraft:dirt', 'minecraft:grass') This will remove the minecraft:dirt tag from the Grass Block
    event.add('c:salts', 'mekanism:salt')
    event.add('c:salts', 'alltheores:salt')
    event.add('c:salt', 'mekanism:salt')
    event.add('c:salt', 'alltheores:salt')
    event.add('floabg:crystal_fruit_leaves', 'aether:crystal_fruit_leaves')
    event.remove('c:nuggets', 'create_d2d:lapis_lazuli_shard')
    event.remove('c:nuggets/lapis', 'create_d2d:lapis_lazuli_shard')
    event.remove('silentgear:greedy_magnet_attracted', 'create_d2d:lapis_lazuli_shard')
    event.remove('silentgear:gold_digger_drops', 'create_d2d:lapis_lazuli_shard')
    event.remove('c:nuggets', 'create_d2d:diamond_shard')
    event.remove('c:nuggets/diamond', 'create_d2d:diamond_shard')
    event.remove('silentgear:greedy_magnet_attracted', 'create_d2d:diamond_shard')
    event.remove('silentgear:gold_digger_drops', 'create_d2d:diamond_shard')
    event.remove('c:nuggets', 'create_d2d:coal_piece')
    event.remove('c:nuggets/coal', 'create_d2d:coal_piece')
    event.remove('silentgear:greedy_magnet_attracted', 'create_d2d:coal_piece')
    event.remove('silentgear:gold_digger_drops', 'create_d2d:coal_piece')
//Open parties and claims Item exemption floabg:claims_itemuse_exempt
    event.add('floabg:claims_itemuse_exempt', 'sophisticatedbackpacks:backpack')
    event.add('floabg:claims_itemuse_exempt', 'sophisticatedbackpacks:iron_backpack')
    event.add('floabg:claims_itemuse_exempt', 'sophisticatedbackpacks:gold_backpack')
    event.add('floabg:claims_itemuse_exempt', 'sophisticatedbackpacks:diamond_backpack')
    event.add('floabg:claims_itemuse_exempt', 'sophisticatedbackpacks:netherite_backpack')
    event.add('floabg:claims_itemuse_exempt', 'bhc:heart_amulet')
    event.add('floabg:claims_itemuse_exempt', 'bhc:red_heart')
    event.add('floabg:claims_itemuse_exempt', 'bhc:blue_heart')
    event.add('floabg:claims_itemuse_exempt', 'bhc:yellow_heart')
    event.add('floabg:claims_itemuse_exempt', 'bhc:green_heart')
    event.add('floabg:claims_itemuse_exempt', 'bhc:red_heart_patch')
    event.add('floabg:claims_itemuse_exempt', 'bhc:blue_heart_patch')
    event.add('floabg:claims_itemuse_exempt', 'bhc:yellow_heart_patch')
    event.add('floabg:claims_itemuse_exempt', 'bhc:green_heart_patch')
    event.add('floabg:claims_itemuse_exempt', 'bhc:soul_heart_amulet')
    event.add('floabg:claims_itemuse_exempt', 'enderstorage:ender_pouch')
    event.add('floabg:claims_itemuse_exempt', 'hostilenetworks:deep_learner')
    event.add('floabg:claims_itemuse_exempt', 'ars_nouveau:starby_gift')
    event.add('floabg:claims_itemuse_exempt', 'tombstone:grave_key')
//Farmlands //Tags to help with cloche compatibility
//Tier Nether
    event.add('floabg:farmland_nether', 'minecraft:netherrack')
    event.add('floabg:farmland_nether', 'minecraft:crimson_nylium')
    event.add('floabg:farmland_nether', 'minecraft:warped_nylium')
//Tier End
    event.add('floabg:farmland_end', 'minecraft:end_stone')
//Tier Sand
    event.add('floabg:farmland_sand', 'minecraft:sand')
    event.add('floabg:farmland_sand', 'minecraft:red_sand')
//Tier Grasses
    event.add('floabg:farmland_grass', 'minecraft:dirt')
    event.add('floabg:farmland_grass', 'minecraft:grass_block')
    event.add('floabg:farmland_grass', 'minecraft:podzol')
    event.add('floabg:farmland_grass', 'minecraft:mycelium')
    event.add('floabg:farmland_grass', 'minecraft:dirt_path')
    event.add('floabg:farmland_grass', 'minecraft:coarse_dirt')
    event.add('floabg:farmland_grass', 'minecraft:rooted_dirt')
    event.add('floabg:farmland_grass', 'minecraft:farmland')
    event.add('floabg:farmland_grass', 'mysticalagriculture:inferium_farmland')
    event.add('floabg:farmland_grass', 'mysticalagriculture:prudentium_farmland')
    event.add('floabg:farmland_grass', 'mysticalagriculture:tertium_farmland')
    event.add('floabg:farmland_grass', 'mysticalagriculture:imperium_farmland')
    event.add('floabg:farmland_grass', 'mysticalagriculture:supremium_farmland')
    event.add('floabg:farmland_grass', 'mysticalagradditions:insanium_farmland')
//Tier Grasses AllTheMods
    event.add('floabg:farmland_grass_atm', 'allthemodium:ancient_dirt')
    event.add('floabg:farmland_grass_atm', 'allthemodium:ancient_grass')
    event.add('floabg:farmland_stone_atm', 'allthemodium:ancient_stone')
//Tier Forbidden
    event.add('floabg:farmland_f_magic', 'forbidden_arcanus:magical_farmland')
    event.add('floabg:farmland_f_fungal', 'forbidden_arcanus:fungyss_block')
//Tier 0
    event.add('floabg:farmland_0', 'minecraft:farmland')
    event.add('floabg:farmland_0', 'justdirethings:goosoil_tier1')
    event.add('floabg:farmland_0', 'justdirethings:goosoil_tier2')
    event.add('floabg:farmland_0', 'justdirethings:goosoil_tier3')
    event.add('floabg:farmland_0', 'justdirethings:goosoil_tier4')
    event.add('floabg:farmland_0', 'forbidden_arcanus:magical_farmland')
    event.add('floabg:farmland_0', 'mysticalagriculture:inferium_farmland')
    event.add('floabg:farmland_0', 'mysticalagriculture:prudentium_farmland')
    event.add('floabg:farmland_0', 'mysticalagriculture:tertium_farmland')
    event.add('floabg:farmland_0', 'mysticalagriculture:imperium_farmland')
    event.add('floabg:farmland_0', 'mysticalagriculture:supremium_farmland')
    event.add('floabg:farmland_0', 'mysticalagradditions:insanium_farmland')
//Tier 1
    event.add('floabg:farmland_1', 'mysticalagriculture:inferium_farmland')
    event.add('floabg:farmland_1', 'mysticalagriculture:prudentium_farmland')
    event.add('floabg:farmland_1', 'mysticalagriculture:tertium_farmland')
    event.add('floabg:farmland_1', 'mysticalagriculture:imperium_farmland')
    event.add('floabg:farmland_1', 'mysticalagriculture:supremium_farmland')
    event.add('floabg:farmland_1', 'mysticalagradditions:insanium_farmland')
//Tier 2
    event.add('floabg:farmland_2', 'mysticalagriculture:prudentium_farmland')
    event.add('floabg:farmland_2', 'mysticalagriculture:tertium_farmland')
    event.add('floabg:farmland_2', 'mysticalagriculture:imperium_farmland')
    event.add('floabg:farmland_2', 'mysticalagriculture:supremium_farmland')
    event.add('floabg:farmland_2', 'mysticalagradditions:insanium_farmland')
//Tier 3
    event.add('floabg:farmland_3', 'mysticalagriculture:tertium_farmland')
    event.add('floabg:farmland_3', 'mysticalagriculture:imperium_farmland')
    event.add('floabg:farmland_3', 'mysticalagriculture:supremium_farmland')
    event.add('floabg:farmland_3', 'mysticalagradditions:insanium_farmland')
//Tier 4
    event.add('floabg:farmland_4', 'mysticalagriculture:imperium_farmland')
    event.add('floabg:farmland_4', 'mysticalagriculture:supremium_farmland')
    event.add('floabg:farmland_4', 'mysticalagradditions:insanium_farmland')
//Tier 5
    event.add('floabg:farmland_5', 'mysticalagriculture:supremium_farmland')
    event.add('floabg:farmland_5', 'mysticalagradditions:insanium_farmland')
//Tier 6
    event.add('floabg:farmland_6', 'mysticalagradditions:insanium_farmland')
//Seed Tags
    //Elemental
    event.add('floabg:resource_seed', 'mysticalagriculture:air_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:fire_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:water_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:earth_seeds')
    //1 
    event.add('floabg:resource_seed', 'mysticalagriculture:stone_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:dirt_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:wood_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:ice_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:deepslate_seeds')
    //2
    event.add('floabg:resource_seed', 'mysticalagriculture:prudentium_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:nature_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:dye_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:nether_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:coal_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:coral_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:honey_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:amethyst_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:silicon_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:sulfur_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:aluminum_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:limestone_seeds')
    event.add('floabg:mob_seed', 'mysticalagriculture:pig_seeds')
    event.add('floabg:mob_seed', 'mysticalagriculture:chicken_seeds')
    event.add('floabg:mob_seed', 'mysticalagriculture:cow_seeds')
    event.add('floabg:mob_seed', 'mysticalagriculture:sheep_seeds')
    event.add('floabg:mob_seed', 'mysticalagriculture:squid_seeds')
    event.add('floabg:mob_seed', 'mysticalagriculture:fish_seeds')
    event.add('floabg:mob_seed', 'mysticalagriculture:slime_seeds')
    event.add('floabg:mob_seed', 'mysticalagriculture:turtle_seeds')
    event.add('floabg:mob_seed', 'mysticalagriculture:armadillo_seeds')
    //3
    event.add('floabg:resource_seed', 'mysticalagriculture:arcane_crystal_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:iron_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:copper_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:nether_quartz_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:glowstone_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:redstone_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:obsidian_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:prismarine_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:tin_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:bronze_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:zinc_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:brass_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:silver_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:lead_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:sky_stone_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:certus_quartz_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:red_xychorium_gem_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:green_xychorium_gem_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:blue_xychorium_gem_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:light_xychorium_gem_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:dark_xychorium_gem_seeds')
    event.add('floabg:mob_seed', 'mysticalagriculture:zombie_seeds')
    event.add('floabg:mob_seed', 'mysticalagriculture:skeleton_seeds')
    event.add('floabg:mob_seed', 'mysticalagriculture:creeper_seeds')
    event.add('floabg:mob_seed', 'mysticalagriculture:spider_seeds')
    event.add('floabg:mob_seed', 'mysticalagriculture:rabbit_seeds')
    //4
    event.add('floabg:resource_seed', 'mysticalagriculture:gold_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:lapis_lazuli_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:end_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:steel_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:nickel_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:constantan_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:electrum_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:invar_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:uranium_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:ruby_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:sapphire_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:peridot_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:soulium_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:hop_graphite_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:osmium_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:fluorite_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:refined_glowstone_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:refined_obsidian_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:fluix_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:energized_steel_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:blazing_crystal_seeds')
    event.add('floabg:mob_seed', 'mysticalagriculture:experience_seeds')
    event.add('floabg:mob_seed', 'mysticalagriculture:breeze_seeds')
    event.add('floabg:mob_seed', 'mysticalagriculture:blaze_seeds')
    event.add('floabg:mob_seed', 'mysticalagriculture:ghast_seeds')
    event.add('floabg:mob_seed', 'mysticalagriculture:enderman_seeds')
    //5
    event.add('floabg:resource_seed', 'mysticalagriculture:prosperity_shard_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:diamond_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:emerald_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:netherite_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:platinum_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:iridium_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:niotic_crystal_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:spirited_crystal_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:uraninite_seeds')
    event.add('floabg:mob_seed', 'mysticalagriculture:wither_skeleton_seeds')
    //6
    event.add('floabg:resource_seed', 'mysticalagriculture:nether_star_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:dragon_egg_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:nitro_crystal_seeds')
    //Mythic
    event.add('floabg:resource_seed', 'mysticalagriculture:cognizant_dust_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:allthemodium_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:vibranium_seeds')
    event.add('floabg:resource_seed', 'mysticalagriculture:unobtainium_seeds')

    floabg.add('c:storage_blocks', '#c:storage_blocks/raw_crimson_iron')
    floabg.add('c:storage_blocks', '#c:storage_blocks/raw_azure_silver')
})

ServerEvents.tags('block', event => {
//Open parties and claims Block exemption floabg:claims_blockuse_exempt
    event.add('floabg:claims_blockuse_exempt', 'supplementaries:globe')
    event.add('floabg:claims_blockuse_exempt', 'supplementaries:globe_sepia')
    event.add('floabg:claims_blockuse_exempt', '#tombstone:graves')
//Entangled Blacklist
    event.add('entangled:invalid_targets',
        ['@ae2', '@advancedae', '@extendedae', '@megacells', '@appflux', '@appmek']
    )
})