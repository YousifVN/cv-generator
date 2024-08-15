<template>
    <section>
        <h2 class="text-2xl font-semibold mb-4">Personal Information</h2>
        <input v-model="user.name" placeholder="Name" class="border w-full p-2 mb-2" />
        <input v-model="user.email" placeholder="Email" class="border w-full p-2 mb-2" />
        <input v-model="user.phone" placeholder="Phone" class="border w-full p-2 mb-2" />
    </section>
</template>

<script setup>
import { inject } from 'vue';

const user = inject('user');
</script>