ServerEvents.recipes(event => {
    event.remove({output: 'naturescompass:naturescompass'})
    event.shaped('naturescompass:naturescompass', ['ABA', 'BCB', 'ABA'], {
        A: 'mysticalagriculture:nature_essence',
        B: 'forbidden_arcanus:aurum_log',
        C: 'minecraft:compass'
    })
})