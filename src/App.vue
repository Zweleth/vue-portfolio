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
/*=========================================================================================================*/
/*Homd*/
/*=========================================================================================================*/

.sec1 {
    width: 100vw;
    height: 100vh;
}

.right {
    background-color: rgba(0, 255, 255, 0.264);
    width: 50%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: gray;
    font-size: small;
    animation: landingSidesShrink 0.6s ease-in-out forwards;

}

.left {
    background-color: rgba(0, 0, 0, 0.264);
    width: 50%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: gray;
    font-size: small;
    animation: landingSidesShrink 0.6s ease-in-out forwards;
}

.sec1 p {
    text-align: center;
    animation: Shrink 0.6s ease-in-out forwards;
}


.right:hover {
    animation: landingSidesExpand 0.6s ease-in-out forwards ;
    color: gray;

}

.right:hover p {
    animation: Expand 0.6s ease-in-out forwards;
    
}

.left:hover {
    animation: landingSidesExpand 0.6s ease-in-out forwards ;
    color: gray;

}

.left:hover p {
    animation: Expand 0.6s ease-in-out forwards;
}

@keyframes Expand {
    0% {
        scale: 1;
    }

    80% {
        scale: 3.8;
    }

    90% {
        scale: 3.85;
    }

    98% {
        scale: 3.95;
    }

    100% {
        scale: 4;
    }

}

@keyframes Shrink {
    0% {
        scale: 4;
    }

    2% {
        scale: 3.95;
    }

    10% {
        scale: 3.85;
    }

    20% {
        scale: 3.8;
    }

    100% {
        scale: 1;
    }

}

@keyframes landingSidesExpand {
    0%{
      width: 50%;
    }
    100%{
      width: 90%;
    }
  }

  @keyframes landingSidesShrink{
    0%{
      width: 90%;
    }
    100%{
      width: 50%;
    }
  }

/*=========================================================================================================*/
/*Education*/
/*=========================================================================================================*/

.sec2 {
    display: flex;

}

.sec2>section {
    width: 100vw;

}

.blocks section {
    border: 2px solid rgba(128, 128, 128, 0.063);
    border-radius: 10px;
    color: gray;
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    padding: 2px;

}

.blocks {
    height: 100%;
    padding: 89px 20px 25px 20px;
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-auto-rows: repeat(5, 1fr);
    grid-column-gap: 1em;
    grid-row-gap: 1em;

}

.a {
    grid-column: 1/4;

}

.b {
    grid-column: 4/7;
}

.c {
    grid-column: 7/10;
}

.d {
    grid-column: 10/12;
}

.e {
    grid-column: 1/3;
}

.f {
    grid-column: 3/6;
}

.g {
    grid-column: 6/9;
}

.h {
    grid-column: 9/12;
}

.i {
    grid-column: 1/2;
}

.j {
    grid-column: 2/5;
}

.k {
    grid-column: 5/8;
}

.l {
    grid-column: 8/11;
}

.m {
    grid-column: 11/12;
}

.n {
    grid-column: 1/4;
}

.o {
    grid-column: 4/7;
}

.p {
    grid-column: 7/10;
}

.q {
    grid-column: 10/12;
}

.r {
    grid-column: 1/3;
}

.s {
    grid-column: 3/6;
}

.t {
    grid-column: 6/9;
}

.u {
    grid-column: 9/12;
}

#aa,
#ff,
#kk,
#pp,
#uu {
    border: 2px solid gray;
    border-radius: 10px;
    color: gray;
    display: flex;
    flex-direction: column;

    align-items: center;
}

#aa:hover,
#ff:hover,
#kk:hover,
#pp:hover,
#uu:hover {
    border-color: rgba(0, 255, 255, 0.5);
    color: rgba(0, 255, 255, 0.5);
    animation: BlockPop 0.6s ease-in-out;
    scale: 1.05;
}



.sec2>section>section:hover {
    border-color: rgba(128, 128, 128, 0.3);
    transition: 0.6s;
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

/*=========================================================================================================*/
/*Contact*/
/*=========================================================================================================*/
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

.sec4 {
    justify-content: space-between;
    justify-content: center;
}

.dh {
    display: flex;
    padding-right: 3rem;
    border: none;
    border-right: 3px solid gray;
    height: 70vh;
    align-items: center;
    margin-right: 3rem;
}



.details {
    display: flex;
    justify-content: space-between;
    width: 35rem;

}

form {
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.548);
    align-items: center;
    width: 24rem;
    border-radius: 10px;
    padding: 2rem 0 2rem 0;

}

form div {
    align-items: center;
}

form div {
    width: 90%;
}

.form-control,
.inp {
    border: none;
    border-bottom: 3px solid gray;
    background: none;
    width: 100%;
    color: gray;
    border-radius: 0;
    outline: none;
}

.form-control:hover,
.form-control:focus {
    outline: none;
    background: none;
    border-color: aqua;
    -webkit-box-shadow: none;
    box-shadow: none;

}

form p {
    align-self: flex-start;
}

form button {
    background: none;
    border-radius: 5px;
    width: 50%;
    height: 30px;
    color: gray;
    border-color: gray;
}

form button:hover {
    animation: Pop 0.6s ease-in-out forwards;
    border-color: aqua;
    color: aqua;
}

form button:active {
    width: 48%;
    height: 28px;
}

form button {
    background: none;
    border-radius: 5px;
    width: 50%;
    height: 30px;
    color: gray;
    border-color: gray;
}

form button:hover {
    border-color: aqua;
    color: aqua;
}

form button:active {
    width: 48%;
    height: 28px;
}

/*=========================================================================================================*/
/*About*/
/*=========================================================================================================*/

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

/*=========================================================================================================*/
/*Project*/
/*=========================================================================================================*/

.caro {
    width: 70vw;
    height: 92vh;
    padding-top: 60px;
}

.c-item {
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
}

.c-item .image {
    border: 2px solid rgba(128, 128, 128, 0.8);
    border-radius: 2px;
    width: 23rem;
    height: 13rem;

}

.carousel-inner h3 {
    font-size: xx-large;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
}

.illustrations {
    display: flex;
    gap: 2rem;
}

.ci1 .img1 {
    background-image: url(https://i.postimg.cc/19VZywTm/Flip-Card-website.png);
    background-position: center;
    background-repeat: none;
    background-size: cover;
}

.ci1 .img2 {
    background-image: url(https://i.postimg.cc/bJ4RRYzt/Screenshot-1.png);
    background-position: center;
    background-repeat: none;
    background-size: cover;
}

.ci2 .img1 {
    background-image: url(https://i.postimg.cc/rsFyJHTX/hall2.png);
    background-position: center;
    background-repeat: none;
    background-size: cover;
}

.ci2 .img2 {
    background-image: url(https://i.postimg.cc/pTVtbn6K/modal.png);
    background-position: center;
    background-repeat: none;
    background-size: cover;
}

.ci3 .img1 {
    background-image: url(https://i.postimg.cc/HnFdHhQM/Screenshot-3.png);
    background-position: center;
    background-repeat: none;
    background-size: cover;
}

.ci3 .img2 {
    background-image: url(https://i.postimg.cc/pLLrZgsW/Screenshot-4.png);
    background-position: center;
    background-repeat: none;
    background-size: cover;
}

.ci3 .img3 {
    background-image: url(https://i.postimg.cc/qqryM14N/Screenshot-5.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.ci4 .img1 {
    background-image: url(https://i.postimg.cc/05z3FpwL/Calculator-Pic.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.ci5 .img1 {
    background-image: url(https://i.postimg.cc/TPKzvSNv/POS-products.png);
    background-position: center;
    background-repeat: none;
    background-size: cover;
}

.ci5 .img2 {
    background-image: url(https://i.postimg.cc/J0FXvssL/POS-cart.png);
    background-position: center;
    background-repeat: none;
    background-size: cover;
}

.ci5 .img3 {
    background-image: url(https://i.postimg.cc/Vs0X0Fps/POS-admin.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}



.c-item a {
    border: 2px solid gray;
    border-radius: 5px;
    padding: 5px;
    text-align: center;
    text-decoration: none;
    color:gray
}

.links {
    height: fit-content;
    display: flex;
    flex-direction: row;
    gap: 1em;
}

.links a:hover {
    animation: Pop 0.6s ease-in-out;
    border-color: aqua;
    color: aqua;
    scale: 1.10;
}

.carousel-control-prev,
.carousel-control-next {
    max-height: 30vh;
    margin-top: auto;
    margin-bottom: auto;
}

#carouselExampleFade {
    width: 90vw;
}

/*=========================================================================================================*/
/*Skills*/
/*=========================================================================================================*/

.skills-text {
    padding-right: 3rem;
    margin-right: 3rem;
    border-right: 2px solid gray;
    height: 50vh;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: xx-large;
}

.skills-sec {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

}

.skills-menu {
    background-color: rgba(0, 0, 0, 0.5);
    padding: 1rem 1rem 3rem 1rem;
    border-radius: 10px;
    width: 450px;
}

.skills-menu i {
    margin-top: 40px;
    margin-bottom: 5px;
    color: gray;
    scale: 1.7;
}

.progress-bar {
    background-color: rgba(0, 0, 0, 0.9);
    width: 100%;
    height: 3px;
    border-radius: 1.5px;
    margin-top: 0.5rem;

}

.progress-bar div {
    height: 3px;
    border-radius: 1.5;
    width: 0%;
    background-color: aqua;
}
.skills-icon p {
    padding-top: 3rem;
    padding-left: 0.5rem;
}

.skills-menu span {
    color: transparent;
}

.bar {
    display: flex;
    align-items: center;
}
.skills-icon {
    display: flex;
    align-items: center;
    height: 3rem;
}
.skills-menu:hover i {
    animation: coloraqua 1s ease-in forwards;
}

.skills-menu:hover p {
    animation: coloraqua 1s ease-in forwards;
}

.skills-menu:hover span {
    animation: showPercentage 1s 0.8s ease-in forwards;
}


.skills-menu:hover .html {
    animation: html 2s cubic-bezier(0.1, 0.1, 0.001, 1) forwards;
}


.skills-menu:hover .css {
    animation: css 2s cubic-bezier(0.1, 0.1, 0.001, 1) forwards;

}

.skills-menu:hover .javascript {
    animation: javascript 2s cubic-bezier(0.1, 0.1, 0.001, 1) forwards;

}

.skills-menu:hover .bootstrap {
    animation: bootstrap 2s cubic-bezier(0.1, 0.1, 0.001, 1) forwards;

}

.skills-menu:hover .python {
    animation: python 2s cubic-bezier(0.1, 0.1, 0.001, 1) forwards;

}


@keyframes html {
    100% {
        width: 92%;
    }

}

@keyframes css {
    100% {
        width: 89%;
    }

}

@keyframes javascript {
    100% {
        width: 54%;
    }

}

@keyframes bootstrap {
    100% {
        width: 72%;
    }

}

@keyframes python {
    100% {
        width: 55%;
    }

}

@keyframes coloraqua {
    100% {
        color: aqua;
    }
}

@keyframes showPercentage {
    0% {
        color: transparent;
    }
    50% {
        color: gray;
    } 
    100% {color:aqua}   
}

/*=========================================================================================================*/
/*Testimonial*/
/*=========================================================================================================*/

.test-sec {
    flex-direction: column;
    gap:2rem;
}

.test-sec h5 {
    font-size: xx-large;
}

.testimonials {
    display: flex;
    gap: 2rem;
}

.card-outer {
    width: 250px;
    height: 350px;
    content-visibility: auto;
}

.testimonial {
    position: relative;
    width: 250px;
    height: 350px;
    border: none;

    transition: transform 0.8s;
    transform-style: preserve-3d;
}

.front,
.back {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid gray;
    border-radius: 10px;
    backface-visibility: hidden;
}

.testimgback {
    width: 4rem;
    height: 4rem;
    border-radius: 2rem;

    margin-bottom: 0.2rem;
}

.testimgfront {
    width: 10rem;
    height: 10rem;
    border-radius: 5rem;

    margin-bottom: 3rem;
}

.t1 .testimgfront,
.t1 .testimgback {
    
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;


}

.t2 .testimgfront,
.t2 .testimgback {
    background-image: url(https://i.postimg.cc/jjKjYxT7/My-project-1-10.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
   

}

.t3 .testimgfront,
.t3 .testimgback {
    background-image: url(https://i.postimg.cc/D0D46KJQ/Joel-Profile.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    
}

.t4 .testimgfront,
.t4 .testimgback {
    background-image: url(https://i.postimg.cc/fyJBpgfc/IMG-20220708-WA0014.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    
}

.front {
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;

}

.back {
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    text-align: center;
    transform: rotateY(180deg);

}

.card-outer:hover>.testimonial {

    transform: rotateY(180deg);
}

.card-outer:hover .front,
.card-outer:hover .back {
    border-color: aqua;
}

/*footer*/


footer {
    position: fixed;
    bottom: -10px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
}

.footerimg {
    background-image: url(https://i.postimg.cc/kGJtkkGX/My-project-1-2.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 200px;
    height: 80px;
    bottom: -15px;
    position: fixed;
    margin-bottom: 1rem;
    scale: 1.5;
    left: -3rem;
}

.initials {
    display: flex;
    flex-direction: column;
}

.footer-links {
    display: flex;
    gap: 0.7rem;
    margin-right: 2rem;
}

.footer-links i {
    scale: 1.1;
    color: gray;
}

.footer-links i:hover {
    scale: 1.3;
    animation: none;
    animation: iconAqua 1s ease-in-out forwards;
}

.fa-facebook-f {
    animation: iconsPop 2s ease-in-out infinite;
}
.fa-twitter {
    animation: iconsPop 2s 0.3s ease-in-out infinite;
}
.fa-linkedin-in {
    animation: iconsPop 2s 0.6s ease-in-out infinite;
}
.fa-instagram {
    animation: iconsPop 2s 0.9s ease-in-out infinite;
}

@keyframes iconAqua {
    100% {
        color: aqua;
        scale : 1.5;
    }
}

@keyframes iconsPop {
    0%{
        scale: 0.8;
    }
    50%{
        scale: 1.5;
    }
    100%{
        scale: 0.8;
    }
}
/**/
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
/**/

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
