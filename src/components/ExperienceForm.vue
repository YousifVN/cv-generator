<template>
    <section>
        <h2 class="text-2xl font-semibold mb-4">Work Experience</h2>
        <div v-for="(experience, index) in user.experiences" :key="index" class="mb-4">
            <input v-model="experience.role" placeholder="Role" class="border w-full p-2 mb-2" />
            <input v-model="experience.company" placeholder="Company" class="border w-full p-2 mb-2" />
            <button @click="removeExperience(index)" class="text-red-500">Remove</button>
        </div>
        <button @click="addExperience" class="bg-blue-500 text-white p-2 rounded">Add Experience</button>
    </section>
</template>

<script setup>
import { inject } from 'vue';

const user = inject('user');

const addExperience = () => {
    user.value.experiences.push({ role: '', company: '' });
};

const removeExperience = (index) => {
    user.value.experiences.splice(index, 1);
};
</script>