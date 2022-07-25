
## User Story

AS A Web developer 🚀, 

I WANT TO, WHEN targeted browser visits view movie records

THEN the browser can search and access the movie's record by name or title


## Acceptance Croiteria

GIVEN a webpage meets records of movies

WHEN I enter movie's name or title

THEN I find all the movies similar title

WHEN I clicked search

THEN I am presented movie(s) and all the movies similar title

WHEN I clicked each movie

THEN I presented the trailer(s) of the resulted movie(s)

WHEN I searched a title 

THEN the searched title listed in search history


# About YouTrailer

YouTrailer it's a Library of Movie Trailers site which shows Trailers of movies from 1990 until now. 

The site is to users to browse movies by catagory, year of released and the rating, 

so users can find movies according to desired search and view the trailer.


## How YouTrailer built 🛠 

# Mock

  ![sketch](./images/PXL_20220714_090411275.jpg) 


  YouTrailer project started with  🚀 ,
    
    User Story
    -----------

    AS A drafter,

    I WANT to be able to keep track of important tasks

    SO THAT I am able to meet deadlines


    Acceptance Criteria
    --------------------

    GIVEN I am keeping track of important tasks

    WHEN I open the application

    THEN I am displayed with the current date at the top of the page

    WHEN I scroll down

    THEN I am shown tasks that require attention or are due today

    WHEN I select a task

    THEN I am presented with the option to reschedule to another day/time


# Tools used
   
    🔗 HTML
    
    🔗 CSS 

    🔗 SCSS
    
    🔗 Javascript

    // Libraries used,

        - Jquery (https://jquery.com/)

        - IMDb (https://imdb-api.com/api)

        - FontAwesome (https://fontawesome.com/start)

    // Framework - Bulma (https://bulma.io/)

    // Other Sources used,

        - Google (https://www.google.com/)


// YouTrailer has developed to give maximum user friendlines to the browser. The site is designed with multiple filters for the best user accessibility. Features and functionalities as follows;


# Features of,

    @ Search section -  

    This is the section where user can enter the title of the desired movie and click the search button and the main page will show all the relevant movies similar to the title entered.  

    @ Search History - 

    Search history is designed to save browser time. Once the user input the title of the movie it stores  and appear in the below the search button in search bar section. So user can easily search the same name of the movie without re-entering into the search bar.  

    @ Choosing the Genre -

    User also can search the trailer by choosing a Genre. This is, if the user wants to search the same title and also can be searched by the catagory. This option has been designed due to some of movies related to multiple catogories.

    @ Year of Made -

    If there's a series of movies under one title which are released in different years, the user can search the particular movie title by year of released and get the filtered results.

    @ Rating -

    Browser can filter the searched results by choosing the range of the rating 1 to 10.


# Functionalities of,

    @ Search Section -
 
    In this section, the titles of movies the user has selected has been saved within the local storage using the JSON stringify and parse functions. 

    When the browser is refreshed the history list will be presented due to the function of parsing the local storage and it is present on the User Interface (UI). 

    @ API -
    
    Clicking on the title in the history section calls on the youtube API to receive the URL and creates a youtube video player on the main screen.
   
    The search section also triggers the API call by inputting the search Movie name into the API request url.  When the user clicked a title it will be stored within a variable and then stored within the local storage using stringify. 



# Obstacles 🤔

    - Git command failures

    - Git merging failures

    - Imdb errors

    - API key validation period

    - YouTube API key validation period

    - Bulma coding pattern
    

# Authors

    - Ben (HTML, CSS, JavaScript & API)

    - Roman (HTML, CSS, JavaScript & API)

    - Caroline (Sketch, HTML & CSS)

    - Chamath (HTML, README) 

    
⚡️ Fun fact...

Thank you for the Developers for making us Developers!
