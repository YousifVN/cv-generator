<template>
    <section>
      <h2 class="mb-4 text-2xl font-semibold text-white">Education</h2>
      
      <div v-for="(education, index) in user.educations" :key="index" class="mb-4">
        <Form :validation-schema="getSchema(index)">
          <FloatingLabelField v-model="education.degree" :name="'degree' + index" label="Degree" />
          <FloatingLabelField v-model="education.institution" :name="'institution' + index" label="Institution" />
          <DeleteButton text="Remove Education" @click="removeEducation(index)" />
        </Form>
      </div>
  
      <DefaultButton text="Add Education" @click="addEducation" />
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
      ['degree' + index]: yup.string().required('Degree is required'),
      ['institution' + index]: yup.string().required('Institution is required'),
    });
  };
  
  const addEducation = () => {
    user.value.educations.push({ degree: '', institution: '' });
  };
  
  const removeEducation = (index) => {
    user.value.educations.splice(index, 1);
  };
  </script>
  