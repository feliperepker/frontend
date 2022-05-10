let data = {
    title: 'teste de envio',
    body: 'loren isum dollor sit',
    userID: 5

}
const postContainer = document.getElementById('posts')
let postMarkup = ''

function setPost(data){
    
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type' : 'application/json; charset=UTF-8'
        }
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
}

function getPost(){
    fetch('https://jsonplaceholder.typicode.com/posts',{
        headers: {
            'Content-Type' : 'application/json; charset=UTF-8'
        }
        })
        .then(response => response.json())
        .then(data => {
            data.map(function(post){
                postMarkup +=`
                    <div class="posts-item">
                        <h3>${post.title}</h3>
                        <p>${post.body}</p>
                    </div>
                `    
            })
            postContainer.innerHTML = postMarkup
        })
        .catch(error => console.error(error))
}
