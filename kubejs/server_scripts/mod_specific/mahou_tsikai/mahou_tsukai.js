ServerEvents.recipes(event => {
    event.remove({output: "mahoutsukai:dagger"})
    event.remove({output: "mahoutsukai:spell_cloth"})
    event.remove({output: "mahoutsukai:mortar"})
    event.remove({output: "mahoutsukai:pestle"})
    
    event.shapeless(
      Item.of('mahoutsukai:spell_cloth', 1),
      [
        'irons_spellbooks:magic_cloth', 'mahoutsukai:dagger',
      ]
    )
    event.shaped('mahoutsukai:mortar', ['A A', ' B ', '   '], {
        A: 'silentgear:tyrian_steel_ingot',
        B: 'potionsmaster:calcinated_diamond_oresight_powder'
    })
    event.shaped('mahoutsukai:pestle', ['  A', 'BA ', 'CB '], {
        A: 'immersiveengineering:stick_treated',
        B: 'silentgear:tyrian_steel_ingot',
        C: 'potionsmaster:calcinated_diamond_oresight_powder'
    })
})