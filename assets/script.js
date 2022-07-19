
var searchButton = $("#searchButton");
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
    var movieImage;
    var clickedTitle;
    
    for (var i = 0; i < response.length; i ++){
        var movieCard = $('<div>')
        var movieTitleInput = $('<h3>')
        var movieYearInput = $('<p>')
        var movieImgInput = $('<img>')

        movieResult.append(movieCard)

        movieTitle = response[i].title        
        movieTitleInput.text(movieTitle)
        movieTitleInput.addClass('movie-title')
        movieCard.append(movieTitleInput)

        movieYear = response[i].description
        movieYearInput.text(movieYear)
        movieCard.append(movieYearInput)

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

    searchMovie(searchInput);

});


//results[0].title
//https://imdb-api.com/images/original/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.7273_AL_.jpg
// img src ="${val.image_url}