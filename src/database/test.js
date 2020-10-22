 const Database = require('./db.js'); 
 const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    await saveOrphanage(db, {
        id: 1,
        lat: "-27.222633",
        lng: "-49.6555874",
        name:"Lar das meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        images: [
            "https://images.unsplash.com/photo-1590009617975-ea0733d39167?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1590009617975-ea0733d39167?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"


        ].toString(),

        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",

        opening_hours: "Horário de visitas Das 18h até 8h",

        open_on_weekends: "1"




    })

        


   const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    const orphanage = await db.all('SELECT * FROM orphanages WHERE ID = "1"')
   console.log(orphanage)

    //console.log(await db.run("DELETE FROM orphanages WHERE id = '4' "))

}) 

