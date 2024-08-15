<template>
  <div class="min-h-screen bg-gray-100 p-10 flex">
    <!-- Form Section -->
    <div class="w-1/2 p-4 bg-white shadow-md rounded-lg">
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
    <div class="w-1/2 p-4 bg-white shadow-md rounded-lg ml-4">
      <CVPreview :user="user" />
    </div>
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
import AwardsForm from './components/AwardsForm.vue';
import VolunteeringForm from './components/VolunteeringForm.vue';
import ProjectsForm from './components/ProjectsForm.vue';
import CVPreview from './components/CVPreview.vue';

const user = ref({
  name: 'yousif',
  email: 'you@gmail.cpm',
  phone: '08873238238',
  experiences: [{ role: 'web dev', company: 'mars team' }],
  educations: [{ degree: 'computer engineering', institution: 'uob' }],
  skills: ['reading', 'writing'],
  certificates: [{ title: 'cs50x', issuer: 'harvard university' }],
  awards: [{ title: '', year: '' }],
  volunteering: [{ role: '', organization: '' }],
  projects: [{ title: '', description: '' }],
});

const generatePDF = () => {
  const element = document.getElementById('cv-preview');
  html2pdf().from(element).save();
};

provide('user', user);
</script>
