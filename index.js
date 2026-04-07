// combineUsers

const username1 = "theblackkingshow";

for (const _ of Array(3).keys()) {
    console.log(username1);
}
const username2 = "mafiaboss";

for (const _ of Array(5).keys()) {
    console.log(username2);
}

function combineUsernames(username1, username2) {
    return `${username1} & ${username2}`;
}

// combineObjects

const user1 = {
    name: "theblackkingshow",
    age: 20,
    city: "Atlanta"
};

const user2 = {
    name: "mafiaboss",
    age: 19,
    city: "Los Angeles",

    datejs: "03/04/2026"
};

// require the datejs module
const datejs = require("datejs");

// return object
function combineUserObjects(user1, user2) {
    return {
        name: `${user1.name} & ${user2.name}`,
    };
}