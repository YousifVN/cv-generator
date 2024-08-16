<template>
    <section>
        <h2 class="mb-4 text-2xl font-semibold text-white">Certificates</h2>

        <div v-for="(certificate, index) in user.certificates" :key="index" class="mb-4">
            <Form :validation-schema="getSchema(index)">
                <FloatingLabelField v-model="certificate.title" :name="'title' + index" label="Title" />
                <FloatingLabelField v-model="certificate.issuer" :name="'issuer' + index" label="Issuer" />
                <DeleteButton text="Remove Certificate" @click="removeCertificate(index)" />
            </Form>
        </div>

        <DefaultButton text="Add certificate" @click="addCertificate" />
    </section>

    <hr class="mt-10 mb-5 text-gray-100">
</template>

<script setup>
import { Form } from 'vee-validate';
import * as yup from 'yup';
import FloatingLabelField from './FloatingLabelField.vue';
import DefaultButton from './DefaultButton.vue';
import DeleteButton from './DeleteButton.vue';
import { inject } from 'vue';

const user = inject('user');

const getSchema = (index) => {
    return yup.object({
        ['title' + index]: yup.string().required('Title is required'),
        ['issuer' + index]: yup.string().required('Issuer is required'),
    });
};

const addCertificate = () => {
    user.value.certificates.push({ title: '', issuer: '' });
};

const removeCertificate = (index) => {
    user.value.certificates.splice(index, 1);
};
</script>