<template>
    <section>
        <h2 class="text-2xl font-semibold mb-4">Awards</h2>
        <div v-for="(award, index) in user.awards" :key="index" class="mb-4">
            <input v-model="award.title" placeholder="Award Title" class="border w-full p-2 mb-2" />
            <input v-model="award.year" placeholder="Year" class="border w-full p-2 mb-2" />
            <button @click="removeAward(index)" class="text-red-500">Remove</button>
        </div>
        <button @click="addAward" class="bg-blue-500 text-white p-2 rounded">Add Award</button>
    </section>
</template>

<script setup>
import { inject } from 'vue';

const user = inject('user');

const addAward = () => {
    user.value.awards.push({ title: '', year: '' });
};

const removeAward = (index) => {
    user.value.awards.splice(index, 1);
};
</script>