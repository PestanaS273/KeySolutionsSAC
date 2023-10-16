<template>
    <div class="landing-page">
        <h1>Key Solutions S.A.C</h1>
        <p class="landing-page-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non semper sapien, vel lacinia sapien. Sed euismod, nisl vel tincidunt bibendum, velit nulla bibendum mauris, vel lacinia sapien velit vel nunc.</p>
        <div class="landing-page-cards">
            <router-link to="/card1">
                <div class="landing-page-card">
                    <img src="card1-image.jpg" alt="Card 1 Image">
                    <h2>Card 1 Title</h2>
                </div>
            </router-link>
            <router-link to="/card2">
                <div class="landing-page-card">
                    <img src="card2-image.jpg" alt="Card 2 Image">
                    <h2>Card 2 Title</h2>
                </div>
            </router-link>
            <router-link to="/card3">
                <div class="landing-page-card">
                    <img src="card3-image.jpg" alt="Card 3 Image">
                    <h2>Card 3 Title</h2>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LandingPage',
}
</script>

<style>
/* Add your custom styles here */
.landing-page {
    /* Add styles for the landing page container */
}

.landing-page h1 {
    /* Add styles for the company name */
}

.landing-page-description {
    /* Add styles for the description text */
}

.landing-page-cards {
    /* Add styles for the cards container */
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
}

.landing-page-card {
    /* Add styles for each card */
    width: 30%;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
}

.landing-page-card:hover {
    /* Add styles for the card hover state */
    transform: translateY(-10px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
}

.landing-page-card img {
    /* Add styles for the card image */
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

.landing-page-card h2 {
    /* Add styles for the card title */
    font-weight: bold;
    font-size: 24px;
    margin: 20px;
}
</style>
