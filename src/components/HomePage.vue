<template>
    <div class="home-container">
        <img src="/public/logo.png" alt="CET Logo" class="logo" />
        <div class="main-container">
            <h3 class="title">All of CET's Club Activities</h3>
            <h3 class="title highlight">at one place!</h3>
            <p class="main-para">With over 50+ clubs in CET, get ready to immerse yourself in a world of culture and tech!</p>
            <div class="main-buttons">
                <button class="add-event-btn" @click="$router.push({ name: 'AddEventForm' })">+ Add Event</button>
                <button class="display-event-btn" @click="$router.push({ name: 'DisplayEvents' })">Display Events</button>
            </div>
        </div>
    </div>
</template>
   
<script>
   
</script>

<style scoped>
    .home-container {
        height: 100vh;
        background: url('/public/background.png') center center / cover;
    }

    .logo {
        padding: 20px 0px 0px 20px;
    }

    .main-container {
        height: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .title {
        font-family: 'Playfair Display', sans-serif;
        font-weight: 500;
        font-size: 4rem;
        text-align: center;
        margin: 0;
    }

    .highlight {
        color: #9747FF;
    }

    .main-para {
        font-size: 1.5rem;
        text-align: center;
        color: #332644;
        font-family: 'Poppins', sans-serif;
        padding: 0 20%;
    }

    .main-buttons {
        display: flex;
        justify-content: center;
    }

    .add-event-btn, .display-event-btn {
        padding: 15px 25px;
        border: 2px solid #9747FF;
        border-radius: 5px;
        font-family: 'Poppins', sans-serif;
        margin: 10px;
        cursor: pointer;
        font-size: 1.5rem;
        box-shadow: rgba(159, 26, 231, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
    }

    .add-event-btn {
        background-color: #9747FF;
        color: white;
    }

    .add-event-btn:hover {
        background-color: #7A2ECC;
    }

    .display-event-btn {
        background-color: white;
        color: #9747FF;
    }

    .display-event-btn:hover {
        background-color: #9747FF;
        color: white;
    }
</style>
   