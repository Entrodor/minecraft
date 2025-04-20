ServerEvents.tags('item', event => {
// Add curios tags to items
    event.add('curios:body', 'mekanism:jetpack')
    event.add('curios:body', 'mekanism:jetpack_armored')
    event.add('curios:necklace', 'forbidden_arcanus:spectral_eye_amulet')
    event.add('curios:quiver', 'supplementaries:quiver')
    event.add('curios:curio', 'justdirethings:pocket_generator')
    event.add('curios:magnet', 'simplemagnets:basicmagnet')
    event.add("curios:magnet", "simplemagnets:advancedmagnet")
    event.add('curios:necklace', "createaddition:electrum_amulet")

// Remove curios tags from items
    event.remove("curios:charm", "simplemagnets:advancedmagnet")
    event.remove("curios:charm", "simplemagnets:basicmagnet")
})