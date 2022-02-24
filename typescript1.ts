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
    type.mat = "Glass"
    }
}

class CeramicMug implements Breakable {
    material: MATERIALS;
    break: () => {}
    constructor() {
    type.mat = "Ceramic"
    }
}

class PlasticMug implements Breakable {
    material: MATERIALS;
    break: () => {}
    constructor () {
    type.mat = "Plastic"
    }
}

