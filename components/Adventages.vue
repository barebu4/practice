<template>
  <section class="container-advantages">
    <div class="row text-center">
      <h2 class="h2" id="h2-in-row">Наши преимущества</h2>
      <div class="col-md-6 mb-4" v-for="item in features" :key="item.id">
          <div class="card-body">
            <div class="first-row">
              <img :src="item.icon" alt="Иконка" width="60" height="60" />
              <h4 class="card-title">{{ item.title }}</h4>
            </div>
            <p class="card-text">{{ item.description }}</p>
          </div>
      </div>
    </div>
  </section>
</template>


<script setup>
const baseURL = "https://api.los-bio.ru";


const { data, error } = await useFetch(`${baseURL}/info/group/advantages`, {
  transform: (raw) => {
    return raw.map((item) => {
      const parsed = JSON.parse(item.value);
      return {
        id: parsed.id,
        title: parsed.title,
        description: parsed.description,
        icon: parsed.icon,
      };
    });
  },
});


if (error.value) {
  console.error("Ошибка загрузки преимуществ:", error.value);
}


const features = computed(() => data.value || []);
</script>


<style lang="scss">

@use "~/assets/scss/Advantages.scss";

</style>

