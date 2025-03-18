ServerEvents.recipes(event => {
    event.remove({output: "allthemodium:teleport_pad" })
    event.shaped("allthemodium:teleport_pad", [' A ', 'ABA', ' A '], {
        A: "allthemodium:allthemodium_ingot",
        B: "minecraft:ender_eye"
    })
})