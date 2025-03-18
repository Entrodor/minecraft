LootJS.modifiers(event => {
    const materials = ["aluminum", "lead", "nickel", "osmium", "platinum", "silver", "tin", "uranium", "zinc", "iridium"];
    const gems = ["ruby", "peridot", "sapphire", "cinnabar", "fluorite", "salt"];
    const dusts = ["sulfur"];

    materials.forEach(material => {
        event
            .addBlockModifier(`#c:ores/${material}`)
            .replaceLoot(`#c:raw_materials/${material}`, `alltheores:raw_${material}`, true)
            .replaceLoot(`#c:ores/${material}`, `alltheores:${material}_ore`, true);
    });

    gems.forEach(gem => {
        event
            .addBlockModifier(`#c:ores/${gem}`)
            .replaceLoot(`#c:gems/${gem}`, `alltheores:${gem}`, true)
            .replaceLoot(`#c:ores/${gem}`, `alltheores:${gem}_ore`, true);
    });

    dusts.forEach(dust => {
        event
            .addBlockModifier(`#c:ores/${dust}`)
            .replaceLoot(`#c:dusts/${dust}`, `alltheores:${dust}`, true)
            .replaceLoot(`#c:ores/${dust}`, `alltheores:${dust}_ore`, true);
    });
});