const fs = require("fs")
const path = require("path")

const iller = JSON.parse(fs.readFileSync(path.join(process.cwd(),"/donusen.json"),"utf8"))

var converted = []
iller.forEach(il => {
    converted.push({
        il : "-",
        plaka : parseInt(il.plaka),
        name : il.name,
        lat : il.lat,
        lng : il.lng
    })
    il["ilceler"].forEach(i2l => {
        converted.push({
            il : il.name,
            plaka : parseInt(il.plaka),
            name : i2l.name,
            lat : i2l.lat,
            lng : i2l.lng
        })
    });    

    fs.writeFile(path.join(process.cwd(),"/donusen2.json"),JSON.stringify(converted),"utf8",()=>{})
});
