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

</style>