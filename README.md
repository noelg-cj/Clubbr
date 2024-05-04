

![Vuejs notion](https://github.com/TH-Activities/saturday-hack-night-template/assets/117498997/b879ba9f-2057-431b-99db-e86a0010b1ea)




# Clubbr
**Clubbr** is a dynamic web application that serves as a one-stop solution for managing and viewing college club events.  It provides an intuitive interface for organizers to add, manage, and display events, enhancing the overall experience for both organizers and participants.
### Features
  1. **Event Management**: Organizers can easily add new events through a user-friendly form. These events are then dynamically displayed on the events page, providing a centralized location for all club activities.
  2. **Detailed Event View**: Each event is represented as a card on the events page. Clicking on an event card opens up a detailed view, providing more information about the event such as date, time, location, and description.
  3. **Interactive College Map**: This is the highlight of **clubbr**.The application features an interactive map of the college, powered by Google Maps. This map displays the locations of all events happening on a given day, providing a visual overview of event locations.

## Team members
1. [Noel George](https://github.com/noelg-cj)
2. [Akash](https://github.com/awesomeakash47)
3. [Vasanthi B N S](https://github.com/VB-123)
4. [Nanditha Dev](https://github.com/NandithaDev)

## Link to product walkthrough
[link to video](Link Here)
## How it Works ?
### Project Working
  - Organizers can add an event by filling out a form with the event’s details. Once submitted, the event is added to the database and displayed on the events page. Each event is represented as a card, which can be clicked to view more details.
  - The application also integrates with Google Maps to display an interactive map of the college. The locations of all events happening on a given day are marked on the map, providing a visual representation of event locations.   
 - Embed video of project demo

## Libraries used
Please ensure `npm` is installed on your PC.
  - Vue JS: Vue 3.4.21
  - vue-router: 4.0.13
  - FormKit: 1.6.2
  - axios: 1.6.8

## How to configure
**Step 1**: Clone the repository to a folder of your choice.
**Step 2**: Navigate to the root and run `npm i` to install the required dependencies.
Now, it's time to run them!
## How to Run
The project isn't hosted anywhere yet. So, please follow the steps to run the development server.
1. We host the JSON server first (the db.json file).
   **Step 1**: Navigate to `/src/data`.
   **Step 2**:Run `npx json-server --watch db.json`.
2. Now, check the hosted link and paste the base url at `/src/config.js`.
3. Lastly, we host the frontend.
   - Open a new terminal and navigate to the root.
   - Run `npm run dev`
Yay! The server is now running!

