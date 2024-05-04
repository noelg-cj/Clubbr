import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue'; // Adjusted path
import EventDetails from '../components/EventDetails.vue'; // Adjusted path
import AddEventForm from '../components/AddEventForm.vue';
import DisplayEvents from  '../components/DisplayEvents.vue';
const routes = [
    { 
        name: "Home", 
        path: '/', 
        component: HomePage 
    },
    { 
        name:"EventDetails", 
        path: '/event/:id', 
        component: EventDetails, 
        props: true 
    },
    { 
        name: "AddEventForm",
        path: '/add-event', 
        component: AddEventForm,
    },
    { 
        name: "DisplayEvents", 
        path: '/display-event', 
        component: DisplayEvents,
    },
];

const router = createRouter({
 history: createWebHistory(),
 routes,
});

export default router;
