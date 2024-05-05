<script>
import axios from 'axios';
import config from '@/config';
const apiUrl = `${config.apiBaseUrl}/event_list`;
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
      axios.get(apiUrl)
        .then(response => {
          this.eventList = response.data;
        })
        .catch(error => {
          console.error('Error fetching posts:', error);
        });
    },
    randomColor(organizer) {
      const r = () => Math.floor(256 * Math.random());
      const color = this.colorCache[organizer] || (this.colorCache[organizer] = `rgb(${r()}, ${r()}, ${r()})`);
      return color;
    },
  }
};
</script>


<template>
  <h1 class="events-header">Events</h1>
  <p class="main-desc">Here is the list of top trending events happening at CET</p>
  <button class="home-btn" @click="$router.push({ name: 'Home' })">
    <img src="/public/logo.png" alt="Home" width=100 />
  </button>
  <div class="cards-container">
      <!-- Event Cards -->
      <div class="event-card" v-for="event in eventList" :key="event.id">
        <div class="card-header">
          <div class="organizer-info">
            <span class="dot" :style="{ backgroundColor: randomColor(event.organizerName) }"></span>
            <span class="organizer-name">{{ event.clubName }}</span>
          </div>
          <h2 class="card-title">{{ event.eventName }}</h2>
        </div>
        <div class="card-content">
          <p class="card-descr">{{  event.furthDetails }}</p>
          <!-- <p>Date of Event: {{ event.date }}</p>
          <p>Registration Fee: {{ event.regFee }}</p>
          <p>Last Date to register: {{ event.regLastDate }}</p> -->
          <div>
            <div class="dates-container">
              <p>Register before:</p>
              <p>{{ event.regLastDate }}</p>
            </div>
            <div class="dates-container">
              <p>Event Date:</p>
              <p>{{ event.date }}</p>
            </div>
            <div class="card-footer">
              <h4 class="regfee">Rs. {{ event.regFee }}</h4>
              <button class="card-button" @click="$router.push({ name: 'EventDetails', params: { id: event.id }  })">Details</button>
            </div>
          </div>
        </div>
      </div>
  </div>


</template>

<style scoped>
.home-btn {
  position: absolute;
  top: 20px;
  left: 20px;
  border: none;
  font-size: 1rem;
  color: #9747FF;
}

.home-btn:hover {
  cursor: pointer;
  text-decoration: underline;
}

.main-desc {
  text-align: center;
  font-size: 1.2rem;
  color: #374151;
  font-family: 'Poppins';
  margin-top: 10px;

}

.cards-container {
  padding: 0 30px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  justify-content: center;
}

.organizer-name {
  color: #374151;
  font-family: 'Poppins';
  font-weight: 500;
}

.events-header {
  margin-top: 60px;
  text-align: center;
  font-size: 3rem;
  font-family: 'Playfair Display', sans-serif;
  font-weight: 500;
}

.event-card {
  margin: 10px;
  width: 300px;
  height: 350px;
  border: 2px solid #CBD5E1;
  padding: 16px;
  border-radius: 8px;
}

.event-card:hover {
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
}

.card-header {
  height: 20%;
}

.card-title{
  font-family: 'Popins', sans-serif;
  font-size: 2rem;
  color: #9747FF;
}

.card-content {
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-descr {
  margin: 10px 0 10px 0;
  color: #374151;
  font-size: 0.9rem;
}

.dates-container {
  display: flex;
}

.dates-container p {
  flex: 1;
  width: 50%;
}

.card-button {
    font-size: 1rem;
    padding: 5px 30px;
    border-radius: 8px;
    border: none;
    background-color: #9747FF;
    color: white;
    font-family: 'Poppins';
    border: 2px solid #9747FF;
}

.regfee {
  color: #9747FF;
  font-family: 'Poppins';
  font-weight: 500;
  border: 2px solid #9747FF;
  display: inline-block;
  padding: 5px 30px;
  border-radius: 8px;
}

.card-footer {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

}

.card-button:hover {
}

</style>
