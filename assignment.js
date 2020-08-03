function feetToMile(feet) {
    if (feet == " ") {
        console.log("The feet value is empty!")
    }
    else if (typeof feet == "string") {
        console.log("Invalid feet value!")
    }
    else{
        var mile_value = feet/5280;
        return mile_value.toFixed(3);
    }
}
var mile = feetToMile(feet);
console.log("The required result is :",mile,"mile.");