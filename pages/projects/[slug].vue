<template>
  <section class="project" v-if="project">
    <div class="project-page">
      <div class="first-conteiner">
        <h1 class="project-title">{{ project.title }}</h1>
        <p class="project-description" v-html="project.description"></p>
      </div>
      <div class="second-conteiner">
        <img
          :src="project.imageUrl"
          alt="Project Image"
          v-if="project.imageUrl"
        />
        <ul class="project-meta">
          <li><strong>Тип работы:</strong> {{ project.works }}</li>
          <li><strong>Заказчик:</strong> {{ project.customer }}</li>
        </ul>
      </div>
    </div>
  </section>

  <div v-else>Загрузка...</div>

  <div><Bottom /></div>
</template>

<script setup>
const route = useRoute();
const { slug } = route.params;

const { data, pending, error } = await useFetch(
  `https://api.los-bio.ru/projects/${slug}`
);

const project = computed(() => {
  const p = data.value;
  return p
    ? {
        title: p.title,
        imageUrl: p.photos?.[0]
          ? `https://api.los-bio.ru/files/${p.photos[0].catalog}/${p.photos[0].name}`
          : "",
        description:
          p.description?.blocks?.map((b) => b.data?.text).join("<br>") || "",
        works: p.works,
        customer: p.customer,
      }
    : null;
});
</script>

<style lang="scss">
@use "~/assets/scss/slug.scss";
</style>
