<script>
import axios from 'axios';
import config from '@/config';
const apiUrl = `${config.apiBaseUrl}/event_list`;

export default {
 data() {
    return {
      event: {}
    };
 },
 created() {
    this.fetchEventDetails();
 },
    methods: {
        fetchEventDetails() {
            const eventId = this.$route.params.id;
            axios.get(apiUrl)
                .then(response => {
                const event = response.data.find(event => event.id === eventId);
                if (event) {
                    this.event = event; 
                } else {
                    console.error('Event not found');
                }
                })
                .catch(error => {
                console.error('Error fetching event details:', error);
                });
        }
    }
};
</script>

<template>
    <h1>Here we put the details of the chosen event</h1>
    <p>Click to return to home</p>
    <button class="home-btn" @click="$router.push({ name: 'Home' })">Home</button>
    <button class="display-event-btn" @click="$router.push({ name: 'DisplayEvents' })">Display Events</button>
    <div>
       <p v-if ="event.collab === ''">Hello People! {{ event.clubName}} proudly presents to you</p>
       <p class="intro" v-else>Hello People! {{ event.clubName}} in collaboration with {{ event.collab }} proudly presents to you</p>
       <h1>{{ event.eventName }}</h1>
       <h2>The details are as follows:</h2>
       <p class="date">Date of Event: {{ event.date }}</p>
       <p class="mode">Mode of conduct: {{ event.mode }}</p>
       <p>Time: {{ event.time }}</p>
       <p>Venue: {{ event.venue }}</p>
       <p>Further Details</p>
       <p>{{ event.furthDetails }}</p>
       <p>Registration Fee: {{ event.regFee }}</p>
       <p>Issue of certificates: {{ event.certificates }}</p>
       <p>So without any further ado, hit the link below!</p>
       <p>Registration Link: {{ event.regLink }}</p>
       <p>Last Date to register: {{ event.regLastDate }}</p>
       <p>About the Mentor</p>
       <p class="mentorName">{{ event.mentor }}</p>
       <p v-if="event.aboutMentor != ''">{{ event.aboutMentor }}</p>
       <p>For further queries, contact:</p>
       <p>{{ event.organizerName }}: {{ event.phone }}</p>
    </div>
</template>

<style scoped>
/* BS Styles: Badly needs an upgrade */
.h1{
 color:white;
 text-align:center;
 font-size: 50%;
}
.intro{
    color:antiquewhite;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
}
.date{
    color:azure;
    text-decoration: solid;
}
</style>
   