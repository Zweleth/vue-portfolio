<template lang="">
  <div class="page" id="about">
    <div class="more">
        <aboutinfo></aboutinfo>
        <aboutimage></aboutimage>
        
   </div>
</div>
</template>
<script>
import aboutimage from '@/components/AboutImage.vue';
import aboutinfo from '@/components/AboutInfo.vue';
export default {
  components: {
    aboutimage,
    aboutinfo
  }
}
</script>
<style scoped>
  
</style>
