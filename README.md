# LIRI BOT |  hw 10
A Language Interpretation and Recognition Interface command line
- it will serve as a command line node app that takes in parameters and gives back data to users.


 ### Why use LIRI BOT? ###
 Use LIRI BOT to get 
 * Concert/band information
 * movie information
 * song information
 of your favorite Bands in town simply by entering the name of the band/artist
 
 
 
 
 
 
 
 ### How to get started? ###
 1. Type in this command followed by your band/movie/song of choice using these commands.
 * If searching A BAND you will get a venue, location and event date in return
 
 
 
 
 
  ![node1](https://user-images.githubusercontent.com/47580937/57410184-c5027980-71af-11e9-832a-ed69f27923be.jpeg)
  
  




 
 * If searching A SONG you will get an artist, preview and Album in return
 
 
 
 
 
 
 
 
  ![node2](https://user-images.githubusercontent.com/47580937/57411263-a651b200-71b2-11e9-8ffb-b93df915fbbe.jpeg)
 
 
 
 
 
 
 
 
 * If searching A MOVIE you will get a title, year, IMDB, Rotten Tomatoes rating, Country, Languange, Plot and Actors in    return
 
 
 
 
 
 
 
 
 
 ![node3](https://user-images.githubusercontent.com/47580937/57411376-03e5fe80-71b3-11e9-8ea1-c88a4840ec6e.jpeg)

 
 
 




# DEVELOPER TOOLS - 


###   http://www.artists.bandsintown.com/bandsintown-api  ###





* The function below was used to search the bandsintown website for artist events.
  I used the .get() and .then() method to render the venue name, location and event date in the format of (MM/DD/YYYY).









![nodeband](https://user-images.githubusercontent.com/47580937/57489030-7ff74980-727a-11e9-8518-5e50e4f16596.jpeg)











###   https://www.npmjs.com/package/node-spotify-api  ###





This function starts of assigning a default song called "The Sign" by Ace of Base.
The rest of the function will render the artist name, preview of the song link and Album name.











![nodespotify](https://user-images.githubusercontent.com/47580937/57489070-97cecd80-727a-11e9-8983-c2a560a870c4.jpeg)











###     http://www.omdbapi.com/  ###





This function starts off by assigning a default movie called "Mr. Nobody".
The rest of the function will use a .get() method to render the movies Title, year, IMBD rating, Rotten tomatoes rating, Country, Language, Plot and actors. 











![nodemovie](https://user-images.githubusercontent.com/47580937/57489314-4115c380-727b-11e9-96ab-e318450d622d.jpeg)
 





