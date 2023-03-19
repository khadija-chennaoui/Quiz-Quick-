const Role = require('../models/role')

Role.estimatedDocumentCount((err, count) => {
    if (!err && count != 2) {
        Role.findOne({ name: 'Admin' })
            .then((e) => {
                if (!e) {
                    new Role({
                        name: "Admin"
                    })
                        .save(err => {
                            if (err) { console.log("error", err) }
                            console.log("'Admin' added to roles collection");
                        });
                }
            })
            .catch((error) => { console.log(error) })


        Role.findOne({ name: 'Emplyer' })
            .then((e) => {
                if (!e) {
                    new Role({
                        name: "Emplyer"
                    })
                        .save(err => {
                            if (err) { console.log("error", err) }
                            console.log("'Emplyer' added to roles collection");
                        });
                }
            })
            .catch((error) => { console.log(error) })
    }
});