// priority: 10
ServerEvents.recipes(event =>{
    // THIS LINE IS IMPORTANT!
    // IT MUST BE THE FIRST LINE IN THE EVENT HANDLER
    addCreateRecipeHandler(event);

    //Changing  Create: Better Motors to use Powah materials.
    event.remove({id: "create_better_motors:blocks/basic_motor"})
    event.remove({id: "create_better_motors:blocks/hardened_motor"})
    event.remove({id: "create_better_motors:blocks/blazing_motor"})
    event.remove({id: "create_better_motors:blocks/niotic_motor"})
    event.remove({id: "create_better_motors:blocks/spirited_motor"})
    event.remove({id: "create_better_motors:blocks/nitro_motor"})

    event.remove({id: "create_better_motors:blocks/mechanical_crafting/upgrades/basic_tier_upgrade"})
    event.remove({id: "create_better_motors:blocks/mechanical_crafting/upgrades/hardened_tier_upgrade"})
    event.remove({id: "create_better_motors:blocks/mechanical_crafting/upgrades/blazing_tier_upgrade"})
    event.remove({id: "create_better_motors:blocks/mechanical_crafting/upgrades/niotic_tier_upgrade"})
    event.remove({id: "create_better_motors:blocks/mechanical_crafting/upgrades/spirited_tier_upgrade"})
    event.remove({id: "create_better_motors:blocks/mechanical_crafting/upgrades/nitro_tier_upgrade"})

    // Motor Recipes
    event.recipes.createMechanicalCrafting(
        "create_better_motors:basic_motor",
        ["  A  "," BSB ","GSRSG"," BCB "],
            {
                A: "minecraft:iron_block",
                C: "create_better_motors:lava_tube",
                B: "powah:uraninite",
                G: "#c:plates/reggarfonite",
                R: "create_better_motors:starter_motor",
                S: "createaddition:gold_spool"
            }
    ).id("basic_motor");
    event.recipes.createMechanicalCrafting(
        "create_better_motors:hardened_motor",
        ["  A  "," BSB ","GSRSG"," BCB "],
            {
                A: "create_better_motors:reggarfonite_block",
                C: "create_better_motors:lava_tube",
                B: "powah:steel_energized",
                G: "#c:plates/reggarfonite",
                R: "create_better_motors:basic_motor",
                S: "createaddition:gold_spool"
            }
    ).id("hardened_motor");
    event.recipes.createMechanicalCrafting(
        "create_better_motors:blazing_motor",
        ["  A  "," BSB ","GSRSG"," BCB "],
            {
                A: "minecraft:gold_block",
                C: "create_better_motors:lava_tube",
                B: "powah:crystal_blazing",
                G: "#c:plates/reggarfonite",
                R: "create_better_motors:hardened_motor",
                S: "createaddition:gold_spool"
            }
    ).id("blazing_motor");
    event.recipes.createMechanicalCrafting(
        "create_better_motors:niotic_motor",
        ["  A  "," BSB ","GSRSG"," BCB "],
            {
                A: "minecraft:netherite_ingot",
                C: "create_better_motors:lava_tube",
                B: "powah:crystal_niotic",
                G: "#c:plates/reggarfonite",
                R: "create_better_motors:blazing_motor",
                S: "createaddition:gold_spool"
            }
    ).id("niotic_motor");
    event.recipes.createMechanicalCrafting(
        "create_better_motors:spirited_motor",
        ["  A  "," BSB ","GSRSG"," BCB "],
            {
                A: "minecraft:dragon_head",
                C: "create_better_motors:lava_tube",
                B: "powah:crystal_spirited",
                G: "#c:plates/reggarfonite",
                R: "create_better_motors:niotic_motor",
                S: "createaddition:gold_spool"
            }
    ).id("spirited_motor");
    event.recipes.createMechanicalCrafting(
        "create_better_motors:nitro_motor",
        ["  A  "," BSB ","GSRSG"," BCB "],
            {
                A: "minecraft:nether_star",
                C: "create_better_motors:lava_tube",
                B: "powah:crystal_nitro",
                G: "#c:plates/reggarfonite",
                R: "create_better_motors:spirited_motor",
                S: "createaddition:gold_spool"
            }
    ).id("nitro_motor");

    //Motor Upgrade Item recipes
    event.recipes.createMechanicalCrafting(
        "create_better_motors:basic_tier_upgrade",
        ["  A  "," BSB ","GS SG"," BCB "],
            {
                A: "minecraft:iron_block",
                C: "create_better_motors:lava_tube",
                B: "powah:uraninite",
                G: "#c:plates/reggarfonite",
                S: "createaddition:gold_spool"
            }
    ).id("basic_motor_upgrade");
    event.recipes.createMechanicalCrafting(
        "create_better_motors:hardened_tier_upgrade",
        ["  A  "," BSB ","GS SG"," BCB "],
            {
                A: "create_better_motors:reggarfonite_block",
                C: "create_better_motors:lava_tube",
                B: "powah:steel_energized",
                G: "#c:plates/reggarfonite",
                S: "createaddition:gold_spool"
            }
    ).id("hardened_motor_upgrade");
    event.recipes.createMechanicalCrafting(
        "create_better_motors:blazing_tier_upgrade",
        ["  A  "," BSB ","GS SG"," BCB "],
            {
                A: "minecraft:gold_block",
                C: "create_better_motors:lava_tube",
                B: "powah:crystal_blazing",
                G: "#c:plates/reggarfonite",
                S: "createaddition:gold_spool"
            }
    ).id("blazing_motor_upgrade");
    event.recipes.createMechanicalCrafting(
        "create_better_motors:niotic_tier_upgrade",
        ["  A  "," BSB ","GS SG"," BCB "],
            {
                A: "minecraft:netherite_ingot",
                C: "create_better_motors:lava_tube",
                B: "powah:crystal_niotic",
                G: "#c:plates/reggarfonite",
                S: "createaddition:gold_spool"
            }
    ).id("niotic_motor_upgrade");
    event.recipes.createMechanicalCrafting(
        "create_better_motors:spirited_tier_upgrade",
        ["  A  "," BSB ","GS SG"," BCB "],
            {
                A: "minecraft:dragon_head",
                C: "create_better_motors:lava_tube",
                B: "powah:crystal_spirited",
                G: "#c:plates/reggarfonite",
                S: "createaddition:gold_spool"
            }
    ).id("spirited_motor_upgrade");
    event.recipes.createMechanicalCrafting(
        "create_better_motors:nitro_tier_upgrade",
        ["  A  "," BSB ","GS SG"," BCB "],
            {
                A: "minecraft:nether_star",
                C: "create_better_motors:lava_tube",
                B: "powah:crystal_nitro",
                G: "#c:plates/reggarfonite",
                S: "createaddition:gold_spool"
            }
    ).id("nitro_motor_upgrade");

    // THIS LINE IS ALSO IMPORTANT!
    // IT MUST BE THE LAST LINE IN THE EVENT HANDLER
    event.recipes.create.finalize();
})
