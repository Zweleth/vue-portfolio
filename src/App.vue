<template>
  <preload></preload>
  <navbar></navbar>
  <main>
    <router-view/>
  </main>
  <initials></initials>
  
</template>
<script>
import navbar from '@/components/Navbar.vue'
import initials from './components/Footer.vue';
import preload from '@/components/Preload.vue';

export default {
  components: {
    navbar,
    initials,
    preload
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');



#app {
  font-family: 'Quicksand', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: gray;
  overflow: hidden;
  
}

main>div>div {
  font-family: 'Quicksand', sans-serif;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image:
      linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
      url(https://i.postimg.cc/0yTZqpHX/wallpaperflare-com-wallpaper.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;

}

.loader {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: +5;
  height: 100vh;
  width: 100vw;
  animation: loadingFade 6s ease-in-out forwards;
}

.dots {
  width: 10rem;
  height: 6rem;
  z-index: +3;
}

.dot {
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
}

.aqua-dot {
  background-color: aqua;
  animation: preLoad2 1s ease-in-out infinite;
  
}

.gray-dot {
  background-color: gray;
  animation: preLoad 1s ease-in-out infinite;
}

@keyframes loadingFade {
  0%{
      opacity: 100%;
      
  }
  80%{
      opacity: 100%;
  }
  99%{
      scale:1;
      z-index: +5;
      opacity: 0;
      display: none;
  }
  100%{
      z-index: -1;
      display: none;
      opacity: 0;
  }
}

@keyframes preLoad {
  0%{
      transform: translateX(0);
      scale:1;
      z-index: 1;
  }
  25%{
      scale:1.6;
      z-index: 1;
  }
  50%{
      transform: translateX(-2rem);
      scale:1;
      z-index: 0;
  }
  75% {
      scale:0.7;
      z-index: 0;
  }
  100%{
      transform: translateX(0);
      scale:1;
      z-index: 0;
  }
}

@keyframes preLoad2 {
  0%{
      transform: translateX(0);
      scale:1;
      z-index: 0;
  }
  25%{
      scale:0.7;
      z-index: 0;
  }
  50%{
      transform: translateX(2rem);
      scale:1;
      z-index: 1;
  }
  75% {
      scale:1.6;
      z-index: 1;
  }
  100%{
      transform: translateX(0);
      scale:1;
      z-index: 1;
  }
}

@keyframes navlinkPop {
  0%{
      transform: translateY(0);
      color: gray;
  }
  25%{
      transform: translateY(-0.5rem);
  }
  50%{
      color:rgba(0, 255, 255, 0.6);
  }
  75%{
      transform: translateY(0.3rem);
  }
  100%{
      transform: translateY(0);
      color: gray;
  }
}

@keyframes Pop {
  0% {
      scale: 1;
      color: gray
  }

  70% {
      scale: 1.15;
      color: aqua
  }

  100% {
      scale: 1.10;
  }
}

header {
  z-index: +3;
}
</style>
