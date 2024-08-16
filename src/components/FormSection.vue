<template>
    <div>
        <slot :submitForm="submitForm"></slot>
    </div>
</template>

<script setup>
import { provide, ref } from 'vue';

const forms = ref([]);

// Register each form component
const registerForm = (form) => {
    forms.value.push(form);
};

// Validate and submit all forms
const submitForm = async () => {
    let isValid = true;

    for (const form of forms.value) {
        const valid = await form.validate();
        if (!valid) {
            isValid = false;
        }
    }

    if (isValid) {
        console.log('All forms are valid!');
    } else {
        console.log('Some forms are invalid.');
    }
};

// Provide the registration method to child components
provide('registerForm', registerForm);
</script>