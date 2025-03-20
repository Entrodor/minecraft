ServerEvents.recipes(event => {
    event.remove({output: 'wormhole:portal_frame'})
    event.remove({output: 'wormhole:portal_stabilizer'})
    event.remove({output: 'wormhole:basic_energy_cell'})
    event.remove({output: 'wormhole:advanced_energy_cell'})
    event.remove({output: 'wormhole:basic_target_cell'})
    event.remove({output: 'wormhole:advanced_target_cell'})
    event.shaped('2x wormhole:portal_frame', ['ABA', 'BCB', 'ABA'], {
        A: 'alltheores:steel_ingot',
        B: 'alltheores:nickel_plate',
        C: 'justdirethings:ferricore_ingot'
    })
    event.shaped('wormhole:portal_stabilizer', ['ABA', 'CDE', 'ABA'], {
        A: 'alltheores:steel_ingot',
        B: 'justdirethings:ferricore_ingot',
        C: 'ae2:formation_core',
        D: 'ae2:ender_dust',
        E: 'ae2:annihilation_core'
    })
    event.shaped('wormhole:basic_energy_cell', ['ABA', 'BCB', 'ABA'], {
        A: 'justdirethings:ferricore_ingot',
        B: 'appflux:charged_redstone',
        C: 'powah:energy_cell_hardened'
    })
    event.shaped('wormhole:advanced_energy_cell', ['ABA', 'BCB', 'ADA'], {
        A: 'justdirethings:celestigem',
        B: 'appflux:charged_redstone',
        C: 'powah:energy_cell_niotic',
        D: 'wormhole:basic_energy_cell'
    })
    event.shaped('wormhole:basic_target_cell', ['ABA', 'CDC', 'ACA'], {
        A: 'justdirethings:ferricore_ingot',
        B: 'ae2:cell_component_1k',
        C: 'minecraft:redstone',
        D: 'minecraft:target'
    })
    event.shaped('wormhole:advanced_target_cell', ['ABA', 'CDC', 'ACA'], {
        A: 'justdirethings:celestigem',
        B: 'ae2:cell_component_4k',
        C: 'minecraft:lapis_lazuli',
        D: 'wormhole:basic_target_cell'
    })
})