<template lang="">
    <header class="navigation position-fixed w-100"> 
        <nav class="navbar navbar-expand-lg ">

            
            <div class="container-fluid">
               
                <i class="bi bi-sunglasses"></i>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNavDropdown">
                <ul class="navbar-nav ms-auto justify-content-center align-items-center">
                    <li class="nav-item n1">
                        <router-link to="/">Home</router-link>
                    </li>
                    <li class="nav-item n2">
                        <router-link to="/education">Education</router-link>
                    </li>
                    <li class="nav-item n3">
                        <router-link to="/contact">Contact</router-link>
                    </li>
                    <li class="nav-item dropdown n4">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        More
                        </a>
                        <ul class="dropdown-menu">
                            <li><router-link to="/about">About</router-link></li>
                            <li><router-link to="/projects">Projects</router-link></li>
                            <li><router-link to="/skills">Skills</router-link></li>
                            <li><router-link to="/testimonials">Testimonials</router-link></li>
                        </ul>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    </header>
</template>
<script>
export default {
    name: 'navbar'
}
</script>
<style scoped>
nav,
div,
i {
    color: gray;
}

.navbar-nav {
    margin-right: 4rem;
    
}

.navbar {
    background-color: #222;
    z-index: +3;
}

.bi-sunglasses {
    scale: 5;
    margin-left: 3rem;
    align-self: center;
}

img {

    width: 5rem;
    height: 2.7rem;
    filter: invert(45%) sepia(0%) saturate(0%) hue-rotate(10deg) brightness(94%) contrast(88%);
}

.nav-item {
    display: block;
    padding: 0 0.5rem 0 0.5rem;
}

.navbar-nav a {
    display: block;
    text-decoration: none;
    color: gray;

}

.navbar-nav a:hover {
    animation: Pop 0.6s ease-in-out;
    scale: 1.10;
    color: aqua;

}

.navbar-nav a.router-link-exact-active {
    color: rgba(0, 255, 255, 0.7);
}

.navbar:hover .n1 a {
    animation: navlinkPop 1s  ease-in-out;
}
.navbar:hover .n2 a {
    animation: navlinkPop 1s 0.2s  ease-in-out;
}
.navbar:hover .n3 a {
    animation: navlinkPop 1s 0.4s  ease-in-out;
}
.navbar:hover .n4 a {
    animation: navlinkPop 1s 0.6s ease-in-out;
}

.dropdown-menu:hover {
    animation: none;
}


.dropdown-menu {
    background-color: #222;
    z-index: +5;
    left: -2rem;
    padding-left: 1rem;
}

.dropdown-item {
    background: none;
}    
</style>