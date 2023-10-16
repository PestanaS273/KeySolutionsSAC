<template>
    <header>
        <nav>
            <ul>
                <li class="nav-item"><router-link to="/" class="nav-link">Home</router-link></li>
                <li class="nav-item"><router-link to="/about" class="nav-link">About Us</router-link></li>
                <div class="search-container">
                    <input type="text" placeholder="Search...">
                </div>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'HeaderVue'
}
</script>

<style scoped>
header {
    background-color: #333;
    color: #fff;
    padding: 10px;
    margin-top: 0px;
}

nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
}

nav li {
    float: left;
    margin-right: 20px;
}

nav li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    transition: background-color 0.3s ease;
}

nav li a:hover {
    background-color: #111;
}

.search-container {
    float: right;
    margin-top: 10px;
}

.search-container input[type=text] {
    padding: 6px;
    margin-top: 1px;
    font-size: 17px;
    border: none;
    border-radius: 5px;
}

.search-container input[type=text]:focus {
    outline: none;
    box-shadow: 0 0 8px 0 #bbb;
}

/* Add styles for nav links */
.nav-link {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    transition: background-color 0.3s ease;
    border-radius: 5px;
    cursor: pointer;
    
}

/* Add hover styles for nav links */
.nav-link:hover {
    background-color: #555;
    color: #fff;
    transform: scale(1.1);
}
</style>
