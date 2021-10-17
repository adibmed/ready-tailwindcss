<script setup>
import Footer from "../../components/Footer.vue";
import Navbar from "../../components/Navbar.vue";
import contributorsJSON from "./contributors.json";

const section_1 = {
    title: "UI Components",
    message: `Free and open source ui components to use for your projects and apps.
              To speed up your desing process, boost your productiviy, save time and focus on many other tasks you don't 
              need to reinvent the wheel and start everything from scatch everytime your start a project. 
              Just copy and paste any component and Voila!`,
}
</script>


<template>
  <Navbar />
  <div class="min-h-screen">
    <div
      class="
        max-w-7xl
        mx-auto
        pb-12
        border border-gray-100
        bg-white
        shadow-lg
        rounded-3xl
        px-8
        mt-32
      "
    >
      <div class="sm:flex pt-10 sm:pt-20">
        <div class="flex-1 flex justify-center items-center pb-20 sm:pb-0">
          <img
            src="./images/casual-life-3d-cup-7.png"
            class="bouncer object-contain h-96"
            alt=""
          />
        </div>
        <div class="flex-1">
          <div class="text-2xl sm:text-4xl font-bold text-gray-800">
            {{ section_1.title }}
          </div>
          <div
            class="
              text-lg
              sm:text-xl
              pt-4
              text-gray-700
              sm:leading-9
              text-justify
            "
          >
            {{ section_1.message }}
          </div>
          <div class="pt-8">
            <router-link :to="{ name: 'components' }"
              ><span
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
              ></router-link
            >
          </div>
        </div>
      </div>
    </div>

    <div
      class="
        max-w-7xl
        mx-auto
        pb-12
        bg-gray-100
        shadow-lg
        rounded-3xl
        p-1
        sm:p-8
        mt-32
        mb-32
      "
    >
      <div
        class="
          text-2xl
          sm:text-4xl
          font-bold
          text-center
          pt-8
          pb-4
          text-gray-700
        "
      >
        Contributors
      </div>
      <div
        class="
          pt-8
          grid grid-cols-2
          md:grid-cols-5
          lg:grid-cols-7
          gap-1
          sm:gap-4
        "
      >
        <a
          v-for="(contributor, index) in contributorsJSON"
          :key="index"
          :href="contributor.github_url"
          target="_blank"
          class="
            shadow-sm
            rounded-lg
            px-2
            pt-2
            pb-4
            bg-white
            hover:shadow-md
            hover:border
          "
        >
          <div class="flex justify-center py-4">
            <img
              :src="contributor.profile_image"
              class="w-2/3 rounded-full rounded-bl-none"
              :alt="contributor.github_url"
            />
          </div>
          <div class="pt-2 font-semibold text-gray-700">
            {{ contributor.display_name }}
          </div>
          <div class="text-gray-600 text-sm">@{{ contributor.username }}</div>
        </a>
      </div>
    </div>
  </div>

  <Footer />
</template>


<style>
</style>