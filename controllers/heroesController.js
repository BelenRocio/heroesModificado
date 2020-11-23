// Require de FS
const fs = require('fs')
// Leyendo y parseando (en array) el contenido de heroes.json
const heroes = JSON.parse(fs.readFileSync(__dirname + '/data/heroes.json', 'utf-8'));

module.exports = {
    detalle : (req,res) => {
        let heroe = heroes.filter(heroe => {
            return heroe.id == req.params.id
        });
        console.log(heroe);
        if(heroe[0] == undefined){
        res.send(​"No encontramos un héroe para mostrarte su biografía"​);
        }else{
        res.send(​`Hola, mi nombre es ${heroe[0].nombre} y soy  ${heroe[0].profesion}`);
        }
    },
    bio : (req,res) => {
        let heroe = heroes.filter(heroe => {
            return heroe.id == req.params.id
        });
        if(heroe[0] == undefined){
            res.send(​"No encontramos un héroe para mostrarte su biografía"​);
            }else if(req.params.ok){
            res.send(​`Heroe ${heroe[0].nombre} \n Reseña ${heroe[0].resenia}`);
            }else{
                res.send(`${heroe[0].nombre} dice: Lamento que no quieras saber de mi!!`);
            }
    }
}