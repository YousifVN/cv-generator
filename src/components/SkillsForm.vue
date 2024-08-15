<template>
    <section>
        <h2 class="text-2xl font-semibold mb-4">Skills</h2>
        <div v-for="(skill, index) in user.skills" :key="index" class="mb-4">
            <input v-model="user.skills[index]" placeholder="Skill" class="border w-full p-2 mb-2" />
            <button @click="removeSkill(index)" class="text-red-500">Remove</button>
        </div>
        <button @click="addSkill" class="bg-blue-500 text-white p-2 rounded">Add Skill</button>
    </section>
</template>

<script setup>
import { inject } from 'vue';

const user = inject('user');

const addSkill = () => {
    user.value.skills.push('');
};

const removeSkill = (index) => {
    user.value.skills.splice(index, 1);
};
</script>