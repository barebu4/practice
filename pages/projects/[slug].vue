<template>
  <section class="project" v-if="project">
    <div class="project-page">
      <div class="first-conteiner">
        <h1 class="project-title">{{ project.title }}</h1>
        <p class="project-description" v-html="project.description"></p>
      </div>
      <div class="second-conteiner">
        <div class="img-conteiner">
          <div class="main-img">
            <img :src="project.images[0]" alt="Главное изображение" />
          </div>
          <div class="additional-img-conteiner">
            <div class="additional-img first-img">
              <img :src="project.images[1]" alt="Дополнительное изображение" />
            </div>
            <div class="additional-img second-img">
              <img :src="project.images[2]" alt="Дополнительное изображение" />
            </div>
            <div class="additional-img third-img">
              <img :src="project.images[3]" alt="Дополнительное изображение" />
            </div>
          </div>
        </div>
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

const { data, error } = await useFetch('https://api.los-bio.ru/projects/' + slug, {
  key: slug,
  server: true, // Явно включить SSR
});

const blocksToHtml = (blocks) => {
  return blocks.map((block) => {
    switch (block.type) {
      case "header":
        return `<h2>${block.data.text}</h2>`;
      case "paragraph":
        return `<p>${block.data.text}</p>`;
      case "Products":
        return `<p class="data-link"><a href="${block.data.link}" target="_blank">${block.data.link}</a></p>`
      case "list":
        const tag = block.data.style === 'ordered' ? 'ol' : 'ul';
        return `<${tag}>${block.data.items.map(item => `<li>${item}</li>`).join("")}</${tag}>`;
      default:
        return "";
    }
  }).join("");
};


const project = computed(() => {
  const p = data.value;
  return p
    ? {
        title: p.title,
        images: p.photos?.map(photo =>
        `https://api.los-bio.ru/files/${photo.catalog}/${photo.name}`
        ) || [],
        description: blocksToHtml(p.description?.blocks || []),
        works: p.works,
        customer: p.customer,
        photo:
          p.photos
      }
    : null;


});
</script>

<style lang="scss">
@use "~/assets/scss/slug.scss";
</style>