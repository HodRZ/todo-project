alert('Welcome! please follow the next steps to introduce yourself')
let userName = prompt('first things first, whats your name?', 'username')
let gender = prompt("are you a male or a female?", 'prefer not to say').toLowerCase()
let age = prompt("how old are you?", "age must be a positive number")
while (isNaN(parseInt(age)) || parseInt(age) <= 0) {
    age = prompt('your age must be a positive number')
}

const welcome = confirm('do you want to see our welcome message?')

if (welcome) {
    if (gender === 'male') {
        userName = (`Mr ${userName}`)
    } else if (gender === 'female') {
        userName = (`Ms ${userName}`)
    }
    alert(`welcome to our website ${userName}!`)
}

const survey = confirm('want to answer a few more question?')
let pet
let food
let sport
if (survey) {
    pet = prompt('what is your favorite animal?');
    food = prompt('what is your favorite food?');
    sport = prompt('what is your favorite sport');
}

if (pet == '') {
    pet = 'invalid'
}
if (food == '') {
    food = 'invalid'
}
if (sport == '') {
    sport = 'invalid'
}


const userArr = [];
userArr.push(userName, gender, age, pet, food, sport)
for (let data of userArr) {
    console.log(data)
}