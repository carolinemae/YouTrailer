var searchButton = $("#searchButton");
var apiKey = "k_q5dx85dn";
var movieResult;

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


