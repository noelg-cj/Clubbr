<script setup>
</script>

<template>
    <h1>Add New Event</h1>
    <form>
    <FormKit type="form" :actions="false">
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
      />
      <FormKit 
        type="text" 
        label="Event Name" 
        validation="required"
        placeholder="Enter Name of Event"
      />
      <FormKit 
        type="date" 
        label="Date" 
        validation="required" 
      />
      <FormKit 
        type="select" 
        label="Mode of Conduct"
        placeholder="Select"
        :options="['Online','Offline']"
        validation="required"
      />
      <FormKit 
        type="time"
        label="Time"
        placeholder="00:00" 
        validation="required" 
        help="Enter Time in 24 hours format"
      />
      <FormKit 
        type="text" 
        label="Venue/Platform" 
        validation="required"
        placeholder="Enter the Venue"
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
      />
      <FormKit
        type="url"
        label="Registration Link"
        placeholder="https://www.example.com..."
        validation="required|url"
      />
      <FormKit 
        type="radio" 
        label="Issue of certificates"
        :options="['Yes', 'No']"
        validation="required"
      />
      <FormKit 
        type="date" 
        label="Last Date to register" 
        validation="required" 
      />
    </FormKit>
    <FormKit type="step" name="Speaker Details">
    <h2>Next,Tell us about the speaker/mentor.</h2>
      <FormKit 
        type="text" 
        label="Speker/Mentor Name (Optional)"
        placeholder="Enter the speaker's/mentor's name"
      />
      <FormKit
        type="textarea"
        label="About the speaker/mentor(Optional)"
        placeholder="Write a short description about the speaker"
      />
      <FormKit 
        type="textarea" 
        label="In colaboration with (Optional)"
        placeholder="Write about colaborators"
      />
    </FormKit>

    <FormKit type="step" name="Contact Details">
      <h2>Thank you for taking the time to submit your event</h2>
      <p>Now we require your contact detials too.</p>
      <FormKit 
        type="textarea" 
        label="Event Description (Optional)" 
        placeholder="Enter a short description of the event"
      />
      <FormKit 
        type="text" 
        label="Name of Organizer" 
        validation="required"
        placeholder="Enter your name"
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
      />

      <template #stepNext>
        <FormKit type="submit" />
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
