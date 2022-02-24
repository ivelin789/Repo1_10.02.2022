/*var masiv1 = [1,2,3,4,5,6,7,8,9,10]
var masiv2 = [2,3,4,5,6,7,8,9,10,11]


function add(a, b){
    return a + b;
}

function add(a, b){
    return a - b;
}
function add(a, b){
    return a * b;
}
function add(a, b){
    return a / b;
}


for(var i = 0; i < masiv1.length; i++) {
    console.log("sum is" + add(masiv1[i], masiv2[i]))
}
 */

enum MATERIALS {
    Glass = "Gla",
    Plastic = "Pla",
    Ceramic = "Cer"
}

interface Breakable {
    material: MATERIALS;
    break: () => {}
}

class GlassMug implements Breakable {
    material: MATERIALS;
    break: () => {}
    constructor() {
    this.material = MATERIALS.Glass
    }
}

class CeramicMug implements Breakable {
    material: MATERIALS;
    break: () => {}
    constructor() {
    this.material = MATERIALS.Ceramic
    }
}

class PlasticMug implements Breakable {
    material: MATERIALS;
    break: () => {}
    constructor () {
    this.material = MATERIALS.Plastic
    }
}

let items = [new CeramicMug(), new PlasticMug(), new GlassMug()];

items.forEach(e => {
    e.break();
});

const glassMug = items.find(e => e.material === MATERIALS.Glass);
glassMug.break();

const materials = items.map(e => e.material);
console.log(materials);