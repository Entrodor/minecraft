// Listen to player login event
PlayerEvents.loggedIn(event => {
    // Check if player doesn't have "starting_items" stage yet
    if (!event.player.stages.has('starting_items')) {
      // Add the stage
      event.player.stages.add('starting_items')
      // Give some items to player
      //event.server.runCommandSilent(`clear ${event.entity.username}`)
      event.server.runCommandSilent(`give ${event.entity.username} stone_sword`)
      event.server.runCommandSilent(`give ${event.entity.username} stone_pickaxe`)
      event.server.runCommandSilent(`give ${event.entity.username} stone_axe`)
      event.server.runCommandSilent(`give ${event.entity.username} cooked_beef 16`)
      event.server.runCommandSilent(`give ${event.entity.username} sophisticatedbackpacks:backpack`)
      event.server.runCommandSilent(`give ${event.entity.username} doggytalents:starter_bundle`)
      event.server.runCommandSilent(`give ${event.entity.username} touhou_little_maid:smart_slab_init`)
  }
})