ServerEvents.recipes(event => {
    event.remove({output: 'mekanism:upgrade_anchor'})
    event.remove({output: 'mekanism:teleporter_frame'})
    event.remove({output: 'mekanism:teleporter'})
})
