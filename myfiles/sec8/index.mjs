import {season, temperature} from "./named-exports.mjs";
import {humidity, isRaining} from "./inline-ex.mjs";
import getDataFromServer from "./default-export.mjs";
import DEFAULT_SERVER, {PASSWORD, USER_NAME as myUserName} from "./mixed-export.mjs";


getDataFromServer('https://jsonplaceholder.typicode.com/posts/1')
    .then(posts => console.log(posts))
    .catch((err) => console.log(err));

console.log(DEFAULT_SERVER)
console.log(myUserName, PASSWORD)


console.log(season);
console.log(temperature);
console.log(isRaining);
console.log(humidity);