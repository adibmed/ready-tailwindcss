<template>
  <div class="mt-10">
    <div class="flex justify-between items-center px-1">
      <div class="py-3 text-2xl font-semibold flex-1 text-gray-700">
        <slot name="title" />
      </div>
      <div>
        <button
          v-tippy="'Result'"
          @click="activeTab = 1"
          :class="activeTab == 1 ? 'bg-green-300' : 'bg-gray-200'"
          class="
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
          v-tippy="'Source'"
          @click="activeTab = 2"
          :class="activeTab == 2 ? 'bg-green-300' : 'bg-gray-200'"
          class="
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
          v-tippy="'Copy to Clipboard'"
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
        frame
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
    <div v-show="activeTab === 2" class="rounded ">
      <pre v-highlightjs="html"><code class="html frame rounded"></code></pre>
    </div>
  </div>
</template>

<script setup>
  import { ref, toRefs } from 'vue'
  const props = defineProps({
    html: String
  })
  const activeTab = ref(1)
  const copyToClipBoard = () => {
      const { html } = toRefs(props)
      const elem = document.createElement("textarea");
      elem.value = html.value;
      document.body.appendChild(elem);
      elem.select();
      document.execCommand("copy");
      document.body.removeChild(elem);
  }
</script>

<style>
.frame {
  min-height: 300px;
  max-height: 700px;
  overflow: auto;
}
</style>