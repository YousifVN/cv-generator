<template>
    <section>
        <h2 class="text-2xl font-semibold mb-4">Projects</h2>
        <div v-for="(project, index) in user.projects" :key="index" class="mb-4">
            <input v-model="project.title" placeholder="Project Title" class="border w-full p-2 mb-2" />
            <input v-model="project.description" placeholder="Description" class="border w-full p-2 mb-2" />
            <button @click="removeProject(index)" class="text-red-500">Remove</button>
        </div>
        <button @click="addProject" class="bg-blue-500 text-white p-2 rounded">Add Project</button>
    </section>
</template>

<script setup>
import { inject } from 'vue';

const user = inject('user');

const addProject = () => {
    user.value.projects.push({ title: '', description: '' });
};

const removeProject = (index) => {
    user.value.projects.splice(index, 1);
};
</script>