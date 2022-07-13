const fs = require("fs")
const path = require("path")

const iller = JSON.parse(fs.readFileSync(path.join(process.cwd(),"/iller.txt"),"utf8"))

var donusen = []
iller.forEach(il => {
    var charMap = {Ç:'C',Ö:'O',Ş:'S',İ:'I',I:'i',Ü:'U',Ğ:'G',ç:'c',ö:'o',ş:'s',ı:'i',ü:'u',ğ:'g'};

    var str = il.name
    str_array = str.split('');

    for(var i=0, len = str_array.length; i < len; i++) {
        str_array[i] = charMap[ str_array[i] ] || str_array[i];
    }

    str = str_array.join('');

    var clearStr = str.replace(" ","").replace("-","").replace(/[^a-z0-9-.çöşüğı]/gi,"").toLowerCase();

    try {
        const ilceler = JSON.parse(fs.readFileSync(path.join(process.cwd(),"/veri/"+clearStr+".txt"),"utf8"))
        
        donusen.push({
            ...il,
            ilceler :  [...ilceler]
        })
    } catch (error) {
        console.log(error)
    }
});


fs.writeFile(path.join(process.cwd(),"/donusen.json"),JSON.stringify(donusen),"utf8",()=>{})
console.log(donusen)