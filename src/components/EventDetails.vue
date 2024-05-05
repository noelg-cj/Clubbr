<script>
import axios from 'axios';
import config from '@/config';

import 'primeicons/primeicons.css'

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
    <!-- <h1>Here we put the details of the chosen event</h1>
    <p>Click to return to home</p>
    <button class="home-btn" @click="$router.push({ name: 'Home' })">Home</button> -->
    <button class="display-event-btn" @click="$router.push({ name: 'DisplayEvents' })"><i class="pi pi-arrow-left"></i> Back</button> 
    <div class="event-container">
       <div>
           <p class="intro" v-if ="event.collab === ''">{{ event.clubName}}</p>
           <p class="intro" v-else>{{ event.clubName}} / {{ event.collab }}</p>
           <h1 class="event-title">{{ event.eventName }}</h1>
           <p class="mode">{{ event.mode }}</p>
           <p class="date mt"><i class="pi pi-calendar"></i>  {{ event.date }}</p>
            <p><i class="pi pi-clock"></i> {{ event.time }}</p>
           <p><i class="pi pi-map-marker"></i> {{ event.venue }}</p>
           <p class="mt">{{ event.furthDetails }}</p>
           <p class="mt">Certificates issued: {{ event.certificates }}</p>
           <div class="mentor-info mt">
               <p class="medium">Mentor: </p>
               <div>
                   <p class="medium">{{ event.mentor }}</p>
                   <p v-if="event.aboutMentor != ''">{{ event.aboutMentor }}</p>
                </div>
            </div>
            <p class="mt">Last Date to register: {{ event.regLastDate }}</p>
            <p class="">Registration Fee: {{ event.regFee }}</p>
           <p class="medium mt">Contact:</p>
           <p>{{ event.organizerName }}: {{ event.phone }}</p>
           <a :href="event.regLink" target="_blank" class="reglink">Register</a>
       </div>
    </div>
</template>

<style scoped>
.display-event-btn {
    border: none;
    font-size: 1rem;
    padding: 5px;
    margin: 10px;
    cursor: pointer;
}
.display-event-btn:hover {
    color: #9747FF;
    text-decoration: underline
}
.event-container {
    width: 60%;
    margin: 50px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #CBD5E1;
    padding: 40px;
    border-radius: 12px;
}
.event-title {
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    color: #9747FF;
    font-weight: 500;
}
.mt {
    margin-top: 24px;
}
.mentor-info {
    display: flex;
    align-items: center;
    gap: 10px;
}
.medium {
    font-weight: 500;
}
.reglink {
    color: white;
    text-decoration: none;
    font-weight: 500;
    background: #9747FF;
    padding: 10px 30px;
    margin: 30px auto;
    display: block;
    width: fit-content;
    border-radius: 8px;
    font-size: 1.5rem;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
}
.reglink:hover {
    background: #7F1DFF;
}
</style>
   