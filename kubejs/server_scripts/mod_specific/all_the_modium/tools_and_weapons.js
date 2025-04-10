ServerEvents.recipes(event => {
function enchanting(output, pedestalItems, reagent, data, source, id){
  let recipe = {
      "type": "ars_nouveau:enchanting_apparatus",
      "keepNbtOfReagent": data,
      "pedestalItems": [],
      "reagent": reagent,
      "result": {"count": output.count || 1, "id": output.item}, 
      "sourceCost": source
  };
  pedestalItems.forEach(input => {
    let ingredients = {}
      ingredients.item = input.item;
      recipe.pedestalItems.push(ingredients);
    }); event.custom(recipe).id(`kubejs:enchanting_apparatus/${id}`);
}
  enchanting({item: 'allthemodium:alloy_sword'}, [
    {item: 'allthemodium:unobtainium_allthemodium_alloy_ingot'},
    {item: 'allthemodium:unobtainium_allthemodium_alloy_ingot'},
    {item: 'allthemodium:unobtainium_vibranium_alloy_ingot'},
    {item: 'allthemodium:unobtainium_vibranium_alloy_ingot'},
    {item: 'allthemodium:vibranium_allthemodium_alloy_ingot'},
    {item: 'allthemodium:vibranium_allthemodium_alloy_ingot'},
    {item: 'allthemodium:allthemodium_rod'},
    {item: 'allthemodium:allthemodium_rod'}],
  {item: 'allthemodium:unobtainium_sword'},true, 10000,'alloy_sword')

  enchanting({item: 'allthemodium:alloy_pick'}, [
    {item: 'allthemodium:unobtainium_allthemodium_alloy_ingot'},
    {item: 'allthemodium:unobtainium_allthemodium_alloy_ingot'},
    {item: 'allthemodium:unobtainium_vibranium_alloy_ingot'},
    {item: 'allthemodium:unobtainium_vibranium_alloy_ingot'},
    {item: 'allthemodium:vibranium_allthemodium_alloy_ingot'},
    {item: 'allthemodium:vibranium_allthemodium_alloy_ingot'},
    {item: 'allthemodium:allthemodium_rod'},
    {item: 'allthemodium:allthemodium_rod'}],
  {item: 'allthemodium:unobtainium_pickaxe'},true, 10000,'alloy_pick')

  enchanting({item: 'allthemodium:alloy_axe'}, [
    {item: 'allthemodium:unobtainium_allthemodium_alloy_ingot'},
    {item: 'allthemodium:unobtainium_allthemodium_alloy_ingot'},
    {item: 'allthemodium:unobtainium_vibranium_alloy_ingot'},
    {item: 'allthemodium:unobtainium_vibranium_alloy_ingot'},
    {item: 'allthemodium:vibranium_allthemodium_alloy_ingot'},
    {item: 'allthemodium:vibranium_allthemodium_alloy_ingot'},
    {item: 'allthemodium:allthemodium_rod'},
    {item: 'allthemodium:allthemodium_rod'}],
  {item: 'allthemodium:unobtainium_axe'},true, 10000,'alloy_axe')

  enchanting({item: 'allthemodium:alloy_shovel'}, [
    {item: 'allthemodium:unobtainium_allthemodium_alloy_ingot'},
    {item: 'allthemodium:unobtainium_allthemodium_alloy_ingot'},
    {item: 'allthemodium:unobtainium_vibranium_alloy_ingot'},
    {item: 'allthemodium:unobtainium_vibranium_alloy_ingot'},
    {item: 'allthemodium:vibranium_allthemodium_alloy_ingot'},
    {item: 'allthemodium:vibranium_allthemodium_alloy_ingot'},
    {item: 'allthemodium:allthemodium_rod'},
    {item: 'allthemodium:allthemodium_rod'}],
  {item: 'allthemodium:unobtainium_shovel'},true, 10000,'alloy_shovel')

  enchanting({item: 'allthemodium:alloy_paxel'}, [
    {item: 'allthemodium:piglich_heart'},
    {item: 'allthemodium:piglich_heart'},
    {item: 'allthemodium:piglich_heart'},
    {item: 'allthemodium:piglich_heart'},
    {item: 'allthemodium:alloy_sword'},
    {item: 'allthemodium:alloy_pick'},
    {item: 'allthemodium:alloy_shovel'},
    {item: 'allthemodium:alloy_axe'}],
  {item: 'justdirethings:eclipsealloy_paxel'},true, 20000,'alloy_paxel')
})