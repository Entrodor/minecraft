ServerEvents.recipes(event => { 
    event.remove({id: 'buildinggadgets2:gadget_copy_paste'})
    event.remove({id: 'buildinggadgets2:gadget_exchanging'})
    event.remove({id: 'buildinggadgets2:gadget_cut_paste'})
    event.remove({id: 'buildinggadgets2:gadget_destruction'})
    event.remove({id: 'buildinggadgets2:gadget_building'})
    event.remove({id: 'buildinggadgets2:template_manager'})

    event.shaped('buildinggadgets2:gadget_copy_paste', ['ABA', 'CBC', 'ADA'], {
        A: 'justdirethings:ferricore_ingot',
        B: 'minecraft:redstone',
        C: 'minecraft:emerald',
        D: 'minecraft:lapis_lazuli'
    })
    event.shaped('buildinggadgets2:gadget_exchanging', ['ABA', 'CDC', 'ADA'], {
        A: 'justdirethings:ferricore_ingot',
        B: 'minecraft:redstone',
        C: 'minecraft:diamond',
        D: 'minecraft:lapis_lazuli'
    })
    event.shaped('buildinggadgets2:gadget_cut_paste', ['ABA', 'CBC', 'ADA'], {
        A: 'justdirethings:ferricore_ingot',
        B: 'minecraft:redstone',
        C: 'minecraft:shears',
        D: 'minecraft:lapis_lazuli'
    })
    event.shaped('buildinggadgets2:gadget_copy_paste', ['ABA', 'CBC', 'ADA'], {
        A: 'justdirethings:ferricore_ingot',
        B: 'minecraft:redstone',
        C: 'justdirethings:coal_t3',
        D: 'minecraft:lapis_lazuli'
    })
    event.shaped('buildinggadgets2:gadget_building', ['ABA', 'CBC', 'ADA'], {
        A: 'justdirethings:ferricore_ingot',
        B: 'minecraft:redstone',
        C: 'minecraft:diamond',
        D: 'minecraft:lapis_lazuli'
    })
    event.shaped('buildinggadgets2:template_manager', ['ABA', 'CBD', 'AEA'], {
        A: 'justdirethings:ferricore_ingot',
        B: 'minecraft:redstone',
        C: 'minecraft:writable_book',
        D: 'minecraft:book',
        E: 'minecraft:lapis_lazuli'
    })
})