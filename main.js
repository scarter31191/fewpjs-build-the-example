// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorModal = document.querySelector('#modal')
// selects the <div id="modal"> #modal is just css selector for id="modal"

function hiddenError() {
  errorModal.classList.add("hidden")
} // adds a class of "hidden" to the errorModal constant

hiddenError() // calls function

const articleHart = document.querySelectorAll('.like-glyph') //takes all the class="like-glyph" and makes a NodeList
function likeCallBack(e) {
  let heart = e.target 
  mimicServerCall()
  .then(function(serverMessage) {
    if (heart.innerText === EMPTY_HEART) {
      heart.innerText = FULL_HEART
      heart.classList.add('activate-heart')
    } else {
      heart.innerText = EMPTY_HEART
          heart.classList.remove("activated-heart")
    }
  })
  .catch(function(error) {
    const modal = document.getElementById('modal')
    modal.className = "";
    modal.innerText = error;
    setTimeout(() => modal.className = "hidden", 3000);
  });
};

for (const glyph of articleHart) {
  addEventListener("click", likeCallBack);
}
 
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
