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
var Material;
(function (Material) {
    Material[Material["Glass"] = 0] = "Glass";
    Material[Material["Plastic"] = 1] = "Plastic";
    Material[Material["Ceramic"] = 2] = "Ceramic";
})(Material || (Material = {}));
