<script> 
import Header from '../../components/Header.vue'
export default {
  name: 'Home',
  components: {
    Header
  },
  data() {
    return {
      section_1: {
        title: "UI Components",
        message: `Free and open source ui components to use for your projects and apps.
                  To speed up your desing process, boost your productiviy, save time and focus on many other tasks you don't 
                  need to reinvent the wheel and start everything from scatch everytime your start a project. 
                  Just copy and paste any component and Voila!`
      }
    }
  }
}
</script>

<template>
  <Header  />
  <div class="max-w-7xl mx-auto pb-12 border bg-white shadow-xl rounded-3xl -mt-24 mb-24 px-8"> 
      <div class="sm:flex pt-10 sm:pt-20">
       <div class="flex-1 flex justify-center items-center pb-20 sm:pb-0">
          <img src="./images/casual-life-3d-plant-3.png" class="bouncer object-contain h-96" alt="">
       </div>
       <div class="flex-1">
          <div class="text-2xl sm:text-4xl font-bold text-gray-800">{{section_1.title}}</div>
        <div class="text-lg sm:text-xl pt-4 text-gray-700 sm:leading-9 text-justify">{{section_1.message}}</div>
         <div class="pt-8">
           <router-link :to="{name: 'components'}"><span
               
                class="
                bg-green-200
                text-green-700
                hover:text-green-800
                  p-3
                  delay-75
                  rounded-md
                  font-bold
                "
                >Components</span
              ></router-link>
         </div>
       </div>
      </div>  
  </div>
</template>

<style>
 

</style>
