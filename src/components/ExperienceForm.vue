<template>
    <section>
      <h2 class="mb-4 text-2xl font-semibold text-white">Work Experience</h2>
      
      <div v-for="(experience, index) in user.experiences" :key="index" class="mb-4">
        <Form :validation-schema="getSchema(index)">
          <FloatingLabelField v-model="experience.role" :name="'role' + index" label="Role" />
          <FloatingLabelField v-model="experience.company" :name="'company' + index" label="Company" />
          <DeleteButton text="Remove Experience" @click="removeExperience(index)" />
        </Form>
      </div>
  
      <DefaultButton text="Add Experience" @click="addExperience" />
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
      ['role' + index]: yup.string().required('Role is required'),
      ['company' + index]: yup.string().required('Company is required'),
    });
  };
  
  const addExperience = () => {
    user.value.experiences.push({ role: '', company: '' });
  };
  
  const removeExperience = (index) => {
    user.value.experiences.splice(index, 1);
  };
  </script>
  