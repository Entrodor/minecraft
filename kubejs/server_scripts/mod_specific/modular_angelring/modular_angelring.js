ServerEvents.recipes(event => {
    event.remove({output: "modular_angelring:gold_ring"})
    event.remove({output: "modular_angelring:inertia_module"})
    event.remove({output: "modular_angelring:night_vision_module"})
    event.remove({output: "modular_angelring:speed_module"})
    event.remove({output: "modular_angelring:blank_module"})
    event.remove({output: "modular_angelring:angel_ring_upgrade_smithing_template"})
    event.remove({output: "modular_angelring:magnet_module"})
    event.remove({output: "modular_angelring:mining_module"})

    event.shaped('modular_angelring:gold_ring', ['ABC', 'DED', 'FBA'], {
        A: 'justdirethings:eclipsealloy_ingot',
        B: 'irons_spellbooks:mithril_ingot',
        C: '#iceandfire:dragon_hearts',
        D: 'allthemodium:unobtainium_block',
        E: 'aether:zanite_ring', 
        F: 'ars_nouveau:wilden_tribute'
    })
    event.shaped('modular_angelring:blank_module', ['AAA', 'ABA', 'AAA'], {
        A: 'forbidden_arcanus:deorum_ingot',
        B: 'allthemodium:allthemodium_gear'
    })
    event.shaped('modular_angelring:angel_ring_upgrade_smithing_template', ['ABA', 'ACA', 'AAA'], {
        A: 'allthemodium:allthemodium_ingot',
        B: "#iceandfire:scales/dragon",
        C: 'silentgear:coating_smithing_template'
    })
    event.smithing(
        'modular_angelring:inertia_module',
        'modular_angelring:angel_ring_upgrade_smithing_template',
        'modular_angelring:blank_module',
        'irons_spellbooks:cooldown_rune'
    )
    event.smithing(
        'modular_angelring:night_vision_module',
        'modular_angelring:angel_ring_upgrade_smithing_template',
        'modular_angelring:blank_module',
        'oritech:exo_helmet'
    )
    event.smithing(
        'modular_angelring:speed_module',
        'modular_angelring:angel_ring_upgrade_smithing_template',
        'modular_angelring:blank_module',
        'ae2:speed_card'
    )
})