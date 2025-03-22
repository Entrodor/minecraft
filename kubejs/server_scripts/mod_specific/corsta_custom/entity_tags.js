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
})