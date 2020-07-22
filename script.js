var today = new Date();

var month = today.getMonth();
var hours = today.getHours();
var weekday = today.getDay();


//night
if (hours <= 5 || hours >= 23) {
    let nightOptions = [];
    var sentence = nightOptions[Math.floor(Math.random() * nightOptions.length)];
} else {
    //school
    if (month >= 10 || month <= 5) {
        //morning
        if (hours > 5 && hours <= 8) {
            let schoolMorningOptions = [];
            var sentence = schoolMorningOptions[Math.floor(Math.random() * schoolMorningOptions.length)];
        } else if (hours > 8 && hours <= 15) {
        //school day
            let schooldayOptions = [];
            var sentence = schooldayOptions[Math.floor(Math.random() * schooldayOptions.length)];
        } else if (hours > 15 && hours < 23) {
        //afterschool
            let afterschoolOptions = [];
            var sentence = afterschoolOptions[Math.floor(Math.random() * afterschoolOptions.length)];
        }
    } else {
    //summer
        //morning
        if (hours > 5 && hours <= 11) {
            let summerMorningOptions = [];
            var sentence = summerMorningOptions[Math.floor(Math.random() * summerMorningOptions.length)];
        } else if (hours > 11 && hours <= 6) {
        //day
            let summerDayOptions = [];
            var sentence = summerDayOptions[Math.floor(Math.random() * summerDayOptions.length)];
        } else if (hours > 8 && hours < 23) {
        //evening/night
            let summerEveOptions = [];
            var sentence = summerEveOptions[Math.floor(Math.random() * summerEveOptions.length)];
        }
    }
}


