ServerEvents.recipes(event => {
    event.remove({output: 'justdirethings:upgrade_flight'})
    event.shaped('justdirethings:upgrade_flight', ['ABC', 'DED', 'FBA'], {
        A: 'justdirethings:eclipsealloy_ingot',
        B: 'irons_spellbooks:mithril_ingot',
        C: '#iceandfire:dragon_hearts',
        D: 'allthemodium:unobtainium_block',
        E: 'justdirethings:upgrade_blank', 
        F: 'ars_nouveau:wilden_tribute'
    })
})