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
})