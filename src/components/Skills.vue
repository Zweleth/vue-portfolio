<template lang="">
    <div class="page" id="skills">
        <div class="skills-sec">
            <div class="skills-text">
                <p>My skills include <br>HTML, CSS, JavaScript, <br>bootstrap and python</p>
            </div>
            <div class="skills-menu">
                <div class="skills-icon">
                    <i class="fa-brands fa-html5"></i>
                    <p>HTML 5</p>
                </div>
                <div class="bar">
                    <div class="progress-bar">
                        <div class="html"></div>
                    </div>
                    <span>92%</span>
                </div>
                <div class="skills-icon">
                    <i class="fa-brands fa-css3-alt"></i>
                    <p>CSS 3</p>
                </div>
                <div class="bar">
                    <div class="progress-bar">
                        <div class="css"></div>
                    </div>
                    <span>89%</span>
                </div>
                <div class="skills-icon">
                    <i class="fa-brands fa-square-js"></i>
                    <p>JavaScript</p>
                </div>
                <div class="bar">
                    <div class="progress-bar">
                        <div class="javascript"></div>
                    </div>  
                    <span>57%</span>
                </div>
                <div class="skills-icon">
                    <i class="fa-brands fa-bootstrap"></i>
                    <p>Bootstrap</p>
                </div>
                <div class="bar">
                    <div class="progress-bar">
                        <div class="bootstrap"></div>
                    </div>
                    <span>72%</span>
                </div>
                <div class="skills-icon">
                    <i class="fa-brands fa-python"></i>
                    <p>Python</p>
                </div>
                <div class="bar">
                    <div class="progress-bar">
                        <div class="python"></div>
                    </div>
                    <span>55%</span>
                </div>
            </div>
                
        </div>
   </div>
</template>
<script>
export default {
    name: 'skills'
}
</script>
<style scoped>
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

</style>