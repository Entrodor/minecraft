
ServerEvents.recipes(floabg => {
    
  global.potions_server.forEach(potion => {
      floabg.shapeless(`potionsmaster:calcinated_${potion.id}_oresight_powder`, [
            'potionsmaster:ender_powder',
            'minecraft:glowstone_dust',
            'potionsmaster:tile_mortar',
            'potionsmaster:pestle',
            'minecraft:redstone',
            `${potion.item}`
        ])
    })
})
