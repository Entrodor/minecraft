ServerEvents.recipes(event => {
    event.remove({"output": "create_d2d:diamond_shard"})
    event.remove({"output": "create_d2d:coal_piece"})
    event.remove({"output":"create_d2d:lapis_lazuli_shard"})
})