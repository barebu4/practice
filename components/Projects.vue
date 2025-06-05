<template>
  <section class="projects">
    <h2>Проекты</h2>
    <div class="cards-block">
        <NuxtLink
            v-for="project in projects"
            :key="project.id"
            :to="`/projects/${project.slug}`"
            :class="['projects-cards', {'third-card': project.id === 6}, {'ninth-card': project.id === 9}]"
        >
            <img :src="project.imageUrl" alt="project-image" v-if="project.imageUrl" />
            <p class="card-title">{{ project.title }}</p>
            <p class="card-description">{{ project.description }}</p>
            <p class="type-work"><strong>Тип работы:</strong> {{ project.type }}</p>
            <p class="customer-work"><strong>Заказчик:</strong> {{ project.client }}</p>
        </NuxtLink>
    </div>
  </section>
</template>


<script setup>
const { data, error } = await useFetch('https://api.los-bio.ru/projects/');

const projects = computed(() =>
  (data.value || [])
    .filter(project => project && project.slug)
    .map((project) => ({
      id: project.id,
      title: project.title,
      slug: project.slug,
      description: project.short_description?.blocks?.[0]?.data?.text || '',
      type: project.works,
      client: project.customer,
      imageUrl: project.photos?.[0]
        ? `https://api.los-bio.ru/files/${project.photos[0].catalog}/${project.photos[0].name}`
        : '',
    }))
);

</script>

<style lang="scss">

@use "~/assets/scss/Project.scss";

</style>
