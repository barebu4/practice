<template>
  <div class="pre-navbar">
    <div class="adress">
      <p><Gps />г. Красноярск, ул. Телевизорная 1, стр. 14, оф. 204</p>
    </div>
    <div class="first-number">
      <p><Number />+7 (391) 209 57-57</p>
    </div>
    <div class="second-number">
      <p><Number />+7 (391) 215 54-33</p>
    </div>
    <div class="mail">
      <p><Mail />los-bio@mail.ru</p>
    </div>
    <div class="order-call">
      <p><Return />Заказать звонок</p>
    </div>
  </div>
    <nav class="navbar navbar-expand-lg ">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <Logo />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">О компании</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">Проекты</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Каталог
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Ссылка 1</a></li>
                <li><a class="dropdown-item" href="#">Ссылка 2</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Ссылка 3</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">Контакты</a>
            </li>
          </ul>
          <div class="button-conteiner">
            <a href="#"><div class="right-button" width="5em">Получить КП</div></a>
          </div>
        </div>
      </div>
    </nav>
</template>


<script setup lang="ts">
  import Logo from "~/assets/svg/logo.svg";
  import Gps from "~/assets/svg/gps.svg";
  import Number from "~/assets/svg/number.svg";
  import Return from "~/assets/svg/return.svg";
  import Mail from "~/assets/svg/mail.svg";
</script>

<style lang="scss">

@use "~/assets/scss/navbar.scss";
@use "~/assets/scss/main.scss";

</style>


