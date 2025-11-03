# Pokémon Finder
A simple web application that lets users search for Pokémon by **name** or **ID**.  
The app fetches data from the [PokéAPI](https://pokeapi.co/) using Axios and displays: Name, ID, Weight, Height, Types (e.g., Water, Fire....), Official artwork image

# Resources
- [Axios Documentation](https://axios-http.com/docs/intro)  
- [Pokémon API Documentation](https://pokeapi.co/docs/v2)  
- [Pokémon Finder Example in Moodle Assignment](https://andrea-jmc.github.io/pokemon-finder/)  
- [CodeX Week 5 & 6 Resource Files](https://codexacademy.moodlecloud.com/course/view.php?id=64)  
- *Connecting to the Poke API Example Code.html* (in Week 5 Resource Folder)
- [W3Schools – CSS Loader (Spinner)](https://www.w3schools.com/howto/howto_css_loader.asp)

## Features
- **Search Bar & Button** Users can enter a Pokémon name or ID into a text field and click the search button to trigger the request.
- **API Call to PokéAPI**  The app makes a request to: `https://pokeapi.co/api/v2/pokemon/{name_or_id}`
- **Dynamic UI Updates** Results are displayed on the page using JavaScript DOM manipulation.
- **Loading Spinner** A spinner is shown while the API request is in progress.
- **Error Handling** If the Pokémon is not found, an error message is displayed and the card remains hidden.

## How It Works and Example
1. User enters a Pokémon name or ID in the search bar.
2. The app shows a **loading spinner** while fetching data.
3. If found, the Pokémon’s details (name, ID, height, weight, types, and image) are displayed in a styled card.
4. If not found, an **error message** is shown instead.
5. Example: Search for **pikachu** → displays Pikachu’s official artwork, ID, height, weight, and type.
