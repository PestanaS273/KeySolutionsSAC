<template>
    <footer>
        <div class="footer-container">
            <div class="footer-column">
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                    </ul>
                </nav>
            </div>
            <div class="footer-column">
                <nav>
                    <ul>
                        <li><a href="https://www.facebook.com/your-facebook-page">Facebook</a></li>
                        <li><a href="https://www.twitter.com/your-twitter-page">Twitter</a></li>
                        <li><a href="https://www.instagram.com/your-instagram-page">Instagram</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterVue'
}
</script>
<style scoped>
    footer {
        background-color: transparent;
        color: #ccc;
        padding: 1rem;
        border-top: 2px solid #ccc;
    }

    .footer-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .footer-column {
        width: 50%;
    }

    nav ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    nav ul li {
        margin-bottom: 1rem;
    }

    a {
        color: darkgrey;
        text-decoration: none;
    }

    a:hover {
        color: darkgrey;
        text-decoration: none;
    }
</style>
