ServerEvents.recipes(event => {
    event.shapeless('1x forbidden_arcanus:magical_farmland', ['forbidden_arcanus:arcane_bone_meal', 'minecraft:farmland'])
    event.shapeless('4x forbidden_arcanus:fungyss', ['forbidden_arcanus:fungyss_block'])
    event.shaped('forbidden_arcanus:fungyss_block', ['AA ', 'AA ', '   '], {
        A: 'forbidden_arcanus:fungyss'
      })
})