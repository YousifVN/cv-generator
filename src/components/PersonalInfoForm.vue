<template>
  <section>
    <h2 class="mb-4 text-2xl font-semibold text-white">Personal Information</h2>
    <Form :validation-schema="schema" v-slot="{ errors }">
      <FloatingLabelField type="text" name="floating_name" label="Name" />
      <FloatingLabelField type="email" name="floating_email" label="Email" />
      <FloatingLabelField type="tel" name="floating_phone" label="Phone" />
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
  floating_name: yup.string().required('Name is required'),
  floating_email: yup.string().email('Email must be valid').required('Email is required'),
  floating_phone: yup.string().required('Phone is required'),
});
</script>