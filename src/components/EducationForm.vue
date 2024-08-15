<template>
    <section>
        <h2 class="text-2xl font-semibold mb-4">Education</h2>
        <div v-for="(education, index) in user.educations" :key="index" class="mb-4">
            <input v-model="education.degree" placeholder="Degree" class="border w-full p-2 mb-2" />
            <input v-model="education.institution" placeholder="Institution" class="border w-full p-2 mb-2" />
            <button @click="removeEducation(index)" class="text-red-500">Remove</button>
        </div>
        <button @click="addEducation" class="bg-blue-500 text-white p-2 rounded">Add Education</button>
    </section>
</template>

<script setup>
import { inject } from 'vue';

const user = inject('user');

const addEducation = () => {
    user.value.educations.push({ degree: '', institution: '' });
};

const removeEducation = (index) => {
    user.value.educations.splice(index, 1);
};
</script>