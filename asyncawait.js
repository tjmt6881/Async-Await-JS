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

// async function init(){
//     let createPosts = await createPost({ title: 'Post 3', body: 'This Is Post Three' });
//     getPosts();
// }

// init();

// Fetch
async function fetchUsers(){
    let fetchResponse = await fetch('https://jsonplaceholder.typicode.com/users');
    
    let responseData = await fetchResponse.json();

    console.log(responseData);
}

fetchUsers();