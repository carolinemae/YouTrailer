// Global Variables
var searchButton = $("#searchButton");
var apiKey = "k_q5dx85dn"; //k_yu9dk0350 k_2fn865ld
var youtubePreview = $(".preview");
var movieResult;
var movieInfo = $('#movie-info');

// Slider creation on UI
var sliderRating = document.getElementById("myRangeRating");
var outputRating = document.getElementById("rating");
outputRating.innerHTML = sliderRating.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
sliderRating.oninput = function() {
var ratingLow = outputRating.innerHTML = this.value;
};

var sliderYear = document.getElementById("myRangeYear");
var outputYear = document.getElementById("year");
outputYear.innerHTML = sliderYear.value; // Display the default slider value


// Update the current slider value (each time you drag the slider handle)
sliderYear.oninput = function() {
var yearLow = outputYear.innerHTML = this.value;
};

var genres = $('#genre :selected').text();

for (var i = 0; i < localStorage.length; i++) {
    var title = localStorage.getItem(i);
};
var keyCount = 0;

// Function that takes in title, year and rating and requests to the IMDB API
function searchMovie(title, year, rating) {
    var rating = $("#rating").text();
    var year = $("#year").text();
    var genres = $('#genre :selected').text();

    //APi Link goes here
    var urlMovie = "https://imdb-api.com/API/AdvancedSearch/" + apiKey + "?title=" + title + "&user_rating=" + rating + ",10&release_date=" + year + "-01-01,2022-01-01&genres=" + genres;
    
    $.ajax({
        url: urlMovie,
        method: "GET"
    }).then(function (response) {
        var response = response.results;
        movieResult = $("#movies").append("<div>");
        movieResult.empty();
        createCard(response);
    })
};

// Function that takes in the title chosen and fetches the YouTube URL and then calls function with the data to create the link
const getYoutubeApi = (title, year) => {
    var titleCheck = checkTitleSpaces(title);
    var youtubeUrl = `https://www.googleapis.com/youtube/v3/search?q=${titleCheck}%20${year}%20official%20trailer&key=AIzaSyDZg1iQijJK7t80EiYj_vlZDeCJnngwux0`;
    fetch(youtubeUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var movieYoutubeId = data.items[0].id.videoId;
            createYoutubeSection(movieYoutubeId);
        })
};

// Function that checks the title if it has spaces and returns correct youtube API formatting
const checkTitleSpaces = title => {
    if (title.includes(' ')) {
        var spaceTitle = title.replaceAll(' ', '%20');
        return spaceTitle;
    } else {
        return title;
    };
};

// Function that gets the video URL id
const createYoutubeSection = id => {
    var movieLink = $('.youTube');
    var youtubeUrlId = "https://www.youtube.com/embed/" + id;
    movieLink.attr('src', youtubeUrlId);
    youtubePreview.removeClass("hidden");
    var closebutton = $("#closebutton");
    movieResult.attr('style','display: none');

    closebutton.on('click', event => {
        $(".preview").remove();
        movieResult.attr('style','display: flex');
    })
    return;
};

// Function intake the API response and then creates elements of the Movie Cards containing- title, year, rating and poster image
const createCard = response => {
    var movieTitle;
    var movieYear;
    var movieRating;
    var movieImage;
    var clickedTitle;
    var counter = 0;
    
    for (var i = 0; i < 31; i ++){

        var movieCard = $('<div>');
        var movieTitleInput = $('<h3>');
        var movieYearInput = $('<p>');
        var movieRatingInput =$('<p>');
        var movieImgInput = $('<img>');
        counter++;

        movieCard.addClass('movie-card');
        movieResult.append(movieCard);

        movieTitle = response[i].title;
        movieTitleInput.text(movieTitle);
        movieTitleInput.addClass('movie-title');
        movieTitleInput.addClass(`movie-${counter}`);
        movieCard.append(movieTitleInput);

        movieYear = response[i].description;
        movieYearInput.text(movieYear);
        movieYearInput.addClass('movie-year');
        movieCard.append(movieYearInput);

        movieRating = response[i].imDbRating;
        movieRatingInput.text(movieRating);
        movieRatingInput.addClass('movie-rating');
        movieCard.append(movieRatingInput);

        movieImage = response[i].image;
        movieImgInput.attr('src', movieImage);
        movieImgInput.addClass('movie-img');
        movieCard.append(movieImgInput);

        addListener(movieTitle, movieYear, counter);
    };
};

// Event listener to take in movie title and calls the youtube API function
const addListener = (movieTitle, year, counter) => {
    $(`.movie-${counter}`).on('click', event => {
        event.preventDefault;
        clickedTitle = movieTitle;
        var newYear = year.replaceAll('(', '').replaceAll(')', '');

        if (newYear.includes(' ')) {
            var newYearSpace = newYear.replaceAll(' ', '%20');
            getYoutubeApi(clickedTitle, newYearSpace);

        } else {
            getYoutubeApi(clickedTitle, newYear);
        };

        var local = localStorage.setItem("keyCount", clickedTitle);
        var history = $(".history");
        history.append("<li id=clickedTitle>" +  clickedTitle + "</li>");    
    })
};

// Search button click event
searchButton.on('click', event => {
    event.preventDefault();
    var searchInput = $("#search").val();
    movieInfo.empty();
    searchMovie(searchInput);
});
