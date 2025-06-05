<template>
  <section class="carousel-section">
    <div id="carouselExampleIndicators" class="carousel slide">
      <div class="carousel-indicators">
        <button
          v-for="(slide, index) in slides"
          :key="index"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          :data-bs-slide-to="index"
          :class="{ active: index === 0 }"
          :aria-label="`Slide ${index + 1}`"
          :aria-current="index === 0"
        ></button>
      </div>

      <div class="carousel-inner">
        <div
          v-for="(slide, index) in slides"
          :key="slide.id"
          class="carousel-item"
          :class="{ active: index === 0 }"
        >
          <div class="carousel-caption d-none d-md-block">
            <div class="child">
              <div class="child-text">
                <h2 class="slide-title">{{ slide.title }}</h2>
                <p class="slide-description">{{ slide.description }}</p>
                <a :href="slide.link" class="btn btn-primary">Подробнее</a>
              </div>
            </div>
            <div class="img-child">
              <img
                :src="slide.imageUrl"
                class="carousel-image"
                :alt="slide.title"
              />
            </div>
          </div>
        </div>
      </div>

      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>

      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </section>
</template>

<script setup>
const baseURL = "https://api.los-bio.ru";

const { data, error } = await useFetch(`${baseURL}/info/group/slide`, {
  transform: (raw) =>
    raw.map((slide) => {
      const parsed = JSON.parse(slide.value);
      return {
        id: parsed.id,
        title: parsed.title,
        description: parsed.description,
        link: parsed.link,
        imageUrl: `${baseURL}/files/${parsed.image[0].catalog}/${parsed.image[0].name}`,
      };
    }),
});

if (error.value) {
  console.error("Ошибка загрузки слайдов:", error.value);
}

const slides = computed(() => data.value || []);
</script>

<style lang="scss">
@use "~/assets/scss/SlideCarousel.scss";
</style>
