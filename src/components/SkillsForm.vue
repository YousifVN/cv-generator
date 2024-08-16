<template>
    <section>
        <h2 class="mb-4 text-2xl font-semibold text-white">Skills</h2>

        <div v-for="(skill, index) in user.skills" :key="index" class="mb-4">
            <Form :validation-schema="getSchema(index)">
                <FloatingLabelField v-model="user.skills[index]" :name="'skill' + index" label="Skill" />
                <DeleteButton text="Remove Skill" @click="removeSkill(index)" />
            </Form>
        </div>

        <DefaultButton text="Add Skill" @click="addSkill" />
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
        ['skill' + index]: yup.string().required('Skill is required'),
    });
};

const addSkill = () => {
    user.value.skills.push(''); 
};


const removeSkill = (index) => {
    user.value.skills.splice(index, 1);
};
</script>
