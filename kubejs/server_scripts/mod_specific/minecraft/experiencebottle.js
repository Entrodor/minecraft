ServerEvents.recipes(event => {
    event.shaped('minecraft:experience_bottle', ['AAA', 'ABA', 'AAA'], {
        A: 'create:experience_nugget',
        B: 'minecraft:glass_bottle'
    })
  })