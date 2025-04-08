ServerEvents.recipes(event => { 

    const gadget = ["silk", "void_junk", "magnet", "size_1", "size_2", "size_3", "light_placer", "freezing", "fortune_1", "fortune_2", "fortune_3", "range_1", "range_2", "range_3",
                    "battery_1", "battery_2", "battery_3", "efficiency_1", "efficiency_2", "efficiency_3", "efficiency_4", "efficiency_5", "empty"]
    gadget.forEach(mining => {
      event.remove({"output": `mininggadgets:upgrade_${mining}`})
    })
    event.remove({id: 'mininggadgets:modificationtable'})
    event.remove({id: 'mininggadgets:mininggadget_simple'})
    event.remove({id: 'mininggadgets:mininggadget_fancy'})
    event.remove({id: 'mininggadgets:mininggadget'})

    event.shaped('mininggadgets:upgrade_silk', ['ABA', 'CDC', 'AAA'], {
        A: 'minecraft:slime_ball',
        B: 'minecraft:golden_apple',
        C: 'justdirethings:blazegold_ingot',
        D: 'mininggadgets:upgrade_empty'
    })

    event.shaped('mininggadgets:upgrade_void_junk', ['ABA', 'CDE', 'ABA'], {
        A: 'justdirethings:coal_t3',
        B: 'minecraft:obsidian',
        C: 'minecraft:ender_pearl',
        D: 'mininggadgets:upgrade_empty',
        E: 'minecraft:ender_eye'
    })

    event.shaped('mininggadgets:upgrade_magnet', ['ABA', 'CDC', 'ACA'], {
        A: 'justdirethings:blazegold_ingot',
        B: 'simplemagnets:advancedmagnet',
        C: 'minecraft:redstone',
        D: 'mininggadgets:upgrade_empty'
    })
    
    event.shaped('mininggadgets:upgrade_size_1', ['ABA', 'CDC', 'AEA'], {
        A: 'justdirethings:ferricore_ingot',
        B: 'minecraft:gold_block',
        C: 'minecraft:ender_pearl',
        D: 'mininggadgets:upgrade_empty',
        E: 'justdirethings:ferricore_pickaxe'
    })

    event.shaped('mininggadgets:upgrade_size_2', ['ABA', 'CDC', 'AEA'], {
        A: 'justdirethings:blazegold_ingot',
        B: 'minecraft:diamond_block',
        C: 'minecraft:ender_pearl',
        D: 'mininggadgets:upgrade_size_1',
        E: 'justdirethings:ferricore_pickaxe'
    })

    event.shaped('mininggadgets:upgrade_size_3', ['ABA', 'CDC', 'AEA'], {
        A: 'justdirethings:celestigem',
        B: 'minecraft:netherite_block',
        C: 'minecraft:ender_pearl',
        D: 'mininggadgets:upgrade_size_2',
        E: 'justdirethings:celestigem_pickaxe'
    })

    event.shaped('mininggadgets:upgrade_light_placer', ['ABC', 'DED', 'FBG'], {
        A: 'minecraft:lantern',
        B: 'minecraft:glowstone',
        C: 'minecraft:soul_lantern',
        D: 'minecraft:redstone_lamp',
        E: 'mininggadgets:upgrade_empty',
        F: 'torchmaster:megatorch',
        G: 'minecraft:copper_bulb'
    })

    event.shaped('mininggadgets:upgrade_freezing', ['ABA', 'BCB', 'ABA'], {
        A: 'minecraft:ice',
        B: 'minecraft:snow_block',
        C: 'mininggadgets:upgrade_empty'
    })  
    
    event.shaped('mininggadgets:upgrade_fortune_1', ['ABA', 'ACA', 'ADA'], {
        A: 'minecraft:lapis_block',        
        B: 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:fortune":1}}]',
        C: 'mininggadgets:upgrade_empty',
        D: 'minecraft:iron_block'
    })  
    
        
    event.shaped('mininggadgets:upgrade_fortune_1', ['ABA', 'ACA', 'ADA'], {
        A: 'minecraft:lapis_block',        
        B: 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:fortune":2}}]',
        C: 'mininggadgets:upgrade_fortune_1',
        D: 'minecraft:gold_block'
    })  

        
    event.shaped('mininggadgets:upgrade_fortune_1', ['ABA', 'ACA', 'ADA'], {
        A: 'minecraft:lapis_block',        
        B: 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:fortune":3}}]',
        C: 'mininggadgets:upgrade_fortune_2',
        D: 'minecraft:diamond_block'
    })  

    event.shaped('mininggadgets:upgrade_range_1', ['ABA', 'CDC', 'ABA'], {
        A: 'minecraft:lapis_lazuli',        
        B: 'minecraft:glass',
        C: 'justdirethings:coal_t1',
        D: 'mininggadgets:upgrade_empty'
    }) 

    event.shaped('mininggadgets:upgrade_range_2', ['ABA', 'CDC', 'ABA'], {
        A: 'minecraft:lapis_lazuli',        
        B: 'minecraft:glass',
        C: 'justdirethings:coal_t2',
        D: 'mininggadgets:upgrade_range_1'
    }) 

    event.shaped('mininggadgets:upgrade_range_3', ['ABA', 'CDC', 'ABA'], {
        A: 'minecraft:lapis_lazuli',        
        B: 'minecraft:glass',
        C: 'justdirethings:coal_t3',
        D: 'mininggadgets:upgrade_range_2'
    })

    event.shaped('mininggadgets:upgrade_battery_1', ['ABA', 'CDC', 'ABA'], {
        A: 'minecraft:redstone',        
        B: 'minecraft:quartz',
        C: 'ironjetpacks:cell[ironjetpacks:jetpack_id="ironjetpacks:iron"]',
        D: 'mininggadgets:upgrade_empty'
    }) 

    event.shaped('mininggadgets:upgrade_battery_2', ['ABA', 'CDC', 'ABA'], {
        A: 'minecraft:redstone',        
        B: 'minecraft:quartz',
        C: 'ironjetpacks:cell[ironjetpacks:jetpack_id="ironjetpacks:gold"]',
        D: 'mininggadgets:upgrade_battery_1'
    }) 

    event.shaped('mininggadgets:upgrade_battery_3', ['ABA', 'CDC', 'ABA'], {
        A: 'minecraft:redstone_block',        
        B: 'minecraft:quartz',
        C: 'ironjetpacks:cell[ironjetpacks:jetpack_id="ironjetpacks:diamond"]',
        D: 'mininggadgets:upgrade_battery_2'
    }) 

    event.shaped('mininggadgets:upgrade_efficiency_1', ['ABA', 'ACA', 'AAA'], {
        A: 'minecraft:redstone',        
        B: 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:efficiency":1}}]',
        C: 'mininggadgets:upgrade_empty'
    }) 

    event.shaped('mininggadgets:upgrade_efficiency_2', ['ABA', 'ACA', 'AAA'], {
        A: 'minecraft:redstone',        
        B: 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:efficiency":2}}]',
        C: 'mininggadgets:upgrade_efficiency_1'
    }) 

    event.shaped('mininggadgets:upgrade_efficiency_3', ['ABA', 'ACA', 'AAA'], {
        A: 'minecraft:redstone',        
        B: 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:efficiency":3}}]',
        C: 'mininggadgets:upgrade_efficiency_2'
    }) 

    event.shaped('mininggadgets:upgrade_efficiency_4', ['ABA', 'ACA', 'AAA'], {
        A: 'minecraft:redstone',        
        B: 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:efficiency":4}}]',
        C: 'mininggadgets:upgrade_efficiency_3'
    }) 

    event.shaped('mininggadgets:upgrade_efficiency_5', ['ABA', 'ACA', 'AAA'], {
        A: 'minecraft:redstone',        
        B: 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:efficiency":5}}]',
        C: 'mininggadgets:upgrade_efficiency_4'
    }) 

    event.shaped('mininggadgets:upgrade_empty', ['ABA', 'CDC', 'ABA'], {
        A: 'minecraft:redstone',        
        B: 'minecraft:lapis_lazuli',
        C: 'minecraft:diamond',
        D: 'justdirethings:upgrade_blank'
    }) 

    event.shaped('mininggadgets:modificationtable', ['AAA', 'BCB', 'AAA'], {
        A: 'justdirethings:ferricore_ingot',        
        B: 'minecraft:redstone',
        C: 'mininggadgets:upgrade_empty'
    }) 

    event.shaped('mininggadgets:mininggadget_simple', ['ABC', 'ADE', 'ABB'], {
        A: 'minecraft:diamond',        
        B: 'justdirethings:ferricore_ingot',
        C: 'justdirethings:blazegold_ingot',
        D: 'mininggadgets:upgrade_empty',
        E: 'minecraft:redstone'
    }) 

    event.shaped('mininggadgets:mininggadget_fancy', ['ABB', 'ADE', 'ABC'], {
        A: 'minecraft:diamond',        
        B: 'justdirethings:ferricore_ingot',
        C: 'justdirethings:blazegold_ingot',
        D: 'mininggadgets:upgrade_empty',
        E: 'minecraft:redstone'
    }) 

    event.shaped('mininggadgets:mininggadget', ['ABC', 'ADE', 'ABC'], {
        A: 'minecraft:diamond',        
        B: 'justdirethings:ferricore_ingot',
        C: 'justdirethings:blazegold_ingot',
        D: 'mininggadgets:upgrade_empty',
        E: 'minecraft:redstone'
    }) 
})