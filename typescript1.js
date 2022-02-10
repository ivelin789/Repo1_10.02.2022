var masiv1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var masiv2 = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
function add(a, b) {
    return a + b;
}
for (var i = 0; i < masiv1.length; i++) {
    console.log("sum is" + add(masiv1[i], masiv2[i]));
}
