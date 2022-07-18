
var searchButton = $(".searchButton");
var apiKey = "k_q5dx85dn";
var movieResult;

function searchMovie(title) {
    //APi Link goes here
    var urlMovie = "https://imdb-api.com/en/API/SearchMovie/k_q5dx85dn/" + title;

    if (title == "") {
        alert('Please insert a movie title.')
        console.log(title);
    } else {
        $.ajax({
            url: urlMovie,
            method: "GET"
        }).then(function (response) {
            var response = response.results
            movieResult = $(".left-col").append("<div>");
            movieResult.empty();
            createCard(response)
        })
    };
};

const createCard = response => {
    console.log(response)
    var movieTitle;
    var movieYear;
    var movieImage;
    for (var i = 0; i < response.length; i ++){
        var movieCard = $('<div>')
        var movieTitleInput = $('<h3>')
        var movieYearInput = $('<p>')
        var movieImgInput = $('<img>')

        movieResult.append(movieCard)

        movieTitle = response[i].title
        movieTitleInput.text(movieTitle)
        movieCard.append(movieTitleInput)

        movieYear = response[i].description
        movieYearInput.text(movieYear)
        movieCard.append(movieYearInput)

        movieImage = response[i].image
        movieImgInput.attr('src', movieImage)
        movieImgInput.addClass('movie-img')
        movieCard.append(movieImgInput)
    }
}



// Search button click event
searchButton.click(() => {
    var searchInput = $("#search").val();

    searchMovie(searchInput);

});

//results[0].title
//https://imdb-api.com/images/original/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.7273_AL_.jpg
// img src ="${val.image_url}