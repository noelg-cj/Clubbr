<template>
    <h1>Welcome to clubbr!</h1>
    <h3>Get access all the events happening</h3>
    <h3>at CET in one place!</h3>
    <button class="add-event-btn" @click="$router.push({ name: 'AddEventForm' })">Add Event</button>
    <button class="display-event-btn" @click="$router.push({ name: 'DisplayEvents' })">Display Events</button>
</template>
   
<script>
   
</script>

<style scoped>
h1{
    text-align: left;
    color: aliceblue;
    margin-top:50px;
    padding:20px;
    font-size: xx-large;
    display:flex;
}
h3{
    text-align: left;
    color: aliceblue;
    margin-left:30px;
}
button{
    padding:20px;
    border-radius: 4px;
    color:rgb(11, 8, 3);
    background-color: blanchedalmond;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
}
</style>
   