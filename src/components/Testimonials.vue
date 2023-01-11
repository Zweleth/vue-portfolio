<template lang="">
    <div class="page" id="testimonials">
        <div class="ts-smallscreen">
            <div class="smalltest" >
                <h6>Deno Rautenbach</h6>
                <h6>Colleague</h6>
                <p>Thandolwethu has got swag, besides his coolness factor, his keen attention to detail in his code makes for awesome looking websites. He's also the most dependable source of help I've encountered. Always happy to help. Whenever I'm stuck I he's the one to help.</p>
            </div>
            <div class="smalltest" >
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
            </div>
        </div>
        
        <div class="test-sec">
            <h5>Testimonials</h5>
            <div class="testimonials">
                <div class="card-outer">
                    <div class="testimonial t1">
                        <div class="front">
                            <div class="testimgfront"></div>
                            <h6>Deno Rautenbach</h6>
                            <h6>Colleague</h6>
                        </div>
                        <div class="back">
                            <h6>Deno Rautenbach</h6>
                            <h6>Colleague</h6>
                            <p>Thandolwethu has got swag, besides his coolness factor, his keen attention to detail in his code makes for awesome looking websites. He's also the most dependable source of help I've encountered. Always happy to help. Whenever I'm stuck I he's the one to help.</p>
                        </div>
                    </div>
                </div>
                <div class="card-outer">
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
                </div>

            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    name: 'testimonials'
}

let testimonials 
</script>
<style scoped>
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
    background-image: url(https://i.postimg.cc/MHdSR3DG/My-project-1-9.png);
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

.ts-smallscreen {
    display: none;
}
</style>