var searchButton = $("#searchButton");

var apiKey = "k_2fn865ld"; //k_yu9dk0350 k_q5dx85dn

var youtubePreview = $(".preview");

var movieResult;
var movieInfo = $('#movie-info')


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

for (var i = 0; i < localStorage.length; i++) {
    var title = localStorage.getItem(i);
}
var keyCount = 0;

// https://imdb-api.com/API/AdvancedSearch/k_yu9dk035?title=inception&user_rating=1.0,10&release_date=1950-01-01,2022-01-01&genres=action&sort=moviemeter,desc

function searchMovie(title, year, rating) {


    var rating = $("#rating").text()
    var year = $("#year").text()
    var genres = $('#genre :selected').text()
    console.log("Second work")
    //APi Link goes here
    var urlMovie = "https://imdb-api.com/API/AdvancedSearch/" + apiKey + "?title=" + title + "&user_rating=" + rating + ",10&release_date=" + year + "-01-01,2022-01-01&genres=" + genres;
    
    if (title == "") {
        alert('Please insert a movie title.')
    } else {
        $.ajax({
            url: urlMovie,
            method: "GET"
        }).then(function (response) {
            console.log("response OK")
            var response = response.results
            movieResult = $("#movies").append("<div>");
            movieResult.empty();
            createCard(response)
        })
    };
};

// Function that takes in the title chosen and fetches the YouTube URL and then calls function with the data to create the link
const getYoutubeApi = title => {
    var titleCheck = checkTitleSpaces(title)
    var youtubeUrl = `https://www.googleapis.com/youtube/v3/search?q=${titleCheck}%20movie%20trailer&key=AIzaSyDZg1iQijJK7t80EiYj_vlZDeCJnngwux0`
    console.log(youtubeUrl)
    fetch(youtubeUrl)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            var movieYoutubeId = data.items[0].id.videoId
            createYoutubeSection(movieYoutubeId)
        })
}


// Function that checks the title if it has spaces and returns correct youtube API formatting
const checkTitleSpaces = title => {
    if (title.includes(' ')) {
        var spaceTitle = title.replaceAll(' ', '%20')
        return spaceTitle;
    } else {
        return title;
    }
}

// Function that gets the video URL id
const createYoutubeSection = id => {
    console.log(id)
    var movieLink = $('.youTube')
    var youtubeUrlId = "https://www.youtube.com/embed/" + id
    movieLink.attr('src', youtubeUrlId)
//     // console.log(youtubeUrlId)
//     // movieInfo.empty()
//     // var movieUrlLink = $('<a>')
//     // movieUrlLink.text(youtubeUrlId)
//     // movieUrlLink.attr('href', youtubeUrlId)
//     // movieUrlLink.attr('target', '_blank')
//     // movieInfo.append(movieUrlLink)
//     // youtubePreview.append(movieInfo)
    youtubePreview.removeClass("hidden")
    var closebutton = $("#closebutton");
    closebutton.on('click', event => {
        $(".preview").remove();
    })
    return
};

//ADD IN THE FUNCTION TO CREATE THE IMDB INFO AND YOUTUBE TRAILER LINK IN RIGHT SIDE COLUMN
// Commented out right side column in HTML as the youtube trailer shows as pop up? - CT

// Function intake the API response and then creates elements of the Movie Cards containing- title, year and poster image
const createCard = response => {
    console.log(response)
    var movieTitle;
    var movieYear;
    var movieRating;
    var movieImage;
    var clickedTitle;
    var counter = 0;
    
    for (var i = 0; i < 31; i ++){
        var movieCard = $('<div>')
        var movieTitleInput = $('<h3>')
        var movieYearInput = $('<p>')
        var movieRatingInput =$('<p>')
        var movieImgInput = $('<img>')
        counter++

        movieResult.append(movieCard)
        movieCard.addClass('movie-card')

        movieTitle = response[i].title
        movieTitleInput.text(movieTitle)
        movieTitleInput.addClass('movie-title')
        movieTitleInput.addClass(`movie-${counter}`)
        movieCard.append(movieTitleInput)

        movieYear = response[i].description
        movieYearInput.text(movieYear)
        movieYearInput.addClass('movie-year')
        movieCard.append(movieYearInput)

        movieRating = response[i].imDbRating
        movieRatingInput.text('Rating: ' + movieRating)
        movieRatingInput.addClass('movie-rating')
        movieCard.append(movieRatingInput)

        movieImage = response[i].image
        movieImgInput.attr('src', movieImage)
        movieImgInput.addClass('movie-img')
        movieCard.append(movieImgInput)

        addListener(movieTitle, counter)
    }
    
}

// Event listener to take in movie title and calls the youtube API function
const addListener = (movieTitle, counter) => {
    $(`.movie-${counter}`).on('click', event => {
        event.preventDefault;
        clickedTitle = movieTitle
        console.log(clickedTitle)
        console.log("Worked!")
        getYoutubeApi(clickedTitle) 
        var local = localStorage.setItem("keyCount", clickedTitle);
        var history = $(".history")
        history.append("<li id=clickedTitle>" +  clickedTitle + "</li>");    
    })
};

// Search button click event
searchButton.on('click', event => {
    event.preventDefault();
    var searchInput = $("#search").val();
    console.log(searchInput)
    movieInfo.empty();
    searchMovie(searchInput);
});
