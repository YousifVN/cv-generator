<template>
    <section>
        <h2 class="mb-4 text-2xl font-semibold text-white">Projects</h2>

        <div v-for="(project, index) in user.projects" :key="index" class="mb-4">
            <Form :validation-schema="getSchema(index)">
                <FloatingLabelField v-model="project.title" :name="'title' + index" label="Title" />
                <FloatingLabelField v-model="project.description" :name="'description' + index" label="Description" />
                <DeleteButton text="Remove project" @click="removeProject(index)" />
            </Form>
        </div>

        <DefaultButton text="Add Project" @click="addProject" />
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
        ['description' + index]: yup.string().required('Description is required'),
    });
};

const addProject = () => {
    user.value.projects.push({ title: '', description: '' });
};

const removeProject = (index) => {
    user.value.projects.splice(index, 1);
};
</script>