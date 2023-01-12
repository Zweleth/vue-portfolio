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
  transition: 0.6s;
  
}

header,
main,
footer {
    grid-column: 1 / -1;
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

.ts-smallscreen {
  display: none;
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

/* */
@media screen and (max-width:720px) {
    
  main {
      flex-direction: column;
  }

  .container-fluid i {
      scale: 3;
  }

  .navbar:hover .nav-item a {
      animation: none;
  }

  /* Landing section */
  .sec1 {
      flex-direction: column;
  }

  .right,
  .left,
  .right:hover,
  .left:hover {
      width: 100vh;
  }

  .sec1 p {
      scale: 1.5;
      color: gray;

  }

  .right:hover p,
  .left:hover p {
      scale: 1.5;
      color: gray;
      animation: none;
      scale: 1.5;
  }

  footer .text,
  footer .footer-links {
      display: none;
  }

  .footerimg {
      bottom: -35px;
      scale: 1.1;
  }

  /* Education section */

  .blocks .block {
      display: none;
  }

  #aa,
  #ff,
  #kk,
  #pp,
  #uu {
      width: 100%;
      grid-column: 1 / -1;

  }

  .block p {
      display: none;
  }

  .block:hover p{
      display: block;
  }

  .sec2 {
      padding: 4rem 0 4rem 0;
  }

  /* Contact section */

  .sec4 {
      width: 100vw;
      height: 70vh;
      padding: 0;
      margin: 0;
  }

  .details {
      display: flex;
      flex-direction: column;
      margin-left: 0;
      justify-content: center;
      width: 100vw;
      margin-top: 5rem;


  }

  .icons {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap:0.2rem;
      padding: 0;
      margin: 0;
      
  }

  form {
      width: 100%;
      padding: 0;
  }

  form input {
      padding: 0;
  }

  .icons i {
      width: 50%;
  }

  .icons p {
      margin: 0;
  }

  .dh {
      display: none;
  }

  /* About section */

  .aboutimg {
      display: none;
  }

  .About-heading {
      display: flex;
      align-items: center;
      gap: 0.5rem;

  }

  .more {
      padding-left: 1rem;
      padding-right: 1rem;
  }

  .more p {
      font-size: small;
  }

  .profile-pic {
      width: 5rem;
      height: 5rem;
      border-radius: 3rem;
      background-image: url(https://i.postimg.cc/pdZgCNCv/My-project-1-6.png);
      background-size: 9rem;
      background-repeat: no-repeat;
      background-position: center;
      border: 1px solid gray;
  }

  .caro .img2,
  .caro .img3 {
      display: none;
  }

  .caro .links {
      flex-direction: column;
      width: 50%;
  }

  /* Skills section */

  .skills-sec {
      flex-direction: column;

  }

  .skills-text {
      border: none;
      margin: 0;
      margin-top: 5rem;
      max-width: 100vw;
      font-size: medium;
  }

  .skills-menu {
      max-width: 100vw;
  }

  /* Testimonials */
  .test-sec {
      display: none;
  }

  .ts-smallscreen {
      display: flex;
      flex-direction: column;
      gap:1rem;
      padding: 1rem;
      padding-top: 4rem;
  }

  .smalltest {
      width: 100%;
      border: 2px solid gray;
      border-radius: 10px;
      height: 10%;
      font-size: small;
  }

  .smalltest p {
      display: none;
  }

  .smalltest:hover {
      height: 100%;
  }

  .smalltest:hover p {
      display: block;
  }
}

@media screen and (max-width:420px) {
  .container-fluid i{
      scale: 2;
      position: relative;
      left: -2rem;
  }

  .about-text p {
      margin: 0;
  }

  .more {
      padding-top: 2rem;
  }

  .navbar:hover .nav-item a {
      animation: none;
  }
}

/* ======================================================================================================================================== */
/* Responsiveness */
/* Medium */
/* ======================================================================================================================================== */

@media screen and (min-width:721px) and (max-width:1280px) {

  main {
      flex-direction: column;
  }

  .navbar:hover .nav-item a {
      animation: none;
  }

  .container-fluid i {
      scale: 4;
  }

  /* Landing page */
  .right:hover p,
  .left:hover p {
      scale: 2.2;
      animation: none;
  }

  /* Education */
  .blocks .block {
      display: none;
  }

  .block p {
      display: none;
  }

  .block:hover p{
      display: block;
  }

  /* Contact */

  .dh {
      display: none;
  }

  .sec4 {
      width: 100%;
      padding: 0;
      padding-left: 1rem;
      justify-content: center;
      align-items: center;
  }

  .more h5 {
      margin: 0;
  }

  .about-text {
      margin-top: 2rem;
  }

  .more .aboutimg {
      height: 20rem;
  }

  .caro .img3 {
      display: none;
  }

  .skills-text p {
      scale: 0.6;
      padding: 0;
  }

  .skills-text {
      padding: 0;
  }

  .test-sec {
      display: none;
  }

  .ts-smallscreen {
      display: flex;
      flex-direction: column;
      gap:1rem;
      padding: 1rem;
      padding-top: 4rem;
  }

  .smalltest {
      width: 100%;
      border: 2px solid gray;
      border-radius: 10px;
      height: 10%;
      font-size: medium;
  }

  .smalltest p {
      display: none;
  }

  .smalltest:hover {
      height: 100%;
  }

  .smalltest:hover p {
      display: block;
  }
}

</style>
