<template>
    <div id="cv-preview" class="p-5">
        <h1 class="text-2xl font-semibold">{{ user.name }}</h1>
        <p>Email: {{ user.email }}</p>
        <p>Phone: {{ user.phone }}</p>
        <!-- Experience -->
        <section v-if="user.experiences.length">
            <h2 class="mt-4 text-xl font-semibold">Experience</h2>
            <div v-for="(experience, index) in user.experiences" :key="index">
                <p>{{ experience.role }} at {{ experience.company }}</p>
            </div>
        </section>
        <!-- Education -->
        <section v-if="user.educations.length">
            <h2 class="mt-4 text-xl font-semibold">Education</h2>
            <div v-for="(education, index) in user.educations" :key="index">
                <p>{{ education.degree }} - {{ education.institution }}</p>
            </div>
        </section>
        <!-- Skills -->
        <section v-if="user.skills.length">
            <h2 class="mt-4 text-xl font-semibold">Skills</h2>
            <ul>
                <li v-for="(skill, index) in user.skills" :key="index">{{ skill }}</li>
            </ul>
        </section>
        <!-- Certificates -->
        <section v-if="user.certificates.length">
            <h2 class="mt-4 text-xl font-semibold">Certificates</h2>
            <div v-for="(certificate, index) in user.certificates" :key="index">
                <p>{{ certificate.title }} - {{ certificate.issuer }}</p>
            </div>
        </section>
        <!-- Awards -->
        <!-- <section v-if="user.awards.length">
            <h2 class="mt-4 text-xl font-semibold">Awards</h2>
            <div v-for="(award, index) in user.awards" :key="index">
                <p>{{ award.title }} ({{ award.year }})</p>
            </div>
        </section> -->
        <!-- Volunteering -->
        <!-- <section v-if="user.volunteering.length">
            <h2 class="mt-4 text-xl font-semibold">Volunteering</h2>
            <div v-for="(volunteer, index) in user.volunteering" :key="index">
                <p>{{ volunteer.role }} at {{ volunteer.organization }}</p>
            </div>
        </section> -->
        <!-- Projects -->
        <section v-if="user.projects.length">
            <h2 class="mt-4 text-xl font-semibold">Projects</h2>
            <div v-for="(project, index) in user.projects" :key="index">
                <p>{{ project.title }}</p>
                <p>{{ project.description }}</p>
            </div>
        </section>
    </div>
</template>

<script setup>
defineProps({
    user: Object,
});
</script>

