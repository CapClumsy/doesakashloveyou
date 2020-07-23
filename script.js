var today = new Date();

var month = today.getMonth();
var hours = today.getHours();
var weekday = today.getDay();

//night
if (hours <= 5 || hours >= 23) {
    let nightOptions = [
        {
            "sentence": "Akash is happily sleeping because he's dreaming about you...",
            "img": "pictures/night/dream.jpg"
        },
        {
            "sentence": "Akash is awake thinking about how wonderful you were today...",
            "img": "pictures/night/reflection.jpg"
        },
        {
            "sentence": "Akash wants to cuddle you to sleep if you're having trouble...",
            "img": "pictures/night/cuddle.jpg"
        },
        {
            "sentence": "Akash is hoping you can get back to sleep and sleep well for the rest of the night...",
            "img": "pictures/night/sleep.jpg"
        }
    ];
    var option = nightOptions[Math.floor(Math.random() * nightOptions.length)];
} else {
    //school
    if (month >= 10 || month <= 5) {
        //weekday
        if (weekday >= 1 && weekday <= 5) {
            //school morning
            if (hours > 5 && hours <= 8) {
                let schoolMorningOptions = [
                    {
                        "sentence": "Akash is hoping that you've slept soooooo well...",
                        "img": "pictures/school/week/morning/sleep.jpg"
                    },
                    {
                        "sentence": "Akash can't wait to get to school and see you before it starts...",
                        "img": "pictures/school/week/morning/school.jpg"
                    },
                    {
                        "sentence": "Akash hopes that you're having a great morning, eating a breakfast that you like, and getting ready for a great day at school...",
                        "img": "pictures/school/week/morning/preparing.jpg"
                    }
                ];
                var option = schoolMorningOptions[Math.floor(Math.random() * schoolMorningOptions.length)];
            } else if (hours > 8 && hours <= 15) {
            //schoolday
                let schooldayOptions = [
                    {
                        "sentence": "Akash hopes that you're having a great time in your class...",
                        "img": "pictures/school/week/day/class.jpg"
                    },
                    {
                        "sentence": "Akash can't wait to see you at lunch or after school...",
                        "img": "pictures/school/week/day/see.jpg"
                    },
                    {
                        "sentence": "Akash is thinking and daydreaming about you in his class...",
                        "img": "pictures/school/week/day/daydream.jpg"
                    }
                ];
                var option = schooldayOptions[Math.floor(Math.random() * schooldayOptions.length)];
            } else if (hours > 15 && hours < 23) {
            //afterschool
                let afterschoolOptions = [
                    {
                        "sentence": "Akash is hoping that you've just had such a nice day at school...",
                        "img": "pictures/school/week/afternoon/day.jpg"
                    },
                    {
                        "sentence": "Akash is hoping that you're finding this afternoon relaxing after being at school...",
                        "img": "pictures/school/week/afternoon/afternoon.jpg"
                    },
                    {
                        "sentence": "Akash is thinking about how much you've helped him throughout the day and how wonderful you've been to him...",
                        "img": "pictures/school/week/afternoon/thinking.jpg"
                    }
                ];
                var option = afterschoolOptions[Math.floor(Math.random() * afterschoolOptions.length)];
            }
        } else {
        //weekend
            //morning
            if (hours > 5 && hours <= 11) {
                let weekendMorningOptions = [
                    {
                        "sentence": "Akash is hoping that you've slept in a lot to make up for the sleep you deserve that the school has taken away from you...",
                        "img": "pictures/school/weekend/morning/sleep.jpg"
                    },
                    {
                        "sentence": "Akash is hoping that your day is going to be wonderful...",
                        "img": "pictures/school/weekend/morning/day.jpg"
                    },
                    {
                        "sentence": "Akash is wishing he could wake up next to you every day...",
                        "img": "pictures/school/weekend/morning/next.jpg"
                    }
                ];
                var option = weekendMorningOptions[Math.floor(Math.random() * weekendMorningOptions.length)];
            } else if (hours > 11 && hours <= 18) {
            //day
                let weekendDayOptions = [
                    {
                        "sentence": "Akash is hoping that you are enjoying your free time...",
                        "img": "pictures/school/weekend/day/free.jpg"
                    },
                    {
                        "sentence": "Akash is wondering what you're doing right now... maybe making some awesome music?",
                        "img": "pictures/school/weekend/day/music.jpg"
                    },
                    {
                        "sentence": "Akash is thinking about how he can't wait to see you again and cuddle you and love you...",
                        "img": "pictures/school/weekend/day/cuddle.jpg"
                    }
                ];
                var option = weekendDayOptions[Math.floor(Math.random() * weekendDayOptions.length)];
            } else if (hours > 18 && hours < 23) {
            //evening/night
                let weekendEveOptions = [
                    {
                        "sentence": "Akash is hoping that you've had a nice weekend day and that you've done all that you've wanted to do...",
                        "img": "pictures/school/weekend/night/done.jpg"
                    },
                    {
                        "sentence": "Akash is hoping that you've had such a nice day...",
                        "img": "pictures/school/weekend/night/day.jpg"
                    },
                    {
                        "sentence": "Akash thinks that having you with him tonight would be an amazing end to a nice weekend day with you...",
                        "img": "pictures/school/weekend/night/with.jpg"
                    }
                ];
                var option = weekendEveOptions[Math.floor(Math.random() * weekendEveOptions.length)];
            }
        }
    } else {
    //summer
        //morning
        if (hours > 5 && hours <= 11) {
            let summerMorningOptions = [
                {
                    "sentence": "Akash is thinking about how your hair would look after you got out of bed... he bets it's really cute...",
                    "img": "pictures/summer/morning/1.jpg"
                },
                {
                    "sentence": "Akash is hoping that you're having a nice morning...",
                    "img": "pictures/summer/morning/2.jpg"
                },
                {
                    "sentence": "Akash is hoping that you're getting ready for a great day at camp or a great day at home...",
                    "img": "pictures/summer/morning/3.jpg"
                }
            ];
            var option = summerMorningOptions[Math.floor(Math.random() * summerMorningOptions.length)];
        } else if (hours > 11 && hours <= 18) {
        //day
            let summerDayOptions = [
                {
                    "sentence": "Akash is hoping that you are out enjoying your favorite season...",
                    "img": "pictures/summer/day/out.jpg"
                },
                {
                    "sentence": "Akash is hoping that the warm weather will keep your hands nice and warm and not freezing to death...",
                    "img": "pictures/summer/day/hands.jpg"
                },
                {
                    "sentence": "Akash is hoping that you're having a great time with your friends at camp or enjoying your free time at home...",
                    "img": "pictures/summer/day/camp.jpg"
                }
            ];
            var option = summerDayOptions[Math.floor(Math.random() * summerDayOptions.length)];
        } else if (hours > 18 && hours < 23) {
        //evening/night
            let summerEveOptions = [
                {
                    "sentence": "Akash is wishing that he could be at the lake watching the sunset with you...",
                    "img": "pictures/summer/night/lake.jpg"
                },
                {
                    "sentence": "Akash is thinking about how you're the best...",
                    "img": "pictures/summer/night/best.jpg"
                },
                {
                    "sentence": "Akash is wishing that he could spend these summer nights next to you in a hammock...",
                    "img": "pictures/summer/night/hammock.jpg"
                }
            ];
            var option = summerEveOptions[Math.floor(Math.random() * summerEveOptions.length)];
        }
    }
}

const sentenceElement = document.getElementById("sentence");
sentenceElement.innerText = option["sentence"];

const imgElement = document.getElementById("img");
imgElement.setAttribute("href", option["img"]);
