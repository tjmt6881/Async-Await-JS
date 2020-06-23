
// /*
const hasMeeting = true;
const meeting = new Promise((resolve, reject) => {
    if(!hasMeeting){
        const meetingDetails = {
            name: 'A',
            location: 'B',
            time: 'C'
        }

        resolve(meetingDetails);
    }
    else{
        reject(new Error('Meeting Had Already Been Scheduled...'))
    }
});
const addToCalender = meetingDetails => {
    return new Promise((resolve, reject) => {
        resolve(`${meetingDetails.name} is scheduled at ${meetingDetails.location} on ${meetingDetails.time}`);
    });
};
async function myMeeting(){
    try{
        const meetingDetails = await meeting;
        const message = await addToCalender(meetingDetails);
        console.log(message);
    }
    catch(err){
        console.log(err.message);
    }
}
myMeeting();
// async function myMeeting(){
//     const meetingDetails = await meeting;
//     const message = await addToCalender(meetingDetails);
//     console.log(message);
// }
// myMeeting().catch(err => console.log(err.message));
// */


/*
Internal Process of Async and Await
yield helps to freeze the process
function* generatorFunc(){
    let data = getData();
    yield data;
    console.log(data);
}
*/


/*
const promise1 = Promise.resolve('Promise 1 Completed'); 
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2 Completed');
    }, 3000);
}); 
Promise.all([promise1, promise2]).then(res => console.log(res));
// Promise.race([promise1, promise2]).then(res => console.log(res));
// promise1.then(res => console.log(res));
// promise2.then(res => console.log(res));
*/


/*
const hasMeeting = false;
const meeting = new Promise((resolve, reject) => {
    if(!hasMeeting){
        const meetingDetails = {
            name: 'X',
            location: 'Y',
            time: 'Z'
        }
        resolve(meetingDetails);
    }
    else{
        reject(new Error('Meeting Already Scheduled...'));
    }
});
const addToCalender = meetingDetails => {
    const calender = `${meetingDetails.name} is Scheduled at ${meetingDetails.time} on ${meetingDetails.location}`;
    return Promise.resolve(calender);

    //  OR 
    // return new Promise((resolve, reject) => {
    //     const calender = `${meetingDetails.name} is Scheduled
    //     at ${meetingDetails.time} 
    //     on ${meetingDetails.location}`;
    //     resolve(calender);
    // });
} 
meeting
    .then(addToCalender)
    .then(res => {
        console.log(`Meeting Scheduled...`);
        console.log(res);
    })
    .catch(err => {
        console.log(err.message);
    });
*/


/*
example => Nested callbacks 
doSomthing(function(result) {
    doSomthingElse(result, function(newResult) {
        doSomthingElse(newResult, function(finalResult) {
            console.log('Final results => ', finalResult)
        }, failureCallback);
    }, failureCallback);
}, failureCallback);
*/


/*
let greeting = name => console.log(`Hello ${name}`);
const userInfo = (firstName, lastName, callbacks) => {
    const fullName = `${firstName} ${lastName}`
    callbacks(fullName);
};
userInfo('P1', 'L1', greeting);
*/


/*
let greeting = name => console.log(`Hello ${name}!`);
greeting('P1');
*/


/*
function greeting(name){
    console.log(`Hello ${name}`);
}
greeting('P1');
*/


/*
const names = ['P1', 'P2', 'P3'];
const greet = names.map( name => `Hello ${name}` );
console.log(greet);
*/


/*
setTimeout( () => {
    console.log('First');
}, 3000);
console.log('Second');
console.log('Third');
*/


/*
console.log('First');
console.log('Second');
console.log('Third');
*/