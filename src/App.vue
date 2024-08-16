<template>
  <div class="font-hanken-grotesk">
    <PageHeader />
    <div class="flex flex-col min-h-screen mt-0 mb-10 ml-10 mr-10 bg-black lg:flex-row lg:space-x-4">
      <!-- Form Section -->
      <div class="w-full max-h-[100vh] p-4 mb-4 overflow-y-scroll bg-gray-700 rounded-lg shadow-md lg:w-1/4 lg:mb-0">
        <PersonalInfoForm />

        <!-- Image Upload Component -->
        <ImageUpload :photo="user.photo" @update:photo="updatePhoto" />

        <ExperienceForm />
        <EducationForm />
        <ProjectsForm />
        <SkillsForm />
        <CertificatesForm />
        <!-- <AwardsForm /> -->
        <!-- <VolunteeringForm /> -->
        <button @click="generatePDF" class="p-2 mt-4 text-white bg-green-500 rounded">Download as PDF</button>
      </div>
      <!-- CV Preview Section -->
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

<script setup>
import { ref, provide } from 'vue';
import html2pdf from 'html2pdf.js/dist/html2pdf.bundle.min';
import PersonalInfoForm from './components/PersonalInfoForm.vue';
import ExperienceForm from './components/ExperienceForm.vue';
import EducationForm from './components/EducationForm.vue';
import SkillsForm from './components/SkillsForm.vue';
import CertificatesForm from './components/CertificatesForm.vue';
// import AwardsForm from './components/AwardsForm.vue';
// import VolunteeringForm from './components/VolunteeringForm.vue';
import ProjectsForm from './components/ProjectsForm.vue';
import CVPreview from './components/CVPreview.vue';
import PageHeader from './components/PageHeader.vue';
import PageFooter from './components/PageFooter.vue';
import ImageUpload from './components/ImageUpload.vue';

const user = ref({
  name: 'Yousif Mahmood',
  email: 'yousifvnd@gmail.com',
  phone: '07732083333',
  experiences: [{ role: 'Wev Developer', company: 'Mars Team' }],
  educations: [{ degree: 'Computer Engineering', institution: 'University of Baghdad' }],
  skills: ['Vue.js', 'Tailwind CSS', 'Laravel'],
  certificates: [{ title: 'CS50x', issuer: 'Harvard University' }],
  projects: [{ title: 'Weather App', description: 'Dynamic weather app to show real time weather forecasts around the world' }],
  photo: './img/cv-placeholder.jpeg',
});

const updatePhoto = (newPhoto) => {
  user.value.photo = newPhoto;
};

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

provide('user', user);
</script>

<style scoped>
#cv-preview {
  aspect-ratio: 210 / 297;
  max-width: 210mm;
  /* Set the max width to A4 width */
  height: auto;
}
</style>
