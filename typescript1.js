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
var MATERIALS;
(function (MATERIALS) {
    MATERIALS["Glass"] = "Gla";
    MATERIALS["Plastic"] = "Pla";
    MATERIALS["Ceramic"] = "Cer";
})(MATERIALS || (MATERIALS = {}));
var GlassMug = /** @class */ (function () {
    function GlassMug() {
        this.material = MATERIALS.Glass;
    }
    return GlassMug;
}());
var CeramicMug = /** @class */ (function () {
    function CeramicMug() {
        this.material = MATERIALS.Ceramic;
    }
    return CeramicMug;
}());
var PlasticMug = /** @class */ (function () {
    function PlasticMug() {
        this.material = MATERIALS.Plastic;
    }
    return PlasticMug;
}());
var items = [new CeramicMug(), new PlasticMug(), new GlassMug()];
items.forEach(function (e) {
    e["break"]();
});
var glassMug = items.find(function (e) { return e.material === MATERIALS.Glass; });
glassMug["break"]();
var materials = items.map(function (e) { return e.material; });
console.log(materials);
