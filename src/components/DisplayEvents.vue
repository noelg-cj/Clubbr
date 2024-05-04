<script>
import axios from 'axios';

export default {
  data() {
    return {
      eventList: [],
    };
  },
  mounted() {
    this.fetchEvents();
  },
  methods: {
    fetchEvents() {
      axios.get('http://localhost:5000/event_list')
        .then(response => {
          this.eventList = response.data;
          console.log(this.eventList)
        })
        .catch(error => {
          console.error('Error fetching posts:', error);
        });
    },
    /*addPost() {
      axios.post('http://localhost:3000/posts', this.newPost)
        .then(() => {
          this.newPost = { title: '', content: '' };
          this.fetchPosts(); // Refresh the list after adding
        })
        .catch(error => {
          console.error('Error adding post:', error);
        });
    }*/
  }
};
</script>


<template>
    <h1>The below are the event details</h1>
    <p>Click to return to home</p>
    <button class="home-btn" @click="$router.push({ name: 'Home' })">Home</button>
</template>