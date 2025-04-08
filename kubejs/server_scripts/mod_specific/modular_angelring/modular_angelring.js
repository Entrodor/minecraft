ServerEvents.recipes(event => {
    const ring = ["gold_ring", "inertia_module", "night_vision_module", "speed_module", "blank_module", "angel_ring_upgrade_smithing_template", "magnet_module", "mining_module"]
    ring.forEach(angel => {
        event.remove({"output": `modular_angelring:${angel}`})
})
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