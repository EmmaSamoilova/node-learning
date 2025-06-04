const exportedObject = require('./multp_exp')
const {myName, myHobbies, myFavoriteNumber, impFunc} = exportedObject
const greetingFn = require('./single_ex')
//don`t use
//const greetingFn = require('/Users/emmasamojlova/Documents/КПІ/3.2 /backend/myfiles/sec7/single_ex.js')
const {myName: myOtherName, myFriendsName, myGreatHobbies} = require('./my-mod/exp_imp')

myHobbies.push('climbing')
console.log(`myName: ${myName}`)
console.log(`myHobbies: ${myHobbies}`)
console.log(`myFavoriteNumber: ${myFavoriteNumber}`)
console.log(exportedObject)
greetingFn(myName)

console.log(`myName: ${myOtherName}, myFriendsName: ${myFriendsName}`)
console.log(myGreatHobbies)

impFunc()