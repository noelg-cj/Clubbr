<script>
import axios from 'axios';

export default {
  data() {
    return {
      eventList: [],
      colorCache: {},
    };
  },
  mounted() {
    this.fetchEvents();
  },
  methods: {
    fetchEvents() {
      axios.get('http://localhost:3000/event_list')
        .then(response => {
          this.eventList = response.data;
          console.log(this.eventList)
        })
        .catch(error => {
          console.error('Error fetching posts:', error);
        });
    },
    randomColor(organizer) {
      const r = () => Math.floor(256 * Math.random());
      const color = this.colorCache[organizer] || (this.colorCache[organizer] = `rgb(${r()}, ${r()}, ${r()})`);
      console.log(`Color for ${organizer}: ${color}`);
      return color;
    },
  }
};
</script>


<template>
  <h1>The below are the event details</h1>
  <p>Click to return to home</p>
  <button class="home-btn" @click="$router.push({ name: 'Home' })">Home</button>
  <div>
      <!-- Event Cards -->
      <div class="event-card" v-for="event in eventList" :key="event.id">
        <h2 class="card-title">Event Name: {{ event.eventName }}</h2>
        <p>Date of Event: {{ event.date }}</p>
        <p>Registration Fee: {{ event.regFee }}</p>
        <p>Last Date to register: {{ event.regLastDate }}</p>

        <div class="organizer-info">
          <span class="dot" :style="{ backgroundColor: randomColor(event.organizerName) }"></span>
          <span class="organizer-name">{{ event.organizerName }}</span>
        </div>
        <button class="card-button" @click="$router.push({ name: 'EventDetails', params: { id: event.id }  })">Learn More</button>
      </div>
  </div>


</template>

<style scoped>
.event-card {
 border: 1px solid #ccc;
 border-radius: 5px;
 padding: 20px; 
 margin-bottom: 10px;
 box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
 max-width: 400px;
 display: inline-block;
 background-color: white;
 margin: 50px;
 color: #333; 
}
.card-title{
  color:blue;
  font-size: 1.5rem;
  margin-top: 10px;
}
.card-button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border-radius:4px;
    margin-top: 10px;
}

.card-button:hover {
    background-color: #0056b3;
}

.organizer-info {
 display: flex;
 justify-content: flex-end;
 align-items: center;
}
.dot {
 width: 10px;
 height: 10px;
 border-radius: 50%;
 display: inline-block;
 margin-right: 5px;
}
.home-btn{
  background-color: white;
  padding:10px;
  border-radius: 4px;
}

</style>
