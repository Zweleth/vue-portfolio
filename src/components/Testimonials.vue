<template lang="">
    <div class="page" id="testimonials">
        <div class="ts-smallscreen">
            <div v-for="person in arrTestimonials" :key="person" class="smalltest" >
                <h6>{{person.name}}</h6>
                <h6>{{person.relationship}}</h6>
                <p>{{person.testimonial}}</p>
            </div>
            <!-- <div class="smalltest" >
                <h6>Tyvon April</h6>
                <h6>Colleague</h6>
                <p>Thando is a very innovative person, he always thinks outside the box. When faced with a problem he will stop at nothing to find the solution. I enjoy working with him.</p>
            </div>
            <div class="smalltest" >
                <h6>Joel Mukanya</h6>
                <h6>Lecturer</h6>
                <p>Thandolwethu is a very creative, meticulous, and well-behaved student. He does enjoy working with his classmates and works well on his project.
                    He has gained knowledge of web development, including Bootstrap 5. I am very delighted to see his upcoming project.</p>
            </div>
            <div class="smalltest" >
                <h6>Uzukhanye Dywili</h6>
                <h6>Colleague</h6>
                <p>Thando is an elegant and creative individual who is always great company to have in the workplace.</p>
            </div>
            <div class="smalltest" >
                <h6>Kelebogile Nobomvu</h6>
                <h6>Colleague</h6>
                <p>Thandolwethu is a great person to work and converse with, works hard on completing his tasks and developing his skills.</p>
            </div> -->
        </div>
        
        <div class="test-sec">
            <h5>Testimonials</h5>
            <div class="testimonials">
                <div v-for="person in arrTestimonials" :key="person" class="card-outer">
                    <div class="testimonial t1">
                        <div class="front">
                            <div class="testimgfront" :style="person.picture"></div>
                            <h6>{{person.name}}</h6>
                            <h6>{{person.relationship}}</h6>
                        </div>
                        <div class="back">
                            <h6>{{person.name}}</h6>
                            <h6>{{person.relationship}}</h6>
                            <p>{{person.testimonial}}</p>
                        </div>
                    </div>
                </div>
                <!-- <div class="card-outer">
                    <div class="testimonial t2">
                        <div class="front">
                            <div class="testimgfront"></div>
                            <h6>Tyvon April</h6>
                            <h6>Colleague</h6>
                        </div>
                        <div class="back">
                            <h6>Tyvon April</h6>
                            <h6>Colleague</h6>
                            <p>Thando is a very innovative person, he always thinks outside the box. When faced with a problem he will stop at nothing to find the solution. I enjoy working with him.</p>
                        </div>
                    </div>
                </div>
                <div class="card-outer">
                    <div class="testimonial t3">
                        <div class="front">
                            <div class="testimgfront"></div>
                            <h6>Joel Mukunya</h6>
                            <h6>Lecturer</h6>
                        </div>
                        <div class="back">
                            <h6>Joel Mukanya</h6>
                            <h6>Lecturer</h6>
                            <p>Thandolwethu is a very creative, meticulous, and well-behaved student. He does enjoy working with his classmates and works well on his project.
                                He has gained knowledge of web development, including Bootstrap 5. I am very delighted to see his upcoming project.</p>
                        </div>
                    </div>
                </div>
                <div class="card-outer">
                    <div class="testimonial t4">
                        <div class="front">
                            <div class="testimgfront"></div>
                            <h6>Uzukhanye Dywili</h6>
                            <h6>Colleague</h6>
                        </div>
                        <div class="back">
                            <h6>Uzukhanye Dywili</h6>
                            <h6>Colleague</h6>
                            <p>Thando is an elegant and creative individual who is always great company to have in the workplace.</p>
                        </div>
                    </div>
                </div>
                <div class="card-outer">
                    <div class="testimonial t5">
                        <div class="front">
                            <div class="testimgfront"></div>
                            <h6>Kelebogile Nobomvu</h6>
                            <h6>Colleague</h6>
                        </div>
                        <div class="back">
                            <h6>Kelebogile Nobomvu</h6>
                            <h6>Colleague</h6>
                            <p>Thandolwethu is a great person to work and converse with, works hard on completing his tasks and developing his skills.</p>
                        </div>
                    </div>
                </div> -->

            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    name: 'testimonials',
    data() {
        return {
            arrTestimonials : [
                {
                    name:'Deno Rautenbach',
                    relationship: 'Colleague', 
                    testimonial: "Thandolwethu has got swag, besides his coolness factor, his keen attention to detail in his code makes for awesome looking websites. He's also the most dependable source of help I've encountered. Always happy to help. Whenever I'm stuck I he's the one to help.",
                    picture: "background-image: url(https://i.postimg.cc/MHdSR3DG/My-project-1-9.png);"
                },
                {
                    name:'Tyvon April',
                    relationship: 'Colleague', 
                    testimonial: "Thando is a very innovative person, he always thinks outside the box. When faced with a problem he will stop at nothing to find the solution. I enjoy working with him.",
                    picture: "background-image: url(https://i.postimg.cc/jjKjYxT7/My-project-1-10.png);"
                },
                {
                    name:'Joel Mukanya', 
                    relationship: 'Lecturer', 
                    testimonial: "Thandolwethu is a very creative, meticulous, and well-behaved student. He does enjoy working with his classmates and works well on his project. He has gained knowledge of web development, including Bootstrap 5. I am very delighted to see his upcoming project.",
                    picture: "background-image: url(https://i.postimg.cc/D0D46KJQ/Joel-Profile.jpg);"
                },
                {
                    name:'Uzukhanye Dywili', 
                    relationship: 'Colleague', 
                    testimonial: "Thando is an elegant and creative individual who is always great company to have in the workplace.",
                    picture: "background-image: url(https://i.postimg.cc/fyJBpgfc/IMG-20220708-WA0014.jpg)"
                },
                {
                    name:'Kelebogile Nobomvu', 
                    relationship: 'Colleague', 
                    testimonial: "Thandolwethu is a great person to work and converse with, works hard on completing his tasks and developing his skills.",
                    picture: "background-image: url(https://i.postimg.cc/BvLfcyCD/20201112-003649.jpg);"
                }
            ]
        }
    }
}
</script>
<style scoped>



</style>