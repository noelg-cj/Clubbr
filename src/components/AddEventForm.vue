<script>
  import axios from 'axios'
  export default {
  data() {
    return{
      eventDetail : {
        clubName: '',
        eventName: '',
        date: '',
        mode: '',
        time: '',
        venue: '',
        regFee: 0,
        certificates: '',
        regLink: '',
        regLastDate: '',
        furthDetails: '',
        mentor: '',
        aboutMentor : '',
        collab: '',
        eventDesc: '',
        organizerName:'',
        phone: ''
      },
    };
  },
  methods: {
    handleSubmit() {
      // Send POST request with Axios
      axios.post('http://localhost:3000/event_list', this.eventDetail)
        .then(response => {
          console.log('Post added successfully:', response.data);
        })
        .catch(error => {
          console.error('Error adding post:', error);
        });
    }
  }
};
</script>

<template>
    <h1>Add New Event</h1>
    <form>
    <FormKit type="form" :actions="false" @submit="handleSubmit">
    <FormKit
      type="button"
      label="Home"
      @click= "$router.push({ name: 'Home' })"
      
    />
    <h2>Help us with the following details to add an event</h2>
    <FormKit type="multi-step" tab-style="progress" :allow-incomplete="false">
    <FormKit type="step" name="Event Details">
    <h2>Let us begin with the event details</h2>
    <FormKit 
        type="text" 
        label="Organizing Club" 
        validation="required"
        placeholder="Enter Name of your club"
        v-model="eventDetail.clubName"
      />
      <FormKit 
        type="text" 
        label="Event Name" 
        validation="required"
        placeholder="Enter Name of Event"
        v-model="eventDetail.eventName"
      />
      <FormKit 
        type="date" 
        label="Date" 
        validation="required" 
        v-model="eventDetail.date"
      />
      <FormKit 
        type="select" 
        label="Mode of Conduct"
        placeholder="Select"
        :options="['Online','Offline']"
        validation="required"
        v-model="eventDetail.mode"
      />
      <FormKit 
        type="time"
        label="Time"
        placeholder="00:00" 
        validation="required" 
        help="Enter Time in 24 hours format"
        v-model="eventDetail.time"
      />
      <FormKit 
        type="text" 
        label="Venue/Platform" 
        validation="required"
        placeholder="Enter the Venue"
        v-model="eventDetail.venue"
      />
    </FormKit>

    <FormKit type="step" name="Registration Details">
    <h2>Please fill out the registration details</h2>
      <FormKit 
        type="text" 
        label="Registration Fee"
        placeholder="Enter registration fee"
        validation="required"
        help="Enter 0, if the event is free of cost"
        v-model="eventDetail.regFee"
      />
      <FormKit
        type="url"
        label="Registration Link"
        placeholder="https://www.example.com..."
        validation="required|url"
        v-model="eventDetail.regLink"
      />
      <FormKit 
        type="radio" 
        label="Issue of certificates"
        :options="['Yes', 'No']"
        validation="required"
        v-model="eventDetail.certificates"
      />
      <FormKit 
        type="date" 
        label="Last Date to register" 
        validation="required"
        v-model="eventDetail.regLastDate"
      />
    </FormKit>
    <FormKit type="step" name="Speaker Details">
    <h2>Next,Tell us about the speaker/mentor.</h2>
      <FormKit 
        type="text" 
        label="Speker/Mentor Name (Optional)"
        placeholder="Enter the speaker's/mentor's name"
        v-model="eventDetail.mentor"
      />
      <FormKit
        type="textarea"
        label="About the speaker/mentor(Optional)"
        placeholder="Write a short description about the speaker"
        v-model="eventDetail.aboutMentor"
      />
      <FormKit 
        type="textarea" 
        label="In colaboration with (Optional)"
        placeholder="Write about colaborators"
        v-model="eventDetail.collab"
      />
    </FormKit>

    <FormKit type="step" name="Contact Details">
      <h2>Thank you for taking the time to submit your event</h2>
      <p>Now we require your contact detials too.</p>
      <FormKit 
        type="textarea" 
        label="Event Description (Optional)" 
        placeholder="Enter a short description of the event"
        v-model="eventDetail.eventDesc"
      />
      <FormKit 
        type="text" 
        label="Name of Organizer" 
        validation="required"
        placeholder="Enter your name"
        v-model="eventDetail.organizerName"
      />
      <FormKit
        type="tel"
        label="Phone number"
        placeholder="xxxxxxxxxx"
        validation="matches:/^[0-9]{10}$/"
        :validation-messages="{
          matches: 'Phone number must be 10 digits long',
        }"
        validation-visibility="dirty"
        v-model="eventDetail.phone"
      />

      <template #stepNext>
        <FormKit type="submit"/>
      </template>
    </FormKit>
  </FormKit>
</FormKit>
</form>
</template>

<style>
h1{
    color:aliceblue;
    font-style:normal;
    font-family:  -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    text-align: center;
}
html,
body {
  min-height: 100%;
  
}
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  background: linear-gradient(to bottom right, #083b47, #011418);
}

form {
  box-sizing: border-box;
  background: white;
  padding: 1.0em;
  width: 40em;
  margin: 2.5em auto;
  max-width: calc(100% - 4.5em);
  border-radius: 0.5em;
}
</style>
