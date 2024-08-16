<template>
  <div class="font-hanken-grotesk">

    <PageHeader />

    <div class="flex flex-col min-h-screen mt-0 mb-10 ml-10 mr-10 bg-black lg:flex-row lg:space-x-4">

      <!-- Form Section -->
      <div class="w-full max-h-[100vh] p-4 mb-4 overflow-y-scroll bg-gray-700 rounded-lg shadow-md lg:w-1/4 lg:mb-0">
        <Form @submit="submitForm" :validation-schema="formSchema">

          <!-- Personal Info Fields -->
          <section>
            <h2 class="mb-4 text-2xl font-semibold text-white">Personal Information</h2>
            <FloatingLabelField v-model="user.name" name="name" label="Name" />
            <FloatingLabelField v-model="user.email" name="email" label="Email" />
            <FloatingLabelField v-model="user.phone" name="phone" label="Phone" />

            <hr class="mt-10 mb-5 text-gray-100">
          </section>

          <!-- Image Upload Component -->
          <section>
            <ImageUpload :photo="user.photo" @update:photo="updatePhoto" />
          </section>

          <!-- Experience Fields -->
          <section>
            <h2 class="mb-4 text-2xl font-semibold text-white">Work Experience</h2>
            <div v-for="(experience, index) in user.experiences" :key="index" class="mb-4">
              <FloatingLabelField v-model="experience.role" :name="'experiences[' + index + '].role'" as="input"
                :rules="'required'" label="Role" />
              <FloatingLabelField v-model="experience.company" :name="'experiences[' + index + '].company'" as="input"
                :rules="'required'" label="Company" />
              <DeleteButton text="Remove Experience" @click="removeItem('experiences', index)" />
            </div>
            <DefaultButton text="Add Experience" @click="addItem('experiences', { role: '', company: '' })" />

            <hr class="mt-10 mb-5 text-gray-100">
          </section>

          <!-- Education Fields -->
          <section>
            <h2 class="mb-4 text-2xl font-semibold text-white">Education</h2>
            <div v-for="(education, index) in user.educations" :key="index" class="mb-4">
              <FloatingLabelField v-model="education.degree" :name="'educations[' + index + '].degree'" as="input"
                :rules="'required'" label="Degree" />
              <FloatingLabelField v-model="education.institution" :name="'educations[' + index + '].institution'"
                as="input" :rules="'required'" label="Institution" />
              <DeleteButton text="Remove Education" @click="removeItem('educations', index)" />
            </div>
            <DefaultButton text="Add Education" @click="addItem('educations', { degree: '', institution: '' })" />

            <hr class="mt-10 mb-5 text-gray-100">
          </section>

          <!-- Projects Fields -->
          <section>
            <h2 class="mb-4 text-2xl font-semibold text-white">Projects</h2>
            <div v-for="(project, index) in user.projects" :key="index" class="mb-4">
              <FloatingLabelField v-model="project.title" :name="'projects[' + index + '].title'" as="input"
                :rules="'required'" label="Title" />
              <FloatingLabelField v-model="project.description" :name="'projects[' + index + '].description'" as="input"
                :rules="'required'" label="Description" />
              <DeleteButton text="Remove Project" @click="removeItem('projects', index)" />
            </div>
            <DefaultButton text="Add Project" @click="addItem('projects', { title: '', description: '' })" />

            <hr class="mt-10 mb-5 text-gray-100">
          </section>

          <!-- Certificates Fields -->
          <section>
            <h2 class="mb-4 text-2xl font-semibold text-white">Certificates</h2>
            <div v-for="(certificate, index) in user.certificates" :key="index" class="mb-4">
              <FloatingLabelField v-model="certificate.title" :name="'certificates[' + index + '].title'" as="input"
                :rules="'required'" label="Title" />
              <FloatingLabelField v-model="certificate.issuer" :name="'certificates[' + index + '].issuer'" as="input"
                :rules="'required'" label="Issuer" />
              <DeleteButton text="Remove Certificate" @click="removeItem('certificates', index)" />
            </div>
            <DefaultButton text="Add Certificate" @click="addItem('certificates', { title: '', issuer: '' })" />

            <hr class="mt-10 mb-5 text-gray-100">
          </section>

          <!-- Skills Fields -->
          <section>
            <h2 class="mb-4 text-2xl font-semibold text-white">Skills</h2>
            <div v-for="(skill, index) in user.skills" :key="index" class="mb-4">
              <FloatingLabelField v-model="user.skills[index]" :name="'skills.' + index" :rules="'required'"
                label="Skill" />
              <DeleteButton text="Remove Skill" @click="removeItem('skills', index)" />
            </div>
            <DefaultButton text="Add Skill" @click="addItem('skills', '')" />

            <hr class="mt-10 mb-5 text-gray-100">
          </section>



          <button type="submit" class="p-2 mt-4 text-white bg-green-500 rounded">Submit</button>

          <button @click="printCV" class="p-2 mt-4 text-white bg-green-500 rounded">Print CV</button>

        </Form>
      </div>

      <div
        class="flex flex-col items-center justify-center w-full p-4 overflow-hidden bg-gray-700 rounded-lg shadow-md lg:w-3/4 max-h-[100vh]">
        <!-- CV Preview Section -->
        <div id="cv-preview" class="overflow-hidden bg-gray-500 border shadow-lg" :style="cvStyles">
          <CVPreview :user="user" />
        </div>
      </div>
    </div>

    <PageFooter />
  </div>
</template>


<!-- <script setup>
import { ref } from 'vue';
import { Form } from 'vee-validate';
import * as yup from 'yup';
import FloatingLabelField from './components/FloatingLabelField.vue';
import DefaultButton from './components/DefaultButton.vue';
import CVPreview from './components/CVPreview.vue';
import ImageUpload from './components/ImageUpload.vue';
import DeleteButton from './components/DeleteButton.vue';
import PageHeader from './components/PageHeader.vue';
import PageFooter from './components/PageFooter.vue';

// User data structure
const user = ref({
  name: 'Yousif Mahmood',
  email: 'yousifvnd@gmail.com',
  phone: '07732083333',
  experiences: [{ role: 'Web Developer', company: 'Mars Team' }],
  educations: [{ degree: 'Computer Engineering', institution: 'University of Baghdad' }],
  projects: [{ title: 'CV Generator', description: 'Free wep app with simpl & straight forward interface to help u craft the best CV for your next interview' }],
  certificates: [{ title: 'CS50x', issuer: 'Harvard University' }],
  skills: ['Vue.js', 'Tailwind CSS', 'Laravel', 'MySQL', 'Git'],
  photo: './img/cv-placeholder.jpeg',
});

const updatePhoto = (newPhoto) => {
  user.value.photo = newPhoto;
};

// Form schema
const formSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone is required'),
  experiences: yup.array().of(
    yup.object({
      role: yup.string().required('Role is required'),
      company: yup.string().required('Company is required'),
    })
  ).min(1, 'At least one experience is required'),
  educations: yup.array().of(
    yup.object({
      degree: yup.string().required('Degree is required'),
      institution: yup.string().required('Institution is required'),
    })
  ).min(1, 'At least one education is required'),
  projects: yup.array().of(
    yup.object({
      title: yup.string().required('Title is required'),
      description: yup.string().required('Description is required'),
    })
  ).min(1, 'At least one project is required'),
  certificates: yup.array().of(
    yup.object({
      title: yup.string().required('Title is required'),
      issuer: yup.string().required('Issuer is required'),
    })
  ).min(1, 'At least one certificate is required'),
  skills: yup.array().of(
    yup.string().required('Skill is required')
  ).min(1, 'At least one skill is required'),
});

// Generic handlers for adding/removing sections
const addItem = (section, defaultItem) => {
  user.value[section].push(defaultItem);
};

const removeItem = (section, index) => {
  user.value[section].splice(index, 1);
};

// Submit form
const submitForm = () => {
  console.log('Form submitted', user.value);
};

const printCV = () => {
  // Check if the form is valid before printing
  Form.validate().then(() => {
    // Create a print-friendly version of the CV
    const printWindow = window.open('', '', 'height=800,width=600');
    printWindow.document.open();
    printWindow.document.write(`
      <html>
      <head>
        <title>Print CV</title>
        <style>
          @media print {
            #cv-preview {
              width: 210mm; /* A4 width */
              height: auto;
            }
          }
          #cv-preview {
            aspect-ratio: 210 / 297;
            max-width: 210mm;
            /* Set the max width to A4 width */
            height: auto;
          }
        </style>
      </head>
      <body onload="window.print();window.close();">
        <div id="cv-preview">
          ${document.querySelector('#cv-preview').innerHTML}
        </div>
      </body>
      </html>
    `);
    printWindow.document.close();
  }).catch((errors) => {
    console.error('Validation failed:', errors);
  });
};

</script> -->

<script setup>
import { ref } from 'vue';
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import FloatingLabelField from './components/FloatingLabelField.vue';
import DefaultButton from './components/DefaultButton.vue';
import CVPreview from './components/CVPreview.vue';
import ImageUpload from './components/ImageUpload.vue';
import DeleteButton from './components/DeleteButton.vue';
import PageHeader from './components/PageHeader.vue';
import PageFooter from './components/PageFooter.vue';

// User data structure
const user = ref({
  name: 'Yousif Mahmood',
  email: 'yousifvnd@gmail.com',
  phone: '07732083333',
  experiences: [{ role: 'Web Developer', company: 'Mars Team' }],
  educations: [{ degree: 'Computer Engineering', institution: 'University of Baghdad' }],
  projects: [{ title: 'CV Generator', description: 'Free web app with a simple & straightforward interface to help you craft the best CV for your next interview' }],
  certificates: [{ title: 'CS50x', issuer: 'Harvard University' }],
  skills: ['Vue.js', 'Tailwind CSS', 'Laravel', 'MySQL', 'Git'],
  photo: './img/cv-placeholder.jpeg',
});

const updatePhoto = (newPhoto) => {
  user.value.photo = newPhoto;
};

// Form schema
const formSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone is required'),
  experiences: yup.array().of(
    yup.object({
      role: yup.string().required('Role is required'),
      company: yup.string().required('Company is required'),
    })
  ).min(1, 'At least one experience is required'),
  educations: yup.array().of(
    yup.object({
      degree: yup.string().required('Degree is required'),
      institution: yup.string().required('Institution is required'),
    })
  ).min(1, 'At least one education is required'),
  projects: yup.array().of(
    yup.object({
      title: yup.string().required('Title is required'),
      description: yup.string().required('Description is required'),
    })
  ).min(1, 'At least one project is required'),
  certificates: yup.array().of(
    yup.object({
      title: yup.string().required('Title is required'),
      issuer: yup.string().required('Issuer is required'),
    })
  ).min(1, 'At least one certificate is required'),
  skills: yup.array().of(
    yup.string().required('Skill is required')
  ).min(1, 'At least one skill is required'),
});

// Generic handlers for adding/removing sections
const addItem = (section, defaultItem) => {
  user.value[section].push(defaultItem);
};

const removeItem = (section, index) => {
  user.value[section].splice(index, 1);
};

// Set up form validation
const { validate, resetForm } = useForm({
  validationSchema: formSchema,
});

// Submit form
const submitForm = async () => {
  try {
    await validate();
    console.log('Form submitted', user.value);
  } catch (errors) {
    console.error('Validation failed:', errors);
  }
};

// Print CV
const printCV = async () => {
  try {
    await validate(); // Validate the form
    const printWindow = window.open('', '', 'height=800,width=600');
    printWindow.document.open();
    printWindow.document.write(`
      <html>
      <head>
        <title>CV Generator</title>
        <style>
          @media print {
            #cv-preview {
              width: 210mm; /* A4 width */
              height: auto;
            }
          }
          #cv-preview {
            aspect-ratio: 210 / 297;
            max-width: 210mm;
            /* Set the max width to A4 width */
            height: auto;
          }
        </style>
      </head>
      <body onload="window.print();window.close();">
        <div id="cv-preview">
          ${document.querySelector('#cv-preview').innerHTML}
        </div>
      </body>
      </html>
    `);
    printWindow.document.close();
  } catch (errors) {
    console.error('Validation failed:', errors);
  }
};
</script>


<style scoped>
#cv-preview {
  aspect-ratio: 210 / 297;
  max-width: 210mm;
  /* Set the max width to A4 width */
  height: auto;
}
</style>
