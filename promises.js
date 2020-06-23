const fetch = require("node-fetch");

const posts = [
    { title: 'Post 1', body: 'This Is Post One'},
    { title: 'Post 2', body: 'This Is Post Two'}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`
        });
        console.log(output);
        document.body.innerHTML = output;
    }, 2000)
}

function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const err = false;

            if(!err) {
                resolve();
            }
            else{
                reject('Err => Something went wrong');
            }
        }, 4000);
    });
}

createPost({ title: 'Post 3', body: 'This Is Post Three' })
    .then(getPosts)
    .catch(err => console.log(err));

// Promise All
// const promise1 = Promise.resolve('Hey');
// const promise2 = 'World';
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, 'GoodBye')
// });
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
// Promise.all([promise1, promise2, promise3, promise4])
//     .then(response => console.log(response))
//     .catch(err => console.log(err));