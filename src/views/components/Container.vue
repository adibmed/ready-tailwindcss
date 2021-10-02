<template>
  <div class="mt-10">
    <div class="flex justify-between items-center px-1">
      <div class="py-3 text-2xl font-semibold flex-1 text-gray-700">
        <slot name="title" />
      </div>
      <div>
        <button
          @click="activeTab = 1"
          class="
            bg-gray-200
            h-10
            w-10
            rounded-md
            ml-1
            text-gray-700
            hover:text-gray-800
            hover:bg-gray-300
            delay-75
          "
        >
          <i class="far fa-eye"></i>
        </button>
        <button
          @click="activeTab = 2"
          class="
            bg-gray-200
            h-10
            w-10
            rounded-md
            ml-1
            text-gray-700
            hover:text-gray-800
            hover:bg-gray-300
            delay-75
          "
        >
          <i class="fas fa-code"></i>
        </button>
        <button
          @click="copyToClipBoard"
          class="
            bg-gray-200
            h-10
            w-10
            rounded-md
            ml-1
            text-gray-700
            hover:text-gray-800
            hover:bg-gray-300
            delay-75
          "
        >
          <i class="far fa-clipboard"></i>
        </button>
      </div>
    </div>
    <div
      v-show="activeTab === 1"
      class="
        p-2
        min-h-44
        bg-gray-200
        shadow-sm
        border
        rounded
        flex
        items-center
        justify-center
      "
    >
      <slot name="component" />
    </div>
    <div v-show="activeTab === 2" class="min-h-40 rounded">
      <pre v-highlightjs="html"><code class="html rounded"></code></pre>
    </div>
  </div>
</template>

<script>
export default {
  props: ["html"],

  data() {
    return {
      activeTab: 2,
    };
  },

  methods: {
    copyToClipBoard() {
      const elem = document.createElement("textarea");
      elem.value = this.html;
      document.body.appendChild(elem);
      elem.select();
      document.execCommand("copy");
      document.body.removeChild(elem);
    },
  },
};
</script>

<style>
</style>