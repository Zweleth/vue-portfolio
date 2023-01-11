<template lang="">
    <div class="page" id="home">
        <div class="sec1">
            <section class="left">
                <p>Hello there <br>welcome to my portfolio <br>feel free to navigate around <br>and witness greatness</p>
            </section>
            <section class="right">
                <p>Go on <br>use the navbar <br>view my resume, previous projects,<br> contact details <br>and many more </p>

            </section>
            
        </div>
    </div>
</template>
<script>
export default {
    name: 'home'
}
</script>
<style scoped>
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
  
</style>