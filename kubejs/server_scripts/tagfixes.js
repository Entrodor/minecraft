ServerEvents.tags('block', floabg => {
    floabg.add('entangled:invalid_targets',
        ['@ae2', '@advancedae', '@extendedae', '@megacells', '@appflux', '@appmek']
    )
})

ServerEvents.tags('item', floabg => {
    floabg.add('c:storage_blocks', '#c:storage_blocks/raw_crimson_iron')
    floabg.add('c:storage_blocks', '#c:storage_blocks/raw_azure_silver')
})

ServerEvents.tags('entity_type', floabg => {
    // Productive Bees
    floabg.add('justdirethings:paradox_deny', /productivebees:/);
    floabg.add('industrialforegoing:mob_duplicator_blacklist', /productivebees:/)

    // Allthemodium
    floabg.add('justdirethings:paradox_deny', 'allthemodium:piglich');
    floabg.add('industrialforegoing:mob_duplicator_blacklist', 'allthemodium:piglich')

    //Industrial Foregoing
    floabg.add('industrialforegoing:mob_crusher_blacklist', [
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

    floabg.add('c:bosses', '#neoforge:bosses')

})