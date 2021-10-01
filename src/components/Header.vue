<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <nav class="bg-green-300">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between py-3">
        <div
          class="
            flex-1 flex
            items-center
          "
        >
          <div class="flex-shrink-0 flex items-center">
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
              alt="Workflow"
            />
            <div class="hidden sm:block px-2 text-gray-700 text-xl font-bold">
              Ready Tailwindcss
            </div>
          </div>
          <div class="block ml-6">
            <div class="flex space-x-4">
              <a
                href="#"
                class="
                  text-gray-600
                  hover:bg-green-200
                  hover:text-green-700
                  px-3
                  py-2
                  rounded-md
                  font-medium
                "
                >Home</a
              >
              <a
                href="#"
                class="
                  text-gray-600
                  hover:bg-green-200
                  hover:text-green-700
                  px-3
                  py-2
                  rounded-md
                  font-medium
                "
                >components</a
              >
              <a
                href="#"
                class="
                  text-gray-600
                  hover:bg-green-200
                  hover:text-green-700
                  px-3
                  py-2
                  rounded-md
                  font-medium
                "
                >About</a
              >
            </div>
          </div>
        </div>
        <div class="h-7 w-7 text-gray-800">
          <a href="https://github.com/adibemohamed/ready-tailwindcss" target="_blank">
            <svg
            version="1.1"
            class="h-full w-full"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            style="enable-background: new 0 0 512 512"
            xml:space="preserve"
          >
            <g>
              <g>
                <path
                  d="M255.968,5.329C114.624,5.329,0,120.401,0,262.353c0,113.536,73.344,209.856,175.104,243.872
			c12.8,2.368,17.472-5.568,17.472-12.384c0-6.112-0.224-22.272-0.352-43.712c-71.2,15.52-86.24-34.464-86.24-34.464
			c-11.616-29.696-28.416-37.6-28.416-37.6c-23.264-15.936,1.728-15.616,1.728-15.616c25.696,1.824,39.2,26.496,39.2,26.496
			c22.848,39.264,59.936,27.936,74.528,21.344c2.304-16.608,8.928-27.936,16.256-34.368
			c-56.832-6.496-116.608-28.544-116.608-127.008c0-28.064,9.984-51.008,26.368-68.992c-2.656-6.496-11.424-32.64,2.496-68
			c0,0,21.504-6.912,70.4,26.336c20.416-5.696,42.304-8.544,64.096-8.64c21.728,0.128,43.648,2.944,64.096,8.672
			c48.864-33.248,70.336-26.336,70.336-26.336c13.952,35.392,5.184,61.504,2.56,68c16.416,17.984,26.304,40.928,26.304,68.992
			c0,98.72-59.84,120.448-116.864,126.816c9.184,7.936,17.376,23.616,17.376,47.584c0,34.368-0.32,62.08-0.32,70.496
			c0,6.88,4.608,14.88,17.6,12.352C438.72,472.145,512,375.857,512,262.353C512,120.401,397.376,5.329,255.968,5.329z"
                />
              </g>
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
          </a>
        </div>
      </div>
    </div>
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
  </nav>
</template>

<style >
.header {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='500' preserveAspectRatio='none' viewBox='0 0 1440 500'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1030%26quot%3b)' fill='none'%3e%3crect width='1440' height='500' x='0' y='0' fill='rgba(110%2c 231%2c 183%2c 1)'%3e%3c/rect%3e%3cpath d='M31 500L531 0L937.5 0L437.5 500z' fill='url(%23SvgjsLinearGradient1031)'%3e%3c/path%3e%3cpath d='M347.8 500L847.8 0L940.8 0L440.8 500z' fill='url(%23SvgjsLinearGradient1031)'%3e%3c/path%3e%3cpath d='M667.6 500L1167.6 0L1526.1 0L1026.1 500z' fill='url(%23SvgjsLinearGradient1031)'%3e%3c/path%3e%3cpath d='M1386 500L886 0L788.5 0L1288.5 500z' fill='url(%23SvgjsLinearGradient1032)'%3e%3c/path%3e%3cpath d='M1085.2 500L585.2 0L381.20000000000005 0L881.2 500z' fill='url(%23SvgjsLinearGradient1032)'%3e%3c/path%3e%3cpath d='M744.4 500L244.39999999999998 0L-28.600000000000023 0L471.4 500z' fill='url(%23SvgjsLinearGradient1032)'%3e%3c/path%3e%3cpath d='M1156.9929648424563 500L1440 216.9929648424564L1440 500z' fill='url(%23SvgjsLinearGradient1031)'%3e%3c/path%3e%3cpath d='M0 500L283.0070351575436 500L 0 216.9929648424564z' fill='url(%23SvgjsLinearGradient1032)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1030'%3e%3crect width='1440' height='500' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='0%25' y1='100%25' x2='100%25' y2='0%25' id='SvgjsLinearGradient1031'%3e%3cstop stop-color='rgba(15%2c 70%2c 185%2c 0.2)' offset='0'%3e%3c/stop%3e%3cstop stop-opacity='0' stop-color='rgba(15%2c 70%2c 185%2c 0.2)' offset='0.66'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='100%25' y1='100%25' x2='0%25' y2='0%25' id='SvgjsLinearGradient1032'%3e%3cstop stop-color='rgba(15%2c 70%2c 185%2c 0.2)' offset='0'%3e%3c/stop%3e%3cstop stop-opacity='0' stop-color='rgba(15%2c 70%2c 185%2c 0.2)' offset='0.66'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
