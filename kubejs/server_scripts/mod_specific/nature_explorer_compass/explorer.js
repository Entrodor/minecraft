ServerEvents.recipes(event => {
    event.remove({output: 'explorerscompass:explorerscompass'})
    event.shaped('explorerscompass:explorerscompass', ['ABA', 'BCB', 'ABA'], {
        A: 'mysticalagriculture:spider_essence',
        B: 'minecraft:iron_block',
        C: 'minecraft:compass'
    })
})