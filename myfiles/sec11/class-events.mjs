import EventEmitter from "events";

class Post extends EventEmitter {
    constructor(author, text) {
        super();
        this.author = author;
        this.text = text;
        this.likesQty = 0;
        this.on('likePost', (username) => {
            console.log(`${username} liked your Post`)
        })
        this.on('error', (error) => {
            console.log(error)
        })
    }

    like(username) {
        if (!username) {
            return this.emit('error', new Error('No username'));
        }
        this.likesQty++;
        this.emit('likePost', username);
    }
}

const myPost = new Post('Emma', 'New Post');

myPost.like()
setTimeout(() => myPost.like('Elise'), 1000)
setTimeout(() => myPost.like('Bob'), 1000)
//console.log(myPost.author, myPost.text, myPost.likesQty);
