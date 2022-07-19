var searchButton = $("#searchButton");
var apiKey = "k_q5dx85dn";
var movieResult;



function searchMovie(title) {

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
    var urlMovie = "https://imdb-api.com/API/AdvancedSearch/k_q5dx85dn?title=" + title + "&user_rating=" + rating + ",10&release_date=" + year + "-01-01,2022-01-01&genres=" + genres;

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

const getYoutubeApi = title => {
    var titleCheck = checkTitleSpaces(title)
    console.log(title)
    console.log(titleCheck)
    var youtubeUrl = `https://www.googleapis.com/youtube/v3/search?q=${titleCheck}%20movie%20trailer&key=AIzaSyDZg1iQijJK7t80EiYj_vlZDeCJnngwux0`
    console.log(youtubeUrl)
    fetch(youtubeUrl)
        .then(function (response) {
            console.log(title)
            console.log(response)
            return response.json()
        })
        .then(function (data) {
            console.log(data)
        })
}


const checkTitleSpaces = title => {
    if (title.includes(' ')) {
        var spaceTitle = title.replaceAll(' ', '%20')
        console.log(spaceTitle)
        console.log("spaces")
        return spaceTitle;
    } else {
        console.log("no spaces")
        return title;
    }
}


// ADD IN THE EVENT LISTENER FOR THE MOVIE PICS IMAGES TO CALL THE YOUTUBE VIDEO API


//ADD IN THE FUNCTION TO CREATE THE IMDB INFO AND YOUTUBE TRAILER LINK IN RIGHT SIDE COLUMN

// Function intake the API response and then creates elements of the Movie Cards containing- title, year and poster image

const createCard = response => {
    console.log(response)
    var movieTitle;
    var movieYear;
    var movieRating;
    var movieImage;

    var clickedTitle;
    
    for (var i = 0; i < response.length; i ++){

    for (var i = 0; i <8; i ++){

        var movieCard = $('<div>')
        var movieTitleInput = $('<h3>')
        var movieYearInput = $('<p>')
        var movieRatingInput =$('<p>')
        var movieImgInput = $('<img> ')

        movieResult.append(movieCard)


        movieTitle = response[i].title        

        movieTitle = response[i].title 

        movieTitleInput.text(movieTitle)
        movieTitleInput.addClass('movie-title')
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

        addListener(movieTitle)
    }
    
}




// Event listener for the poster images to call youtube video link


// Search button click event
searchButton.click(() => {
    var searchInput = $("#search").val();

    var local = localStorage.setItem(keyCount, searchInput);
    var history = $(".history")
    history.append("<li>" +  searchInput + "</li>");           

    searchMovie(searchInput);

});



//results[0].title
//https://imdb-api.com/images/original/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.7273_AL_.jpg
// img src ="${val.image_url}

