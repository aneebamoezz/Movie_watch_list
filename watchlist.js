let watchlistLocalStorage = JSON.parse(localStorage.getItem("myMovieWatchlist"))
let watchlistHtml
const mainContainer = document.getElementById("main-container")


renderMovies()


function renderMovies() {
    if(watchlistLocalStorage && watchlistLocalStorage.length > 0) {
        watchlistHtml = watchlistLocalStorage.join("")
        mainContainer.innerHTML = watchlistHtml
        setEventListeners()
    } else {
        mainContainer.innerHTML = `<div id="initial-state">
        <h2>Your watchlist is looking a little empty...</h2>
        <a class="flex" href="index.html">
        <img src="images/icons8-plus-+-30.png">
        <p>Let’s add some movies!</p>
        </a>
        </div>
        `
    }
}

function setEventListeners() {
    const watchlistContainers = document.getElementsByClassName("watchlist")
    
    Object.values(watchlistContainers).forEach( function(item, index) {
        // Add event listener
        item.addEventListener("click", function() {
            // remove from array
            watchlistLocalStorage.splice(watchlistLocalStorage[index], 1) 
            // save to local storage
            localStorage.setItem("myMovieWatchlist", JSON.stringify(watchlistLocalStorage)) 
            setEventListeners()
            renderMovies()
            // console.log("Removed from watchlist!")            
        })
    })
}