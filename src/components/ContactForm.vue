<template lang="">
    <form action="https://formspree.io/f/mqkjlqvp" method="post">
        <h2>Leave a Message</h2>
        <div class="form-floating mb-3">
            <input type="text" class="form-control btn-outline-info" name="fname"  placeholder="name" required>
            <label for="floatingInput">Name</label>
        </div>
        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput2" name="email" placeholder="name@example.com" required>
            <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput3" name="subject" placeholder="subject" required>
            <label for="floatingInput">Subject</label>
        </div>
        <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput4" name="message" placeholder="message" required>
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

</style>