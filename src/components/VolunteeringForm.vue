<template>
    <section>
        <h2 class="text-2xl font-semibold mb-4">Volunteering</h2>
        <div v-for="(volunteer, index) in user.volunteering" :key="index" class="mb-4">
            <input v-model="volunteer.role" placeholder="Role" class="border w-full p-2 mb-2" />
            <input v-model="volunteer.organization" placeholder="Organization" class="border w-full p-2 mb-2" />
            <button @click="removeVolunteering(index)" class="text-red-500">Remove</button>
        </div>
        <button @click="addVolunteering" class="bg-blue-500 text-white p-2 rounded">Add Volunteering</button>
    </section>
</template>

<script setup>
import { inject } from 'vue';

const user = inject('user');

const addVolunteering = () => {
    user.value.volunteering.push({ role: '', organization: '' });
};

const removeVolunteering = (index) => {
    user.value.volunteering.splice(index, 1);
};
</script>