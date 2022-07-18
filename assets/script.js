var searchButton = $(".searchButton");
var apiKey = "k_yu9dk035";

function searchMovie(title) {
    //APi Link goes here
    var urlMovie = "https://imdb-api.com/en/API/SearchMovie/k_yu9dk035/" + title;

    if (title == "") {
        console.log(title);
    } else {
        $.ajax({
            url: urlMovie,
            method: "GET"
        }).then(function (response) {
            var movieReslult = $(".left-col").append("<div>");
            movieReslult.empty();
            var movie = (response.results[0].title);
            movieReslult.append("<p>" + movie + "</p>");
            var imageUrl = (response.results[0].image_url);
            movieReslult.append('"<img scr="imageUrl">');
        })
    };
};

// Search button click event
searchButton.click(() => {
    var searchInput = $("#search").val();

    searchMovie(searchInput);

});

//results[0].title
//https://imdb-api.com/images/original/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.7273_AL_.jpg
// img src ="${val.image_url}