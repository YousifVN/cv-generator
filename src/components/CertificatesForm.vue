<template>
    <section>
        <h2 class="text-2xl font-semibold mb-4">Certificates</h2>
        <div v-for="(certificate, index) in user.certificates" :key="index" class="mb-4">
            <input v-model="certificate.title" placeholder="Certificate Title" class="border w-full p-2 mb-2" />
            <input v-model="certificate.issuer" placeholder="Issuer" class="border w-full p-2 mb-2" />
            <button @click="removeCertificate(index)" class="text-red-500">Remove</button>
        </div>
        <button @click="addCertificate" class="bg-blue-500 text-white p-2 rounded">Add Certificate</button>
    </section>
</template>

<script setup>
import { inject } from 'vue';

const user = inject('user');

const addCertificate = () => {
    user.value.certificates.push({ title: '', issuer: '' });
};

const removeCertificate = (index) => {
    user.value.certificates.splice(index, 1);
};
</script>