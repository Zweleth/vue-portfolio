<template lang="">
    <div class="page" id="contact">
        <div class="sec4">
            <section class="dh">
                <h4>You can contact me <br>using the following contact details <br> or leave an email <br> by filling in the form <br>and i will get back to you</h4>
            </section>
            
            <section class="details">
                <socials></socials>
                <contactform></contactform>
                
            </section>
        </div>
       
    </div>
</template>
<script>
import socials from '@/components/Socials.vue'
import contactform from '@/components/ContactForm.vue'
export default {
    name: 'ContactView',
  components: {
    socials,
    contactform
  }
}
</script>
<style scoped>






</style>