ItemEvents.modifyTooltips(event => {
// Mekanism Turrets Tooltips
    event.add("mekanism_turrets:advanced_laser_turret", {shift: false}, Text.white('Hold Shift to see Turret stats'))
	event.add("mekanism_turrets:advanced_laser_turret", {shift: true}, Text.white('Range: Medium'))
    event.add("mekanism_turrets:advanced_laser_turret", {shift: true}, Text.white('Damage: Medium'))
    event.add("mekanism_turrets:advanced_laser_turret", {shift: true}, Text.white('Speed: Medium'))

    event.add("mekanism_turrets:elite_laser_turret", {shift: false}, Text.white('Hold Shift to see Turret stats'))
    event.add("mekanism_turrets:elite_laser_turret", {shift: true}, Text.white('Range: Short'))
    event.add("mekanism_turrets:elite_laser_turret", {shift: true}, Text.white('Damage: Low'))
    event.add("mekanism_turrets:elite_laser_turret", {shift: true}, Text.white('Speed: High'))

    event.add("mekanism_turrets:ultimate_laser_turret", {shift: false}, Text.white('Hold Shift to see Turret stats'))
    event.add("mekanism_turrets:ultimate_laser_turret", {shift: true}, Text.white('Range: High'))
    event.add("mekanism_turrets:ultimate_laser_turret", {shift: true}, Text.white('Damage: High'))
    event.add("mekanism_turrets:ultimate_laser_turret", {shift: true}, Text.white('Speed: Low'))

//Irons Seeds
    event.add("mysticalagriculture:cinder_essence_seeds", {shift: false}, Text.aqua('Hold Shift to see Mob Drops'))
    event.add("mysticalagriculture:cinder_essence_seeds", {shift: true}, Text.gray('Ancient Knight'))
    event.add("mysticalagriculture:cinder_essence_seeds", {shift: true}, Text.yellow('Apothecarist'))
    event.add("mysticalagriculture:cinder_essence_seeds", {shift: true}, Text.darkRed('Dead King'))

    event.add("mysticalagriculture:arcane_essence_seeds", {shift: false}, Text.aqua('Hold Shift to see Mob Drops'))
    event.add("mysticalagriculture:arcane_essence_seeds", {shift: true}, Text.red('Pyromance'))
    event.add("mysticalagriculture:arcane_essence_seeds", {shift: true}, Text.darkAqua('Cyromancer'))
    event.add("mysticalagriculture:arcane_essence_seeds", {shift: true}, Text.darkRed('Dead King'))

    event.add("mysticalagriculture:mithril_seeds", {shift: false}, Text.aqua('Hold Shift to see Mob Drops'))
    event.add("mysticalagriculture:mithril_seeds", {shift: true}, Text.darkGreen('Acrhevoker'))
    event.add("mysticalagriculture:mithril_seeds", {shift: true}, Text.gold('Priest'))
    event.add("mysticalagriculture:mithril_seeds", {shift: true}, Text.darkRed('Dead King'))
})