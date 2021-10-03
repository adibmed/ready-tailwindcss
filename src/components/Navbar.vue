<script setup>
  import { computed } from '@vue/reactivity';
  import { useRoute } from 'vue-router'
  const route = useRoute();
  const currentRouteName = computed(() => route.name)
</script>

<template>
  <nav class="bg-green-300">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between py-3">
        <div class="flex-1 flex items-center">
          <router-link :to="{ name: 'home' }">
            <div class="flex-shrink-0 flex items-center">
              <svg
              class="h-11 mr-1"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 448 448"
                xml:space="preserve"
              >
                <g>
                  <path
                    style="fill: #fff"
                    d="M384,112c-35.297,0-64,28.711-64,64c0,8.836,7.156,16,16,16s16-7.164,16-16
		c0-17.649,14.359-32,32-32s32,14.351,32,32s-14.359,32-32,32H17.266c-8.844,0-16,7.164-16,16c0,8.836,7.156,16,16,16H384
		c35.297,0,64-28.711,64-64S419.297,112,384,112z"
                  />
                  <path
                    style="fill: #fff"
                    d="M16,176h208c35.297,0,64-28.711,64-64s-28.703-64-64-64s-64,28.711-64,64c0,8.836,7.156,16,16,16
		s16-7.164,16-16c0-17.649,14.359-32,32-32s32,14.351,32,32s-14.359,32-32,32H16c-8.844,0-16,7.164-16,16S7.156,176,16,176z"
                  />
                  <path
                    style="fill: #fff"
                    d="M224,272H16c-8.844,0-16,7.164-16,16s7.156,16,16,16h208c17.641,0,32,14.351,32,32s-14.359,32-32,32
		s-32-14.351-32-32c0-8.836-7.156-16-16-16s-16,7.164-16,16c0,35.289,28.703,64,64,64s64-28.711,64-64S259.297,272,224,272z"
                  />
                </g>
              </svg>
              <div class="hidden sm:block px-2 text-gray-700 text-xl font-bold">
                Ready Tailwindcss
              </div>
            </div>
          </router-link>
          <div class="block ml-6">
            <div class="flex items-center space-x-4">
              <router-link :to="{ name: 'home' }"
                ><span
                  :class="
                    currentRouteName === 'home'
                      ? 'bg-green-200 text-green-200'
                      : ''
                  "
                  class="
                    text-green-900
                    hover:bg-green-200 hover:text-green-700
                    p-3
                    delay-75
                    rounded-md
                    font-bold
                  "
                  >Home</span
                ></router-link
              >

              <router-link :to="{ name: 'components' }"
                ><span
                  :class="
                    currentRouteName === 'components'
                      ? 'bg-green-200 text-green-200'
                      : ''
                  "
                  class="
                    text-green-900
                    hover:bg-green-200 hover:text-green-700
                    p-3
                    delay-75
                    rounded-md
                    font-bold
                  "
                  >Components</span
                ></router-link
              >
              <router-link :to="{ name: 'about' }"
                ><span
                  :class="
                    currentRouteName === 'about'
                      ? 'bg-green-200 text-green-200'
                      : ''
                  "
                  class="
                    text-green-900
                    hover:bg-green-200 hover:text-green-700
                    p-3
                    delay-75
                    rounded-md
                    font-bold
                  "
                  >About</span
                ></router-link
              >
            </div>
          </div>
        </div>
        <div class="h-7 w-7 text-gray-800">
          <a
            href="https://github.com/adibemohamed/ready-tailwindcss"
            target="_blank"
          >
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
  </nav>
</template>

<style></style>
