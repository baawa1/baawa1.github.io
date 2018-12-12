// varriables

let tweetList = document.getElementById('tweet-list');




// Event listeners


addEventListener();


function addEventListener () {
    document.getElementById('form').addEventListener('submit', savetweet );

    tweetList.addEventListener('click', removeTweets);
     
    document.addEventListener('DOMContentLoaded', localStorageOnLoad )
     
}





// functions

function savetweet (e){
    e.preventDefault();
    const tweet = document.getElementById('tweet').value;   

    let li = document.createElement('li');
    li.textContent = tweet;
    li.className = 'tweet-content'

    
    tweetList.appendChild(li);


    const removeBtn = document.createElement('a');
    removeBtn.textContent = ('X');
    removeBtn.className = 'remove-tweet';
    li.appendChild(removeBtn);

    addTweetsToLocalStorage(tweet);


    alert('tweet Added');


    this.reset();

}


// removeBtn


function removeTweets(e) {
    if (e.target.classList.contains('remove-tweet')) {
        e.target.parentElement.remove();
    }

    removeTweetsfromLocalStorage(e.target.parentElement.textContent);

};


// add tweets to localStorage

function addTweetsToLocalStorage(tweet) {
    let tweets = getTweetsFromLocalStorage();


    tweets.push(tweet);

    localStorage.setItem('tweets', JSON.stringify( tweets ) );

    
};

function getTweetsFromLocalStorage() {
        let tweets;
        const tweetLs = localStorage.getItem('tweets');
        if ( tweetLs === null ) {
                tweets = [];
            } else {
                    tweets = JSON.parse(tweetLs);
                }
                return tweets;


}



//Load tweet from LocalStorage

function localStorageOnLoad (tweet) {
    let tweets = getTweetsFromLocalStorage();


    tweets.forEach(function(tweet) {
        let li = document.createElement('li');
        li.textContent = tweet;
        li.className = 'tweet-content'
    
        
        tweetList.appendChild(li);
    
    
        const removeBtn = document.createElement('a');
        removeBtn.textContent = ('X');
        removeBtn.className = 'remove-tweet';
        li.appendChild(removeBtn);
    });
}


// Remove tweets from local storage

function removeTweetsfromLocalStorage (tweet) {
    let tweets = getTweetsFromLocalStorage();

    //remove the X from tweets
    const tweetDelete = tweet.substring (0, tweet.length -1);


    tweets.forEach(function(tweetLs, index) {
        if (tweetDelete === tweetLs) {
            tweets.splice( index, 1);
        }
    })


    localStorage.setItem('tweets', JSON.stringify(tweets))
}

    
