<template>
  <div class="min-h-screen bg-gray-100 p-10 flex flex-col lg:flex-row lg:space-x-4">
    <!-- Form Section -->
    <div class="w-full lg:w-1/4 p-4 bg-white shadow-md rounded-lg mb-4 lg:mb-0 h-screen overflow-y-auto">
      <PersonalInfoForm />
      <ExperienceForm />
      <EducationForm />
      <SkillsForm />
      <CertificatesForm />
      <AwardsForm />
      <VolunteeringForm />
      <ProjectsForm />
      <button @click="generatePDF" class="bg-green-500 text-white p-2 rounded mt-4">Download as PDF</button>
    </div>

    <!-- CV Preview Section -->
    <div class="w-full lg:w-3/4 p-4 bg-white shadow-md rounded-lg flex flex-col justify-center items-center">
      <!-- Preview Control Buttons -->
      <div class="flex space-x-4 mb-4">
        <button @click="decreaseSize" class="bg-blue-500 text-white p-2 rounded">-</button>
        <input v-model="customSize" type="range" min="30" max="100" class="slider" @input="updatePreviewSize" />
        <button @click="increaseSize" class="bg-blue-500 text-white p-2 rounded">+</button>
        <span>{{ customSize }}%</span>
        <button @click="fitToScreen" class="bg-blue-500 text-white p-2 rounded">Fit</button>
      </div>

      <!-- CV Preview Section -->
      <div id="cv-preview" class="bg-white shadow-lg overflow-hidden border"
        :style="{ width: customSize + '%', aspectRatio: '210 / 297' }">
        <CVPreview :user="user" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, provide, onMounted } from 'vue';
import html2pdf from 'html2pdf.js/dist/html2pdf.bundle.min';
import PersonalInfoForm from './components/PersonalInfoForm.vue';
import ExperienceForm from './components/ExperienceForm.vue';
import EducationForm from './components/EducationForm.vue';
import SkillsForm from './components/SkillsForm.vue';
import CertificatesForm from './components/CertificatesForm.vue';
import AwardsForm from './components/AwardsForm.vue';
import VolunteeringForm from './components/VolunteeringForm.vue';
import ProjectsForm from './components/ProjectsForm.vue';
import CVPreview from './components/CVPreview.vue';

const user = ref({
  name: 'yousif',
  email: 'you@gmail.com',
  phone: '08873238238',
  experiences: [{ role: 'web dev', company: 'mars team' }],
  educations: [{ degree: 'computer engineering', institution: 'uob' }],
  skills: ['reading', 'writing'],
  certificates: [{ title: 'cs50x', issuer: 'harvard university' }],
  awards: [{ title: '', year: '' }],
  volunteering: [{ role: '', organization: '' }],
  projects: [{ title: '', description: '' }],
});

const customSize = ref(100); // Default size for preview
const originalSize = ref(100); // Track the user's preferred preview size

const generatePDF = () => {
  const element = document.getElementById('cv-preview');

  // Temporarily set preview to 100% for printing
  customSize.value = 100;

  // Generate the PDF
  html2pdf().from(element).save().then(() => {
    // After saving, reset to the user's chosen size
    customSize.value = originalSize.value;
  });
};

const updatePreviewSize = () => {
  // Keep track of the user's chosen size
  originalSize.value = customSize.value;
};

const increaseSize = () => {
  if (customSize.value < 100) {
    customSize.value += 10;
    originalSize.value = customSize.value;
  }
};

const decreaseSize = () => {
  if (customSize.value > 30) {
    customSize.value -= 10;
    originalSize.value = customSize.value;
  }
};

// "Fit" function to adjust preview to fit the screen size
const fitToScreen = () => {
  customSize.value = 100; // Adjust this percentage to fit as needed
  originalSize.value = customSize.value;
};

provide('user', user);
</script>

<style>
/* Custom Style to Lock A4 Ratio */
#cv-preview {
  aspect-ratio: 210 / 297;
  height: auto;
}

/* Style for the slider */
.slider {
  width: 100px;
}
</style>
