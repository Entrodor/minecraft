ServerEvents.recipes(event => {
    //duration = time in ticks (default 1200)
    //output_amount = number of items will be generated after each operation
    //output = the item generated after each operation
    //seed = input seed that will determin what crop will be used
    //farmland_tag = the farmland that will be used (#note you will need to use a tag in this option (custom tags can be found in "corsta_custom/custom_tag.js"))
    //crop(duration, output_amount, output, seed, "floabg:farmland_0")
    //example crop(1200, 1, "minecraft:wheat", "minecraft:wheat_seeds", "floabg:farmland_0")
    crop(1200, 1, "minecraft:string", "actuallyadditions:flax_seeds", "floabg:farmland_0")
    crop(1200, 1, "actuallyadditions:coffee_beans", "actuallyadditions:coffee_beans", "floabg:farmland_0")
    crop(1200, 1, "actuallyadditions:canola", "actuallyadditions:canola_seeds", "floabg:farmland_0")
    crop(1200, 1, "actuallyadditions:rice", "actuallyadditions:rice_seeds", "floabg:farmland_0")
    
    function crop(duration, output_amount, output, seed, farmland_tag) {

    event.custom({
      "type": "cloche:cloche",
      "catalyst": [],
      "duration": duration,
      "results": [
        {
          "item": {
            "count": output_amount,
            "id": output
          }
        }
      ],
      "seed": {
        "item": seed
      },
      "soil": {
        "tag": farmland_tag
      }
    })}
})