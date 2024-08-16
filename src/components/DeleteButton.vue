<template>
    <button type="button"
        class="px-2 py-2 mb-2 text-sm font-medium text-center text-red-700 border border-red-700 rounded-lg hover:text-white hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 me-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
        {{ text }}
    </button>
</template>

<script setup>

const props = defineProps({
    text: {
        type: String,
        required: true
    }
});
</script>