ServerEvents.recipes(event => { 
//Item
    event.shaped('curvy_pipes:tiny_item_pipe', [' A ', 'ABA', ' A '], {
        A: 'minecraft:gold_nugget',
        B: 'mekanism:basic_logistical_transporter'
    })
    event.shaped('curvy_pipes:small_item_pipe', [' A ', 'ABA', ' A '], {
        A: 'minecraft:gold_nugget',
        B: 'mekanism:advanced_logistical_transporter'
    })
    event.shaped('curvy_pipes:medium_item_pipe', [' A ', 'ABA', ' A '], {
        A: 'minecraft:gold_nugget',
        B: 'mekanism:elite_logistical_transporter'
    })
    event.shaped('curvy_pipes:large_item_pipe', [' A ', 'ABA', ' A '], {
        A: 'minecraft:gold_nugget',
        B: 'mekanism:ultimate_logistical_transporter'
    })
    event.shaped('8x curvy_pipes:small_item_pipe', ['AAA', 'ABA', 'AAA'], {
        A: 'curvy_pipes:tiny_item_pipe',
        B: 'mekanism:alloy_infused'
    })
    event.shaped('8x curvy_pipes:medium_item_pipe', ['AAA', 'ABA', 'AAA'], {
        A: 'curvy_pipes:small_item_pipe',
        B: 'mekanism:alloy_reinforced'
    })
    event.shaped('8x curvy_pipes:large_item_pipe', ['AAA', 'ABA', 'AAA'], {
        A: 'curvy_pipes:medium_item_pipe',
        B: 'mekanism:alloy_atomic'
    })
//Fluid
    event.shaped('curvy_pipes:tiny_fluid_pipe', [' A ', 'ABA', ' A '], {
        A: 'minecraft:lapis_lazuli',
        B: 'mekanism:basic_mechanical_pipe'
    })
    event.shaped('curvy_pipes:small_fluid_pipe', [' A ', 'ABA', ' A '], {
        A: 'minecraft:lapis_lazuli',
        B: 'mekanism:advanced_mechanical_pipe'
    })
    event.shaped('curvy_pipes:medium_fluid_pipe', [' A ', 'ABA', ' A '], {
        A: 'minecraft:lapis_lazuli',
        B: 'mekanism:elite_mechanical_pipe'
    })
    event.shaped('curvy_pipes:large_fluid_pipe', [' A ', 'ABA', ' A '], {
        A: 'minecraft:lapis_lazuli',
        B: 'mekanism:ultimate_mechanical_pipe'
    })
    event.shaped('8x curvy_pipes:small_fluid_pipe', ['AAA', 'ABA', 'AAA'], {
        A: 'curvy_pipes:tiny_fluid_pipe',
        B: 'mekanism:alloy_infused'
    })
    event.shaped('8x curvy_pipes:medium_fluid_pipe', ['AAA', 'ABA', 'AAA'], {
        A: 'curvy_pipes:small_fluid_pipe',
        B: 'mekanism:alloy_reinforced'
    })
    event.shaped('8x curvy_pipes:large_fluid_pipe', ['AAA', 'ABA', 'AAA'], {
        A: 'curvy_pipes:medium_fluid_pipe',
        B: 'mekanism:alloy_atomic'
    })
//Energy
    event.shaped('curvy_pipes:tiny_energy_pipe', [' A ', 'ABA', ' A '], {
        A: 'minecraft:redstone',
        B: 'mekanism:basic_universal_cable'
    })
    event.shaped('curvy_pipes:small_energy_pipe', [' A ', 'ABA', ' A '], {
        A: 'minecraft:redstone',
        B: 'mekanism:advanced_universal_cable'
    })
    event.shaped('curvy_pipes:medium_energy_pipe', [' A ', 'ABA', ' A '], {
        A: 'minecraft:redstone',
        B: 'mekanism:elite_universal_cable'
    })
    event.shaped('curvy_pipes:large_energy_pipe', [' A ', 'ABA', ' A '], {
        A: 'minecraft:redstone',
        B: 'mekanism:ultimate_universal_cable'
    })
    event.shaped('8x curvy_pipes:small_energy_pipe', ['AAA', 'ABA', 'AAA'], {
        A: 'curvy_pipes:tiny_energy_pipe',
        B: 'mekanism:alloy_infused'
    })
    event.shaped('8x curvy_pipes:medium_energy_pipe', ['AAA', 'ABA', 'AAA'], {
        A: 'curvy_pipes:small_energy_pipe',
        B: 'mekanism:alloy_reinforced'
    })
    event.shaped('8x curvy_pipes:large_energy_pipe', ['AAA', 'ABA', 'AAA'], {
        A: 'curvy_pipes:medium_energy_pipe',
        B: 'mekanism:alloy_atomic'
    })
})