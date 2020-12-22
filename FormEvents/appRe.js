const form = document.querySelector('#tweetForm')
const tweetsContainer = document.querySelector('#tweets')
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const tweetInput = form.elements.tweet;
    const usernameInput = form.elements.username;
    addTweet(usernameInput.value, tweetInput.value);
    usernameInput.value = '';
    tweetInput.value = '';
})

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`);
    tweetsContainer.append(newTweet)
}