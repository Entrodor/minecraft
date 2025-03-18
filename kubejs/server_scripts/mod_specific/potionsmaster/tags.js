
ServerEvents.tags('item', floabg => {
  //Potionsmaster
  global.potions_server.forEach(potion => {
    floabg.add(`potionsmaster:calcinated/${potion.id}`, `potionsmaster:calcinated_${potion.id}_oresight_powder`)
  })
  
})
