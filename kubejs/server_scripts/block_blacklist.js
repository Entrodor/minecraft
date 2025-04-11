
EntityEvents.spawned("industrialforegoing:infinity_nuke", event => {
    event.cancel()
})

BlockEvents.placed('oritech:low_yield_nuke', event => {
    event.player.tell('Nukes are disabled.')
    event.cancel()
})

BlockEvents.placed('oritech:nuke', event => {
    event.player.tell('Nukes are disabled.')
    event.cancel()
})

