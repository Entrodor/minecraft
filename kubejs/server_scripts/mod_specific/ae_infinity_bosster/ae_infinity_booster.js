ServerEvents.recipes(event => {
    event.remove({mod: 'aeinfinitybooster'})
    event.shaped("aeinfinitybooster:infinity_card", ['ABA', 'CDC', 'EEE'], {
        A: "cataclysm:flame_eye",
        B: "ae2wtlib:quantum_bridge_card",
        C: "ae2:advanced_card",
        D: "minecraft:nether_star",
        E: "allthemodium:vibranium_ingot"
    })
    event.shaped("aeinfinitybooster:dimension_card", ['ABA', 'CDC', 'ABA'], {
        A: "aeinfinitybooster:infinity_card",
        B: "cataclysm:void_eye",
        C: "forbidden_arcanus:dark_nether_star",
        D: "allthemodium:unobtainium_block"
    })
})