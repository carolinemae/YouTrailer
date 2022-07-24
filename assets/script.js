var searchButton = $("#searchButton");
var apiKey = "k_q5dx85dn";
var movieResult;
<<<<<<< Updated upstream
=======
var movieInfo = $('#movie-info');
var counter = 0;
var savedLocal = [];
var closebutton = $("#closebutton");
>>>>>>> Stashed changes

var sliderRating = document.getElementById("myRangeRating");
var outputRating = document.getElementById("rating");
outputRating.innerHTML = sliderRating.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
sliderRating.oninput = function() {
var ratingLow = outputRating.innerHTML = this.value;
}

var sliderYear = document.getElementById("myRangeYear");
var outputYear = document.getElementById("year");
outputYear.innerHTML = sliderYear.value; // Display the default slider value


// Update the current slider value (each time you drag the slider handle)
sliderYear.oninput = function() {
var yearLow = outputYear.innerHTML = this.value;
}

var genres = $('#genre :selected').text()

console.log(genres);

for (var i = 0; i < localStorage.length; i++) {
    var title = localStorage.getItem(i);
}
var keyCount = 0;

// https://imdb-api.com/API/AdvancedSearch/k_yu9dk035?title=inception&user_rating=1.0,10&release_date=1950-01-01,2022-01-01&genres=action&sort=moviemeter,desc
function searchMovie(title, year, rating) {
    var rating = $("#rating").text()
    var year = $("#year").text()
    var genres = $('#genre :selected').text()
    //APi Link goes here
<<<<<<< Updated upstream
    var urlMovie = "https://imdb-api.com/API/AdvancedSearch/k_q5dx85dn?title=" + title + "&user_rating=" + rating + ",10&release_date=" + year + "-01-01,2022-01-01&genres=" + genres;
=======
    var urlMovie = "https://imdb-api.com/API/AdvancedSearch/" + apiKey + "?title=" + title + "&user_rating=" + rating + ",10&release_date=" + year + "-01-01,2022-01-01&genres=" + genres;
    
    $.ajax({
        url: urlMovie,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        var response = response.results;
        movieResult = $("#movies").append("<div>");
        movieResult.empty();
        createCard(response);
    })
};

// Function that takes in the title chosen and fetches the YouTube URL and then calls function with the data to create the link
const getYoutubeApi = (title, year) => {
    console.log("here")
    var titleCheck = checkTitleSpaces(title);
    var youtubeUrl = `https://www.googleapis.com/youtube/v3/search?q=${titleCheck}%20${year}%20official%20trailer&key=AIzaSyBZ_TquxsVxZmS55xJARAJICtBh_vggBg4`;
    console.log(youtubeUrl)
    fetch(youtubeUrl)
        .then(function (response) {
            console.log(response)
            return response.json();
        })
        .then(function (data) {
            var movieYoutubeId = data.items[0].id.videoId;
            createYoutubeSection(movieYoutubeId);
        })
};
>>>>>>> Stashed changes

    if (title == "") {
        alert('Please insert a movie title.')
        console.log(title);
    } else {
        $.ajax({
            url: urlMovie,
            method: "GET"
        }).then(function (response) {
            var response = response.results
            movieResult = $("#movies").append("<div>");
            movieResult.empty();
            createCard(response)
        })
    };
};

<<<<<<< Updated upstream
=======
// Function that gets the video URL id
const createYoutubeSection = id => {
    var movieLink = $('.youTube');
    var youtubeUrlId = "https://www.youtube.com/embed/" + id;
    movieLink.attr('src', youtubeUrlId);
    youtubePreview.removeClass("hidden");
    movieResult.attr('style','display: none');
    console.log("youtube work")
    
    return;
};

// Function intake the API response and then creates elements of the Movie Cards containing- title, year, rating and poster image
>>>>>>> Stashed changes
const createCard = response => {
    console.log(response)
    var movieTitle;
    var movieYear;
    var movieRating;
    var movieImage;
    for (var i = 0; i <8; i ++){
        var movieCard = $('<div>')
        var movieTitleInput = $('<h3>')
        var movieYearInput = $('<p>')
        var movieRatingInput =$('<p>')
        var movieImgInput = $('<img> ')

        movieResult.append(movieCard)

        movieTitle = response[i].title 
        movieTitleInput.text(movieTitle)
        movieCard.append(movieTitleInput)

        movieYear = response[i].description
        movieYearInput.text(movieYear)
        movieCard.append(movieYearInput)

        movieRating = response[i].imDbRating
        movieRatingInput.text(movieRating)
        movieCard.append(movieRatingInput)

        movieImage = response[i].image
        movieImgInput.attr('src', movieImage)
        movieImgInput.addClass('movie-img')
        movieCard.append(movieImgInput)
    }
}



// Search button click event
searchButton.click(() => {
    var searchInput = $("#search").val();

    var local = localStorage.setItem(keyCount, searchInput);
    var history = $(".history")
    history.append("<li>" +  searchInput + "</li>");           

    searchMovie(searchInput);

});

<<<<<<< Updated upstream

=======
closebutton.on('click', event => {
    youtubePreview.addClass("hidden")
    movieResult.attr('style','display: flex');
    console.log("clicked")
})

init();
>>>>>>> Stashed changes
