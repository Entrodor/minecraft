ServerEvents.recipes(event => {
    event.shapeless('1x mysticalagriculture:inferium_farmland', ['mysticalagriculture:inferium_essence', 'minecraft:farmland'])

    event.shapeless('1x mysticalagriculture:prudentium_farmland', ['mysticalagriculture:prudentium_essence', 'mysticalagriculture:inferium_farmland'])

    event.shapeless('1x mysticalagriculture:tertium_farmland', ['mysticalagriculture:tertium_essence', 'mysticalagriculture:prudentium_farmland'])

    event.shapeless('1x mysticalagriculture:imperium_farmland', ['mysticalagriculture:imperium_essence', 'mysticalagriculture:tertium_farmland'])

    event.shapeless('1x mysticalagriculture:supremium_farmland', ['mysticalagriculture:supremium_essence', 'mysticalagriculture:imperium_farmland'])

    event.shapeless('1x mysticalagradditions:insanium_farmland', ['mysticalagradditions:insanium_essence', 'mysticalagriculture:supremium_farmland'])

    event.shapeless('1x mysticalagriculture:inferium_farmland', ['mysticalagriculture:inferium_essence', 'minecraft:farmland'])

    event.shapeless('1x mysticalagriculture:prudentium_farmland', ['mysticalagriculture:prudentium_essence', 'minecraft:farmland'])

    event.shapeless('1x mysticalagriculture:tertium_farmland', ['mysticalagriculture:tertium_essence', 'minecraft:farmland'])

    event.shapeless('1x mysticalagriculture:imperium_farmland', ['mysticalagriculture:imperium_essence', 'minecraft:farmland'])

    event.shapeless('1x mysticalagriculture:supremium_farmland', ['mysticalagriculture:supremium_essence', 'minecraft:farmland'])

    event.shapeless('1x mysticalagradditions:insanium_farmland', ['mysticalagradditions:insanium_essence', 'minecraft:farmland'])
})