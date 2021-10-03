<template>
  <div class="w-9/12 bg-blue-400 px-8 py-5 rounded-lg border-b-4 border-blue-500" style="display: flex !important; flex-direction: row !important">
    <div class="text-blue-700 my-auto mr-5">
        <svg fill="currentColor"
            viewBox="0 0 20 20"
            class="h-10 w-10">
          <path fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clip-rule="evenodd"></path>
        </svg>
    </div>
    <div class="d-flex flex-col flex-1">
      <h1 class="text-white font-sans">Alert Title</h1>
      <span class="font-sans text-sm text-gray-300">Alert content here</span>
    </div>
    <div class="flex-none my-auto text-3xl cursor-pointer">
      &times;
    </div>
  </div>
</template>

<script setup>
</script>