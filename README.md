# Node API Interface

Abstracted API interface. Takes at most 3 URL parameters and builds API calls. Currently set to listen on port 5000.

Usage: 

[To add] Make an inital POST containing the base URL for the API. 

Ex. https://pokeapi.co/api/v2/

In subsequent needed infos in your application, make a GET request to '/param1/param2/param3' (Parameters 2 and 3 are optional) and it will build/send an API call utilising the parameters and Base URL.

Ex. Using the previous Base URL:

  fetch('/pokemon/bulbasaur') => JSON object with PokeAPI's information on Bulbasaur (omitted because 10k lines)
  
Currently, the Base URL is passed in via command line, but this is going to be removed as I make a front end for one of the uses I planned for this.
