<template>
  <section>
    <h2 class="mb-4 text-2xl font-semibold text-white">Personal Information</h2>
    <Form :validation-schema="schema">
      <FloatingLabelField v-model="user.name" type="text" name="name" label="Name" />
      <FloatingLabelField v-model="user.email" type="email" name="email" label="Email" />
      <FloatingLabelField v-model="user.phone" type="tel" name="phone" label="Phone" />
    </Form>
  </section>

  <hr class="mt-10 mb-5 text-gray-100">
</template>

<script setup>
import { inject } from 'vue';
import { Form } from 'vee-validate';
import * as yup from 'yup';
import FloatingLabelField from './FloatingLabelField.vue';

const user = inject('user');

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Email must be valid').required('Email is required'),
  phone: yup.string().required('Phone is required'),
});
</script>
