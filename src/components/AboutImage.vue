<template lang="">
    <section class="aboutimg">

    </section>
</template>
<script>
export default {
name: 'aboutimage'   
}
</script>
<style scoped>
.aboutimg:hover {
    animation: Unblur 0.6s ease-in-out forwards;
}

@keyframes Unblur {
    0% {
        filter: blur(5px);
    }

    100% {
        filter: blur(0);
    }
}

@keyframes blur {
    100% {
        filter: blur(5px);
    }
}

.aboutimg {
    background-image: url(https://i.postimg.cc/NjQp69LZ/C11-Thandolwethu-Beko-1-1-Photo-Room-png-Photo-Room.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    z-index: 0;
    width: 600px;
    height: 600px;
    padding-bottom: 5rem;
    margin-bottom: 5rem;
    animation: blur 0.6s ease-in-out forwards;
}
</style>