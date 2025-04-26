LootJS.modifiers(event => {
    event.addEntityModifier("irons_spellbooks:citadel_keeper").randomChance(0.5).limitCount(1, 1).addLoot("mysticalagriculture:cinder_essence_seeds").killedByPlayer()
    event.addEntityModifier("irons_spellbooks:apothecarist").randomChance(0.01).limitCount(1, 1).addLoot("mysticalagriculture:cinder_essence_seeds").killedByPlayer()
    event.addEntityModifier("irons_spellbooks:pyromancer").randomChance(0.01).limitCount(1, 1).addLoot("mysticalagriculture:arcane_essence_seeds").killedByPlayer()
    event.addEntityModifier("irons_spellbooks:cryomancer").randomChance(0.01).limitCount(1, 1).addLoot("mysticalagriculture:arcane_essence_seeds").killedByPlayer()
    event.addEntityModifier("irons_spellbooks:priest").randomChance(0.01).limitCount(1, 1).addLoot("mysticalagriculture:mithril_seeds").killedByPlayer()
    event.addEntityModifier("irons_spellbooks:archevoker").randomChance(0.01).limitCount(1, 1).addLoot("mysticalagriculture:mithril_seeds").killedByPlayer()

    const cinder = LootEntry.of("mysticalagriculture:cinder_essence_seeds")
        .when(c => c.randomChance(0.1))
        .killedByPlayer()
        .limitCount(1, 1)

    const arcane = LootEntry.of("mysticalagriculture:arcane_essence_seeds")
        .when(c => c.randomChance(0.1))
        .killedByPlayer()
        .limitCount(1, 1)

    const mithril = LootEntry.of("mysticalagriculture:mithril_seeds")
        .when(c => c.randomChance(0.1))
        .killedByPlayer()
        .limitCount(1, 1)

    event.addEntityModifier("irons_spellbooks:dead_king").addAlternativesLoot(cinder, arcane, mithril)
})