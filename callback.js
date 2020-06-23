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

function createPost(post, callback){
    setTimeout(() => {
        posts.push(post);
        callback()
    }, 4000);
}

createPost({ title: 'Post 3', body: 'This Is Post Three' }, getPosts);