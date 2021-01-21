// kilometerToMeter converter function

function kilometerToMeter(kiloMeter){
    if(kiloMeter < 0){
        return "Kiloeter cannot be a negative number, please provide a positive number and try again,Thank you!!";
    }else{
        var meter = kiloMeter * 1000;
        return meter;
    }
}
var kiloMeter = 3;
var converTedMeter = kilometerToMeter(kiloMeter);
console.log(converTedMeter);


// budgetCalculator function

function budgetCalculator(watch,phone,laptop){
    if(watch < 0 || phone < 0 || laptop < 0){
        return "You can't by products by taking negative value.Please chose positive value and try again,Thank you!!"
    }else{
        var watchPrice = watch * 50;
        var phonePrice = phone * 100;
        var laptopPrice = laptop * 500;
        var totalBudget = watchPrice + phonePrice + laptopPrice;
        return totalBudget;
    }
}
var watch = 0;
var phone = 2;
var laptop = 2;
var totalPrice = budgetCalculator(watch,phone,laptop);
console.log(totalPrice);

// hotelCost function 

function hotelCost(days){
    var totalCost = 0;
    if(days<=0){
        return "You have to stay minimum 1 or more days,Thank you sir!!";
    }else{
        if(days<=10){
            totalCost = days * 100;
        }else if(days<=20){
            var firstTenDaysCost = 10 * 100;
            var countedDays = days - 10;
            var countedDaysCost = countedDays * 80;
            totalCost = firstTenDaysCost + countedDaysCost;
        }else{
            var firstTenDaysCost = 10 * 100;
            var secondTenDaysCost = 10 * 80;
            var countedDays = days - 20;
            var countedDaysCost = countedDays * 50;
            totalCost = firstTenDaysCost + secondTenDaysCost + countedDaysCost;
        }
        return totalCost;
    }
}
var days = 0;
var totalCosts = hotelCost(days);
console.log(totalCosts);

// megaFriend function

function megaFriend(megaFriendsName){
    if(megaFriendsName.length <=0){
        return "Please provide a valid name";
    }else{
        var megaFriendName = megaFriendsName[0];
        for(var i = 0;i<megaFriendsName.length;i++){
            var friendNames = megaFriendsName[i];
            if(friendNames.length > megaFriendName.length){
                megaFriendName = friendNames;
            }
        }
        return megaFriendName;
    }
}
var megaFriendsName = ["Shipon","Jhon wick"];
var theMegaFriend = megaFriend(megaFriendsName);
console.log(theMegaFriend);
