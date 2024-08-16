<template>
    <section>
        <h2 class="mb-4 text-2xl font-semibold text-white">Work Experience</h2>
        <Form :validation-schema="schema" v-slot="{ errors }">
            <div v-for="(experience, index) in user.experiences" :key="index" class="mb-4">
                <FloatingLabelField v-model="experience.role" type="text" name="role" label="Role" />
                <FloatingLabelField v-model="experience.company" type="text" name="company" label="Company" />
                <DeleteButton text="Remove Experience" @click="removeExperience(index)" />
            </div>
            <DefaultButton text="Add Experience" @click="addExperience" />
        </Form>
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

const schema = yup.object({
    role: yup.string().required('Role is required'),
    company: yup.string().required('Company is required'),
});

const user = inject('user');

const addExperience = () => {
    user.value.experiences.push({ role: '', company: '' });
};

const removeExperience = (index) => {
    user.value.experiences.splice(index, 1);
};
</script>