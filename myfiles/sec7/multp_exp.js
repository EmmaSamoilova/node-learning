const myName = 'Emma'
const myHobbies = ['swimming', 'boxing', 'crochet']
const myFavoriteNumber = 8

console.log('Text from mult-exp')

function impFunc() {
    console.log('Smile!')
}

exports.myName = myName
exports.myHobbies = myHobbies
module.exports.myFavoriteNumber = myFavoriteNumber
exports.impFunc = impFunc