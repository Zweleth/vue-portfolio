<template lang="">
    <section class="icons">
        <i class="bi bi-whatsapp"><p>0712345678</p></i>
        <i class="bi bi-instagram"><p>Dracula_rsa</p></i>
        <i class="bi bi-telephone"><p>0722463344</p></i>
        <i class="bi bi-facebook"><p>Thandolwethu Beko</p></i>
        <i class="bi bi-envelope"><p>zwebeko@gmail.com</p></i>
        <i class="bi bi-linkedin"><p>Thandolwethu Beko</p></i>
    </section>
</template>
<script>
export default {
    name: 'socials'
}
</script>
<style scoped>
.icons i {
    display: flex;
    font-size: x-large;
    width: 1em;
    display: flex;
    flex-direction: row;

}

i p {
    color: rgba(0, 255, 255, 0);
    font-size: medium;
    justify-self: center;
}

.icons i:hover p {
    color: rgba(0, 255, 255, 1);
    transition: 0.5s;
}

.icons i:hover {
    animation: BlockPop 0.6s ease-in-out;
    color: aqua;

}

.icons {
    gap: 30px;
    display: flex;
    flex-direction: column;
}

@keyframes BlockPop {
    0% {
        scale: 1;
    }

    50% {
        scale: 1.15;
    }

    100% {
        scale: 1.05;
    }

}

</style>