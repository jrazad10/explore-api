function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data))
}


function displayPosts(posts) {
    const postsContainer = document.getElementById('post-container');
    for (const post of posts) {
        const postDiv = document.createElement('div');
        console.log(post);
        div.innerHTML = `
        <h4>User-${post.userId}</h4>
        <h5>Post: ${post.title}</h5>
        <p>Post Description: ${post.description}</p>
        `;
        postsContainer.appendChild(postDiv);
    }
}

loadPosts();


function deletePost() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
    });
}


function patchAPost() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PATCH',
        body: JSON.stringify({
            title: 'foo',
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

function createAPost(){
    
}
