# phantomplaylist

**Project Overview:**
This project is a web app that allows users to search music and podcasts. They can add music and podcasts from the results to their playlist, they can also remove them. Due to limited time, I decided to use creat-react-app tools to design and implement my project and it is widely used in the industry !

**Project Architecture:**
I used a component based MVVM (Model-View-ViewModel) architecture. In the src/components folder, my folders are separated by features. The app Folder, specifically app.js file, is the 1 file that has instances to all the main functions that are implemented like 'search'. In all the JS files in components, there is a render component, which only has html (UI) code that displays our application, but no logic itself. Everything passed in the render block goes through the View Model also the declared "this" object. For example, 
LookUp.js, we call this.search in the button class. In a View Model, every outside dependency is injected, so that we can block them out for testing. The View Model is the component that holds our logic. 
The model component is where our data is stored and retrieved. IN this situation we are requesting data from the spotify web abi through util/spotify.js and we also built in some placeholder values in app.js, in which we can update the values with the information we retrieve the web API. Model component updates all the information with the relevant data. 

Spotify Integration was built into the src/util folder. Since it has a more global function, it is best to separate from the more UI functions. The app.js file connects the other components with the spotify method file. 

**Project Features:**
My Project has few features: 
1. lookup - Allows the user to input a word, and on click of the search button, they receive a series of search results.
2. Tracklist and track - allows you to add and remove tracks to your plalisy from the search results.
3. search output - displays metadata retrieved from spotify api.

Some features were mentioned in the code, but not implemented due to time limitations.

- unfortunately I did not have time to code the audio playback feature. However, if I were to do so, I would include an additional component to the src/component file named audioplayback. Looking back I would have started with integrating the audio playback feature (using Spotifys's Web Playback SDK)  first and then injecting the metadata later. Basically making the search results more integrated with the playback feature. 

**UI Design:**
As for UI decisions, the search tool is easily visible so its's centered. I heard that blue is every designers go to color, as it provides great range and contrast. If I had time I'd play with the colors more to reflect something more playful and musical. 

**How to Access Website:**
Go to "https://sipekci.github.io/phantomplaylist/"
