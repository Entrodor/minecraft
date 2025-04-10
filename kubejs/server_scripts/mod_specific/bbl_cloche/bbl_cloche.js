ServerEvents.recipes(event => {
    const cloches = ["cloche", "fixed_speed_upgrade_1", "fixed_speed_upgrade_2", "fixed_speed_upgrade_3", 
        "percentage_speed_upgrade_1", "percentage_speed_upgrade_2", "percentage_speed_upgrade_3", "main_output_upgrade"]

    cloches.forEach(cloche => {
        event.remove({"output": `cloche:${cloche}`})
    });
    event.remove({output: "bblcore:upgrade_base"})
    
    event.shaped('cloche:cloche', ['ABA', 'CDC', 'ABA'], {
        A: 'justdirethings:ferricore_ingot',
        B: '#c:plates/steel',
        C: 'minecraft:water_bucket',
        D: '#floabg:farmland_0'
    })
    event.shaped('bblcore:upgrade_base', [' A ', 'ABA', ' A '], {
        A: 'justdirethings:ferricore_ingot',
        B: '#c:plates/steel'
    })
    event.shaped('cloche:fixed_speed_upgrade_1', ['ABA', 'BCB', 'ADA'], {
        A: 'justdirethings:ferricore_ingot',
        B: 'minecraft:sugar',
        C: 'bblcore:upgrade_base',
        D: 'ars_elemental:lesser_fire_focus'
    })
    event.shaped('cloche:percentage_speed_upgrade_1', ['ABA', 'BCB', 'ADA'], {
        A: 'justdirethings:ferricore_ingot',
        B: 'minecraft:sugar',
        C: 'bblcore:upgrade_base',
        D: 'ars_elemental:lesser_water_focus'
    })
    event.shaped('cloche:fixed_speed_upgrade_2', ['ABA', 'BCB', 'ADA'], {
        A: 'justdirethings:blazegold_ingot',
        B: 'minecraft:sugar',
        C: 'cloche:fixed_speed_upgrade_1',
        D: 'industrialforegoing:speed_addon_tier_1'
    })
    event.shaped('cloche:percentage_speed_upgrade_2', ['ABA', 'BCB', 'ADA'], {
        A: 'justdirethings:blazegold_ingot',
        B: 'minecraft:sugar',
        C: 'cloche:percentage_speed_upgrade_1',
        D: 'industrialforegoing:speed_addon_tier_1'
    })
    event.shaped('cloche:fixed_speed_upgrade_3', ['ABA', 'BCB', 'ADA'], {
        A: 'justdirethings:celestigem',
        B: 'minecraft:sugar',
        C: 'cloche:fixed_speed_upgrade_2',
        D: 'industrialforegoing:speed_addon_tier_2'
    })
    event.shaped('cloche:percentage_speed_upgrade_3', ['ABA', 'BCB', 'ADA'], {
        A: 'justdirethings:celestigem',
        B: 'minecraft:sugar',
        C: 'cloche:percentage_speed_upgrade_2',
        D: 'industrialforegoing:speed_addon_tier_2'
    })
    event.shaped('cloche:main_output_upgrade', [' A ', 'BCB', ' B '], {
        A: '#c:crops',
        B: 'justdirethings:ferricore_ingot',
        C: 'bblcore:upgrade_base'
    })
})