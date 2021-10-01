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
      <div class="sm:flex sm:pt-40">
       <div class="flex-1 flex justify-center items-center pb-20 sm:pb-0">
          <img src="./images/casual-life-3d-plant-3.png" class="bouncer object-contain h-96" alt="">
       </div>
       <div class="flex-1">
          <div class="text-2xl sm:text-4xl font-bold text-gray-800">{{section_1.title}}</div>
        <div class="text-lg sm:text-xl pt-4 text-gray-700 sm:leading-9 text-justify">{{section_1.message}}</div>
       </div>
      </div>  
  </div>
</template>

<style>
.box{
  width:100px;
  height:100px;
  background:#000;
}

.bouncer{
  animation: bouncer linear 4s;
  animation-iteration-count: infinite;
  transform-origin: 50% 50%;
  -webkit-animation: bouncer linear 4s;
  -webkit-animation-iteration-count: infinite;
  -webkit-transform-origin: 50% 50%;
  -moz-animation: bouncer linear 4s;
  -moz-animation-iteration-count: infinite;
  -moz-transform-origin: 50% 50%;
  -o-animation: bouncer linear 4s;
  -o-animation-iteration-count: infinite;
  -o-transform-origin: 50% 50%;
  -ms-animation: bouncer linear 4s;
  -ms-animation-iteration-count: infinite;
  -ms-transform-origin: 50% 50%;
}

@keyframes bouncer{
  0% {
    transform:  translate(1px,20px)  ;
  }
  24% {
    transform:  translate(1px,30px)  ;
  }
  50% {
    transform:  translate(1px,12px)  ;
  }
  74% {
    transform:  translate(1px,22px)  ;
  }
  100% {
    transform:  translate(1px,22px)  ;
  }
}

@-moz-keyframes bouncer{
  0% {
    -moz-transform:  translate(1px,20px)  ;
  }
  24% {
    -moz-transform:  translate(1px,30px)  ;
  }
  50% {
    -moz-transform:  translate(1px,12px)  ;
  }
  74% {
    -moz-transform:  translate(1px,22px)  ;
  }
  100% {
    -moz-transform:  translate(1px,22px)  ;
  }
}

@-webkit-keyframes bouncer {
  0% {
    -webkit-transform:  translate(1px,20px)  ;
  }
  24% {
    -webkit-transform:  translate(1px,30px)  ;
  }
  50% {
    -webkit-transform:  translate(1px,12px)  ;
  }
  74% {
    -webkit-transform:  translate(1px,22px)  ;
  }
  100% {
    -webkit-transform:  translate(1px,22px)  ;
  }
}

@-o-keyframes bouncer {
  0% {
    -o-transform:  translate(1px,20px)  ;
  }
  24% {
    -o-transform:  translate(1px,30px)  ;
  }
  50% {
    -o-transform:  translate(1px,12px)  ;
  }
  74% {
    -o-transform:  translate(1px,22px)  ;
  }
  100% {
    -o-transform:  translate(1px,22px)  ;
  }
}

@-ms-keyframes bouncer {
  0% {
    -ms-transform:  translate(1px,20px)  ;
  }
  24% {
    -ms-transform:  translate(1px,30px)  ;
  }
  50% {
    -ms-transform:  translate(1px,12px)  ;
  }
  74% {
    -ms-transform:  translate(1px,22px)  ;
  }
  100% {
    -ms-transform:  translate(1px,22px)  ;
  }
}
</style>
