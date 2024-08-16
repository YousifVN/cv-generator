<template>
    <div id="cv-preview" class="p-5 bg-white font-sedan">

        <div class="flex items-start justify-between mb-4">
            <!-- User Info -->
            <div class="flex-1">
                <h1 class="mb-2 text-2xl font-semibold">{{ user.name }}</h1>
                <div>
                    <span class="font-semibold">Email:</span>
                    {{ user.email }}
                </div>
                <div>
                    <span class="font-semibold">Phone:</span>
                    {{ user.phone }}
                </div>
            </div>

            <!-- User Photo -->
            <div v-if="user.photo" class="flex-shrink-0 ml-4 overflow-hidden border border-gray-300 rounded-lg">
                <img :src="user.photo" alt="User Photo" class="object-cover w-32 h-32" />
            </div>
        </div>

        <!-- Experience -->
        <section v-if="user.experiences.length">
            <h2 class="mt-4 text-xl font-semibold">Experience</h2>
            <div v-for="(experience, index) in user.experiences" :key="index">
                <div>
                    {{ experience.company }} - <span class="italic">{{ experience.role }}</span>
                </div>
            </div>
        </section>

        <!-- Education -->
        <section v-if="user.educations.length">
            <h2 class="mt-4 text-xl font-semibold">Education</h2>
            <div v-for="(education, index) in user.educations" :key="index">
                <div>
                    {{ education.institution }} - <span class="italic">{{ education.degree }}</span>
                </div>
            </div>
        </section>

        <!-- Skills -->
        <section v-if="user.skills.length">
            <h2 class="mt-4 text-xl font-semibold">Skills</h2>
            <div class="flex flex-wrap space-x-2">
                <span v-for="(skill, index) in user.skills" :key="index">
                    {{ skill }}<span v-if="index < user.skills.length - 1">,</span>
                </span>
            </div>
        </section>

        <!-- Certificates -->
        <section v-if="user.certificates.length">
            <h2 class="mt-4 text-xl font-semibold">Certificates</h2>
            <div v-for="(certificate, index) in user.certificates" :key="index">
                <div>
                    {{ certificate.title }} - <span class="italic">{{ certificate.issuer }}</span>
                </div>
            </div>
        </section>

        <!-- Projects -->
        <section v-if="user.projects.length">
            <h2 class="mt-4 text-xl font-semibold">Projects</h2>
            <div v-for="(project, index) in user.projects" :key="index">
                <div>
                    <span class="font-semibold">{{ project.title }}:</span> {{ project.description }}
                </div>
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

    </div>
</template>

<script setup>
defineProps({
    user: Object,
});
</script>