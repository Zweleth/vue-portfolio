<template lang="">
    <form action="https://formspree.io/f/mqkjlqvp" method="post">
        <h2>Leave a Message</h2>
        <div class="form-floating mb-3">
            <input type="text" class="form-control btn-outline-info" name="fname"  placeholder="name@example.com" required>
            <label for="floatingInput">Name</label>
        </div>
        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput2" name="email" placeholder="name@example.com" required>
            <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput3" name="subject" placeholder="name@example.com" required>
            <label for="floatingInput">Subject</label>
        </div>
        <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput4" name="message" placeholder="name@example.com" required>
            <label for="floatingInput">Message</label>
        </div>
        <button>Send</button>
    </form>
</template>
<script>
export default {
    name: 'contactform'
}
</script>
<style scoped>
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
</style>