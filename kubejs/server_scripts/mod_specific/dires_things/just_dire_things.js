ServerEvents.recipes(event => {
    event.remove({output: 'justdirethings:upgrade_flight'})
    event.remove({output: 'justdirethings:gooblock_tier3'})
    event.remove({output: 'justdirethings:gooblock_tier4'})
    event.shaped('justdirethings:upgrade_flight', ['ABC', 'DED', 'FBA'], {
        A: 'justdirethings:eclipsealloy_ingot',
        B: 'irons_spellbooks:mithril_ingot',
        C: '#iceandfire:dragon_hearts',
        D: 'allthemodium:unobtainium_block',
        E: 'justdirethings:upgrade_blank', 
        F: 'ars_nouveau:wilden_tribute'
    })
    event.shaped('justdirethings:gooblock_tier3', ['ABA', 'CDC', 'ABA'], {
        A: 'minecraft:ender_pearl',
        B: 'minecraft:purpur_block',
        C: 'minecraft:dragon_breath',
        D: 'justdirethings:gooblock_tier2'
    })
    event.shaped('justdirethings:gooblock_tier4', ['ABA', 'CDC', 'AEA'], {
        A: 'minecraft:sculk',
        B: 'deeperdarker:heart_of_the_deep',
        C: 'minecraft:echo_shard',
        D: 'justdirethings:gooblock_tier3',
        E: 'deeperdarker:warden_carapace'
    })
})