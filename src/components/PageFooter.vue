<template>
  <footer class="py-6 pb-10 text-center text-white bg-weather-primary font-hanken-grotesk">
    <div class="flex items-center justify-center space-x-5">
      <div>&copy; {{ year }} YousifVN</div>
      <a 
        href="https://t.me/YousifCoding" 
        target="_blank" 
        class="hover:text-gray-300"
      >
        <i class="fa-brands fa-telegram"></i> Telegram
      </a>
      <a 
        href="https://www.linkedin.com/in/yousifvn/" 
        target="_blank" 
        class="hover:text-gray-300"
      >
        <i class="fa-brands fa-linkedin"></i> LinkedIn
      </a>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const year = ref('');

onMounted(() => {
  year.value = new Date().getFullYear();
});
</script>
