ServerEvents.recipes(event => {
  alloy("ice", 1000, "allthemodium:vibranium_block", "allthemodium:unobtainium_block", "allthemodium:unobtainium_vibranium_alloy_ingot")
  alloy("ice", 1000, "allthemodium:unobtainium_block", "allthemodium:vibranium_block", "allthemodium:unobtainium_vibranium_alloy_ingot")
  alloy("fire", 1000, "allthemodium:allthemodium_block", "allthemodium:vibranium_block", "allthemodium:vibranium_allthemodium_alloy_ingot")
  alloy("fire", 1000, "allthemodium:vibranium_block", "allthemodium:allthemodium_block", "allthemodium:vibranium_allthemodium_alloy_ingot")
  alloy("lightning", 1000, "allthemodium:allthemodium_block", "allthemodium:unobtainium_block", "allthemodium:unobtainium_allthemodium_alloy_ingot")
  alloy("lightning", 1000, "allthemodium:unobtainium_block", "allthemodium:allthemodium_block", "allthemodium:unobtainium_allthemodium_alloy_ingot")
  function alloy (dragontype, time, input, blood, output) {
    event.custom({
      "type": "iceandfire:dragonforge",
      "dragonType": dragontype,
      "cookTime": time,
      "input": {
        "item": input
      },
      "blood": {
        "item": blood
      },
      "result": {
        "id": output
      }
  })}
})
