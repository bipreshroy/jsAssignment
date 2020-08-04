//function for feet to mile calculation.
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
var mile = feetToMile(476887);
console.log("The required result is :",mile,"mile.");

//function for wood calculation.
function woodCalculator(item){
    if (item[0] == " ") {
        console.log("insert a valid number of chair!");
    }
    else if(typeof item[0] == "string"){
        console.log("Invalid number of chair !");
    }
    else if (item[1] == " ") {
        console.log("insert a valid number of table!");
    }
    else if(typeof item[1] == "string"){
        console.log("Invalid number of table !");
    }
    else if(item[2] == " ") {
        console.log("insert a valid number of bed!");
    }
    else if(typeof item[2] == "string"){
        console.log("Invalid number of bed !");
    }
    else{
        var chairWood = item[0]*1;
        var tableWood = item[1]*3;
        var bedWood = item[2]*5;
        var sumWood = chairWood + tableWood + bedWood;
        return sumWood;
    }
}
var numberOfWood = [23,12,3];
var  totalWood = woodCalculator(numberOfWood);
console.log("The total needed wood is : ",totalWood,"cubic feet.");

//function for brick calculation assignment.
function brickCalculator(buildingFloor) {
    var floorNumber = buildingFloor;
    var heightOfFloor = 0;
    if(floorNumber >= 1 && floorNumber <= 10){
        heightOfFloor = floorNumber * 15;
    }else if (floorNumber >= 11 &&  floorNumber <= 20) {
        heightOfFloor = (10 * 15) + ((floorNumber-10) * 12);
    }
    else{
        heightOfFloor = (10 * 15) + (10 * 12) + ((floorNumber-20) * 10);
    }
    var bricksNumber = heightOfFloor * 1000;
    return bricksNumber;
}
var totalBricks = brickCalculator(27);
console.log("The total number of bricks are :",totalBricks);

//tinyFriend function.
function tinyFriend(friendsName) {
    var minName = friendsName[0];
    for (var i = 0; i < friendsName.length; i++) {
        var nameElement = friendsName[i];
        if(nameElement.length < minName.length){
            minName = nameElement;
        }
    }
    return minName;
}
var friendName = ["karim","rahim","jon","mubarak","jony"];
var tinyName = tinyFriend(friendName);
console.log(tinyName,"is the smallest friend name.");
