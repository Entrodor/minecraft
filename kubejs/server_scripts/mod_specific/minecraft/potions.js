MoreJS.registerPotionBrewing(event => {
// seems like MoreJS is broken, but this'll stay here for future use when morejs fixes their potion events
    event.removePotionBrewing({
        ingredient: "minecraft:popped_chorus_fruit",
        input: "minecraft:levitation",
        output: "apothic_attributes:flying",
    })
})