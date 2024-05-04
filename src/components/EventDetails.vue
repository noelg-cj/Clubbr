<script setup>

</script>

<template>
    <h1>Here we put the details of the chosen event</h1>
    <p>Click to return to home</p>
    <button class="home-btn" @click="$router.push({ name: 'Home' })">Home</button>
</template>