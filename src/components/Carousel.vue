<template lang="">
    <div class="page" id="project">
        <div class="caro">
            <div id="carouselExampleFade" class="carousel slide carousel-fade w-80" data-bs-ride="carousel">
                
                <div class="carousel-inner h-80">
                    <h3>Previous projects</h3>
                    <div v-for="project in projects.slice(0,1)"  :key="project" class="carousel-item active ">
                        <div class="c-item ci1 ">
                            <h4>{{project.name}}</h4>
                            <section class="illustrations">
                                <div class="image img1" :style="project.picture1"></div>
                                <div class="image img2" :style="project.picture2"></div>
                            </section>
                            <section class="links">
                                <a :href=project.netlifyLink target="_blank">Visit site</a>
                                <a :href=project.githubLink target="_blank">Github file</a>
                            </section>
                            
                        </div>
                    
                    </div>
                    <div v-for="project in projects.slice(1)"  :key="project" class="carousel-item">
                        <div class="c-item ci1 ">
                            <h4>{{project.name}}</h4>
                            <section class="illustrations">
                                <div class="image img1" :style=project.picture1></div>
                                <div class="image img2" :style=project.picture2></div>
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
                    picture1: "background-image: url(https://i.postimg.cc/19VZywTm/Flip-Card-website.png);",
                    picture2: "background-image: url(https://i.postimg.cc/bJ4RRYzt/Screenshot-1.png);"
                },
                {
                    name:'ecommerce-website',
                    githubLink: 'https://github.com/Zweleth/ecommerce-website.git', 
                    netlifyLink: "https://hallogear.netlify.app/",
                    picture1: "background-image: url(https://i.postimg.cc/rsFyJHTX/hall2.png);",
                    picture2: "background-image: url(https://i.postimg.cc/pTVtbn6K/modal.png);"
                },
                {
                    name:'Online cookie store',
                    githubLink: 'https://github.com/Zweleth/exercise.git', 
                    netlifyLink: "https://cookiesncream.netlify.app/",
                    picture1: "background-image: url(https://i.postimg.cc/HnFdHhQM/Screenshot-3.png);",
                    picture2: "background-image: url(https://i.postimg.cc/pLLrZgsW/Screenshot-4.png);"
                },
                {
                    name:'Calculator',
                    githubLink: 'https://github.com/Zweleth/Calculator.git', 
                    netlifyLink: "https://thandolwethu-calculator.netlify.app/",
                    picture1: "background-image: url(https://i.postimg.cc/05z3FpwL/Calculator-Pic.png);",
                    picture2: "background-image: url(https://i.postimg.cc/qqwJCRrt/Calculation.png);"
                },
                {
                    name:'Point of sale',
                    githubLink: 'https://github.com/Zweleth/PointOfSale.git', 
                    netlifyLink: "https://thando-pos.netlify.app/",
                    picture1: "background-image: url(https://i.postimg.cc/TPKzvSNv/POS-products.png);",
                    picture2: "background-image: url(https://i.postimg.cc/J0FXvssL/POS-cart.png);"
                }
                ,
                {
                    name:'Bootstrap portfolio',
                    githubLink: 'https://github.com/Zweleth/bootstrap-portfolio.git', 
                    netlifyLink: "https://thandolwethu-portfolio.netlify.app/",
                    picture1: "background-image: url(https://i.postimg.cc/3RMtvbRt/bs-portfolio.png);",
                    picture2: "background-image: url(https://i.postimg.cc/L8wTc0zm/portfolio-contact.png);"
                }
            ]
        }
    }
}
</script>
<style scoped>

</style>