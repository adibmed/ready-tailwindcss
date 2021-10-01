<script>
import Navbar from "./Navbar.vue"

 export default {
   name: "Header",
    components: { Navbar },
 }
</script>

<template>
<Navbar/>
    <div class="flex items-center h-96 justify-center header">
      <div class="text-center">
        <div class="text-3xl sm:text-5xl font-bold text-gray-800">
          Ready Tailwindcss Components
        </div>
        <div class="sm:text-xl font-bold text-gray-800 pt-5">
          Read Tailwindcss Components
        </div>
      </div>
    </div>
</template>

<style >
.header {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='500' preserveAspectRatio='none' viewBox='0 0 1440 500'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1030%26quot%3b)' fill='none'%3e%3crect width='1440' height='500' x='0' y='0' fill='rgba(110%2c 231%2c 183%2c 1)'%3e%3c/rect%3e%3cpath d='M31 500L531 0L937.5 0L437.5 500z' fill='url(%23SvgjsLinearGradient1031)'%3e%3c/path%3e%3cpath d='M347.8 500L847.8 0L940.8 0L440.8 500z' fill='url(%23SvgjsLinearGradient1031)'%3e%3c/path%3e%3cpath d='M667.6 500L1167.6 0L1526.1 0L1026.1 500z' fill='url(%23SvgjsLinearGradient1031)'%3e%3c/path%3e%3cpath d='M1386 500L886 0L788.5 0L1288.5 500z' fill='url(%23SvgjsLinearGradient1032)'%3e%3c/path%3e%3cpath d='M1085.2 500L585.2 0L381.20000000000005 0L881.2 500z' fill='url(%23SvgjsLinearGradient1032)'%3e%3c/path%3e%3cpath d='M744.4 500L244.39999999999998 0L-28.600000000000023 0L471.4 500z' fill='url(%23SvgjsLinearGradient1032)'%3e%3c/path%3e%3cpath d='M1156.9929648424563 500L1440 216.9929648424564L1440 500z' fill='url(%23SvgjsLinearGradient1031)'%3e%3c/path%3e%3cpath d='M0 500L283.0070351575436 500L 0 216.9929648424564z' fill='url(%23SvgjsLinearGradient1032)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1030'%3e%3crect width='1440' height='500' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='0%25' y1='100%25' x2='100%25' y2='0%25' id='SvgjsLinearGradient1031'%3e%3cstop stop-color='rgba(15%2c 70%2c 185%2c 0.2)' offset='0'%3e%3c/stop%3e%3cstop stop-opacity='0' stop-color='rgba(15%2c 70%2c 185%2c 0.2)' offset='0.66'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='100%25' y1='100%25' x2='0%25' y2='0%25' id='SvgjsLinearGradient1032'%3e%3cstop stop-color='rgba(15%2c 70%2c 185%2c 0.2)' offset='0'%3e%3c/stop%3e%3cstop stop-opacity='0' stop-color='rgba(15%2c 70%2c 185%2c 0.2)' offset='0.66'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
