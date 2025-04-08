ServerEvents.recipes(event => {
    event.remove({ output: 'minecraft:furnace' })
    event.shaped('minecraft:furnace', ['AAA', 'ABA', 'AAA'], {
        A: '#minecraft:stone_crafting_materials',
        B: '#c:coal'
    })
    event.shaped('minecraft:furnace', ['AAA', 'ABA', 'AAA'], {
        A: 'macabre:brittlestone',
        B: '#c:coal'
    }) 
})