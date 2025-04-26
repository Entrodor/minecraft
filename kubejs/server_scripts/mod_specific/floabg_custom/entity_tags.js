ServerEvents.tags('entity_type', event => {
    event.add("forbidden_arcanus:quantum_catcher_blacklisted", "doggytalents:dog")
    event.add("forbidden_arcanus:boss_catcher_blacklisted", "doggytalents:dog")
    event.add("forbidden_arcanus:quantum_catcher_blacklisted", "iceandfire:fire_dragon")
    event.add("forbidden_arcanus:boss_catcher_blacklisted", "iceandfire:fire_dragon")
    event.add("forbidden_arcanus:quantum_catcher_blacklisted", "iceandfire:ice_dragon")
    event.add("forbidden_arcanus:boss_catcher_blacklisted", "iceandfire:ice_dragon")
    event.add("forbidden_arcanus:quantum_catcher_blacklisted", "iceandfire:lightning_dragon")
    event.add("forbidden_arcanus:boss_catcher_blacklisted", "iceandfire:lightning_dragon")
    event.add("justdirethings:creature_catcher_deny", "iceandfire:fire_dragon")
    event.add("justdirethings:creature_catcher_deny", "iceandfire:ice_dragon")
    event.add("justdirethings:creature_catcher_deny", "iceandfire:lightning_dragon")
    event.add("c:bosses", "#neoforge:bosses")
    // Productive Bees
    event.add('justdirethings:paradox_deny', /productivebees:/);
    event.add('industrialforegoing:mob_duplicator_blacklist', /productivebees:/)

    // Allthemodium
    event.add('justdirethings:paradox_deny', 'allthemodium:piglich');
    event.add('industrialforegoing:mob_duplicator_blacklist', 'allthemodium:piglich')

    //Industrial Foregoing
    event.add('industrialforegoing:mob_crusher_blacklist', [
        "minecraft:warden",
        "minecraft:elder_guardian",
        "minecraft:ender_dragon",
        "minecraft:wither",
        "artifacts:mimic",
        "cataclysm:ender_guarian",
        "cataclysm:ender_golem",
        "cataclysm:nether_monstrosity",
        "cataclysm:ignis",
        "cataclysm:the_harbringer",
        "cataclysm:the_leviathan",
        "cataclysm:ancient_remnant",
        "cataclysm:maledictus",
        "cataclysm:ignited_revenant",
        "cataclysm:the_prowler",
        "cataclysm:the_baby_leviathan",
        "cataclysm:coralssus",
        "cataclysm:amethyst_crab",
        "cataclysm:modern_remnant",
        "cataclysm:kobolediator",
        "cataclysm:wadjet",
        "allthemodium:piglich"
    ])
    // Apothic Spawners
    const spawnerbl = [
        "aether:mimic",
        "artifacts:mimic",
        "grimoireofgaia:mimic",
        "productivebees:ashy_mining_bee",
        "productivebees:bee_bomb",
        "productivebees:blue_banded_bee",
        "productivebees:bumble_bee",
        "productivebees:chocolate_mining_bee",
        "productivebees:collector_bee",
        "productivebees:configurable_bee",
        "productivebees:creeper_bee",
        "productivebees:cupid_bee",
        "productivebees:digger_bee",
        "productivebees:dye_bee",
        "productivebees:farmer_bee",
        "productivebees:green_carpenter_bee",
        "productivebees:hoarder_bee",
        "productivebees:leafcutter_bee",
        "productivebees:lumber_bee",
        "productivebees:mason_bee",
        "productivebees:neon_cuckoo_bee",
        "productivebees:nomad_bee",
        "productivebees:quarry_bee",
        "productivebees:rancher_bee",
        "productivebees:reed_bee",
        "productivebees:resin_bee",
        "productivebees:sweat_bee",
        "productivebees:yellow_black_carpenter_bee",
        "minecraft:warden",
        "minecraft:elder_guardian",
        "minecraft:ender_dragon",
        "minecraft:wither",
        "iceandfire:ice_dragon",
        "iceandfire:fire_dragon",
        "iceandfire:lightning_dragon"
    ]
    event.add("apothic_spawners:blacklisted_from_spawners", "#c:bosses")
    spawnerbl.forEach(spawnbl => {
        event.add("apothic_spawners:blacklisted_from_spawners", `${spawnbl}`)
    })
})