ServerEvents.recipes(event => {
    const crush = [
        {input: "silentgear:blaze_gold_ingot", output: "silentgear:blaze_gold_dust"},
        {input: "silentgear:azure_silver_ingot", output: "silentgear:azure_silver_dust"},
        {input: "silentgear:crimson_steel_ingot",output: "silentgear:crimson_steel_dust"},
        {input: "minecraft:shulker_shell",output: "silentgear:crushed_shulker_shell"},
        {input: "silentgear:crimson_iron_ingot",output: "silentgear:crimson_iron_dust"},
        {input: "silentgear:tyrian_steel_ingot",output: "silentgear:tyrian_steel_dust"},
        {input: "silentgear:azure_electrum_ingot",output: "silentgear:azure_electrum_dust"}
    ]
    crush.forEach(material => {
        event.custom({
            "type":"mekanism:crushing",
            "input":{
                "count":1,
                "item":material.input
            },
            "output":{
                "count":1,
                "id":material.output
            }
        })
    });
    event.custom({
        "type":"mekanism:enriching",
        "input":{
            "count":4,
            "tag":"c:dusts/wood"
        },
        "output":{
            "count":1,
            "id":"silentgear:template_board"
        }
    })
})