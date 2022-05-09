# phantomplaylist

Project Overview:
This project is web app that allows users to search music and podcasts. They can add music and podcasts from the results to their playlist. Due to limited time, I decided to use creat-react-app tools to design and implement my project. 

Project Architecture:
I used a component based MVVM (Model-View-ViewModel) architecture. In the src/components folder, my folders are separated by features. The app Folder, specifically app.js file, is the 1 file that brings allthe functionalities together. In all the JS files in components, there is a render component, which only has html (UI) code that displays our application, but no logic itself. Everything passed in the render block goes through the View Model also the declared "this" object. For example, 
LookUp.js, we call this.search in the button class. In a View Model, every outside dependency is injected, so that we can block them out for testing. The View Model is the component that holds our logic. 

Spotify Integration was built into the util folder. Since it has a more global function, it is best to separate from the more UI functions. 

Project Features:

UI Design:
Object Oriented Principles:


How to Deploy Website:
