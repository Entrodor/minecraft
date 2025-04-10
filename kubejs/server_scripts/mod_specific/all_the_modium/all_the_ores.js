ServerEvents.recipes(event => {
    const ato = ["copper", "iron", "gold", "diamond", "netherite", "aluminum", "lead", "nickel", "osmium", "platinum", "silver",
        "tin", "uranium", "zinc", "iridium", "steel", "electrum", "bronze", "brass", "constantan", "enderium", "signalum", "lumium"]
    ato.forEach(atomat => {
        event.remove({id: `alltheores:crafting/${atomat}/plate`})
        event.remove({id: `alltheores:crafting/${atomat}/rod`})
        event.remove({id: `alltheores:crafting/${atomat}/gear`})
    })
    const imm = ["copper", "iron", "gold", "aluminum", "lead", "nickel", "silver", "uranium", "steel", "electrum", "constantan"]
    imm.forEach(immmat => {
        event.remove({id: `immersiveengineering:crafting/plate_${immmat}_hammering`})
    })
    const immr = ["iron", "aluminum", "steel"]
    immr.forEach(rimm => {
    event.remove({id: `immersiveengineering:crafting/stick_${rimm}`})
    })

    ato.forEach(rod => { 
        plate(`alltheores:${rod}_plate`, `alltheores:${rod}_rod`)
    
    function plate (input, output) {
                
    event.custom({
        "type": "create:pressing",
        "ingredients": [
          {
            "item": input
          }
        ],
        "results": [
          {
            "item": {
              "id": output
          }
        }]
        })
    }})
})