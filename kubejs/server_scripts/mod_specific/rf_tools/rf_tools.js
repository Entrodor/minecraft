ServerEvents.recipes(event => {
    event.remove({output: 'rftoolsbuilder:builder'})
    event.shaped('rftoolsbuilder:builder', ['ABA', 'CDC', 'ACA'], {
        A: 'allthemodium:allthemodium_ingot',
        B: 'rftoolsbase:infused_enderpearl',
        C: 'minecraft:redstone',
        D: 'rftoolsbase:machine_frame'
    })
})