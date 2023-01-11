<template lang="">
    <div class="page" id="resume">
        <div class="sec2">
            <section class="blocks">
                <section class="block a" id="aa">
                    <h4>2017</h4>
                    <p>Enrolled at cosat a science and technology highschool</p>
                </section>
                <section class="block b">
                </section>
                <section class="block c">
                </section>
                <section class="block d">
                </section>
                <section class="block e">
                </section>
                <section class="block f" id="ff">
                    <h4>2019</h4>
                    <p>Grade 10, Started taking information technology as a subject, Delphi fundamentals</p>
                </section>
                <section class="block g"></section>
                <section class="block h"></section>
                <section class="block i"></section>
                <section class="block j"></section>
                <section class="block k" id="kk">
                    <h4>2020</h4>
                    <p>Grade 11 started intermediate delphi, database management and object oriented programming</p>
                </section>
                <section class="block l"></section>
                <section class="block m"></section>
                <section class="block n"></section>
                <section class="block o"></section>
                <section class="block p" id="pp">
                    <h4>2021</h4>
                    <p>Matriculated and eligible for bachelors degree, subjects include mathematics & science</p>
                </section>
                <section class="block q"></section>
                <section class="block r"></section>
                <section class="block s"></section>
                <section class="block t"></section>
                <section class="block u" id="uu">
                    <h4>2022</h4>
                    <p>Enrolled at Life ChoIces Academy for a web design/development 12 month course </p>
                </section>
               


            </section>
        </div>
    </div>
</template>
<script>
export default {
    name: 'education'
}
</script>
<style scoped>
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
</style>