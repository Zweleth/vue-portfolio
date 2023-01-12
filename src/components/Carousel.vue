<template lang="">
    <div class="page" id="project">
        <div class="caro">
            <div id="carouselExampleFade" class="carousel slide carousel-fade w-80" data-bs-ride="carousel">
                
                <div class="carousel-inner h-80">
                    <h3>Previous projects</h3>
                    <div v-for="project in projects.slice(4)"  :key="project" class="carousel-item active ">
                        <div class="c-item ci1 ">
                            <h4>{{project.name}}</h4>
                            <section class="illustrations">
                                <img class="image img1" :src=project.picture1>
                                <img class="image img2" :src=project.picture2>
                            </section>
                            <section class="links">
                                <a :href=project.netlifyLink target="_blank">Visit site</a>
                                <a :href=project.githubLink target="_blank">Github file</a>
                            </section>
                            
                        </div>
                    
                    </div>
                    <div v-for="project in projects.slice(0,4)"  :key="project" class="carousel-item">
                        <div class="c-item ci1 ">
                            <h4>{{project.name}}</h4>
                            <section class="illustrations">
                                <img class="image img1" :src=project.picture1>
                                <img class="image img2" :src=project.picture2>
                            </section>
                            <section class="links">
                                <a :href=project.netlifyLink target="_blank">Visit site</a>
                                <a :href=project.githubLink target="_blank">Github file</a>
                            </section>
                            
                        </div>
                    
                    </div>
                    <!-- <div class="carousel-item ">
                        <div class="c-item ci2">
                            <h4>ecommerce-website</h4>
                            <section class="illustrations">
                                <section class="image img1"></section>
                                <section class="image img2"></section>
                            </section>
                            <section class="links">
                                <a href="https://hallogear.netlify.app/" target="_blank">Visit site</a>
                                <a href="https://github.com/Zweleth/ecommerce-website.git" target="_blank">Github file</a>
                            </section>
                        </div>
                    
                    
                    </div>
                    <div class="carousel-item  ">
                        <div class="c-item ci3">
                            <h4>Online cookie store</h4>
                            <section class="illustrations">
                                <section class="image img1"></section>
                                <section class="image img2"></section>
                                <section class="image img3"></section>
                            </section>
                            <section class="links">
                                <a href="https://cookiesncream.netlify.app/" target="_blank">Visit site</a>
                                <a href="https://github.com/Zweleth/exercise.git" target="_blank">Github file</a>
                            </section>
                        </div>
                    
                    </div>
                    <div class="carousel-item  ">
                        <div class="c-item ci4">
                            <h4>Calculator</h4>
                            <section class="illustrations">
                                <section class="image img1"></section>
                            </section>
                            <section class="links">
                                <a href="https://thandolwethu-calculator.netlify.app/" target="_blank">Visit site</a>
                                <a href="https://github.com/Zweleth/Calculator.git" target="_blank">Github file</a>
                            </section>
                        </div>
                    
                    </div>
                    <div class="carousel-item  ">
                        <div class="c-item ci5">
                            <h4>Point Of Sale</h4>
                            <section class="illustrations">
                                <section class="image img1"></section>
                                <section class="image img2"></section>
                                <section class="image img3"></section>
                            </section>
                            <section class="links">
                                <a href="https://thando-pos.netlify.app/" target="_blank">Visit site</a>
                                <a href="https://github.com/Zweleth/PointOfSale.git" target="_blank">Github file</a>
                            </section>
                        </div>
                    
                    </div> -->
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-control-prev-icon " aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-control-next-icon me-0" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
   </div> 
</template>
<script>
export default {
    name: 'carousel',
    data() {
        return {
            projects : [
                {
                    name:'Flip card',
                    githubLink: 'https://github.com/Zweleth/flipCard.git', 
                    netlifyLink: "https://glistening-smakager-136127.netlify.app/",
                    picture1: "https://i.postimg.cc/19VZywTm/Flip-Card-website.png",
                    picture2: "https://i.postimg.cc/bJ4RRYzt/Screenshot-1.png"
                },
                {
                    name:'ecommerce-website',
                    githubLink: 'https://github.com/Zweleth/ecommerce-website.git', 
                    netlifyLink: "https://hallogear.netlify.app/",
                    picture1: "https://i.postimg.cc/rsFyJHTX/hall2.png",
                    picture2: "https://i.postimg.cc/pTVtbn6K/modal.png"
                },
                {
                    name:'Online cookie store',
                    githubLink: 'https://github.com/Zweleth/exercise.git', 
                    netlifyLink: "https://cookiesncream.netlify.app/",
                    picture1: "https://i.postimg.cc/HnFdHhQM/Screenshot-3.png",
                    picture2: "https://i.postimg.cc/pLLrZgsW/Screenshot-4.png"
                },
                {
                    name:'Calculator',
                    githubLink: 'https://github.com/Zweleth/Calculator.git', 
                    netlifyLink: "https://thandolwethu-calculator.netlify.app/",
                    picture1: "https://i.postimg.cc/05z3FpwL/Calculator-Pic.png",
                    picture2: "https://i.postimg.cc/qqwJCRrt/Calculation.png"
                },
                {
                    name:'Point of sale',
                    githubLink: 'https://github.com/Zweleth/PointOfSale.git', 
                    netlifyLink: "https://thando-pos.netlify.app/",
                    picture1: "https://i.postimg.cc/TPKzvSNv/POS-products.png",
                    picture2: "https://i.postimg.cc/J0FXvssL/POS-cart.png"
                }
            ]
        }
    }
}
</script>
<style scoped>
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
</style>