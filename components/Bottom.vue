<template>
    <section class="bottom-section">
        <div class="first-conteiner">
            <div class="img-conteiner">
                <Logo />
            </div>
            <h6 class="OOO">ООО «ТОРГОВЫЙ ДОМ «ЛОС-БИО»</h6>
            <p><span>ИНН: </span>2463123719<span class="KPP">КПП: </span>246301001</p>
            <p><span>ОГРН: </span>1212400008688</p>
        </div>
        <div class="second-conteiner">
            <ul class="ul-company">
                <li class="main-li">КОМПАНИЯ</li>
                <li><a href="#">О компании</a></li>
                <li><a href="#">Проекты</a></li>
                <li><a href="#">Каталог</a></li>
                <li><a href="#">Контакты</a></li>
            </ul>
        </div>
        <div class="third-conteiner">
            <ul class="ul-catalog">
                <li class="main-li">КАТАЛОГ</li>
                <li><a href="#">КНС</a></li>
                <li><a href="#">Ёмкости</a></li>
                <li><a href="#">Ливневые очистные-сооружения</a></li>
                <li><a href="#">Хозяйственно-бытовые очистные сооружения</a></li>
                <li><a href="#">Комплектующие</a></li>
            </ul>
        </div>
        <div class="fourth-conteiner">
            <ul class="ul-contacts">
                <li class="main-li" id="main-li-fourth">КОНТАКТЫ</li>
                <li><Number />+7 (391) 209-57-57</li>
                <li><Number />+7 (391) 209-57-57</li>
                <li><Mail /><a class="link" href="#">los-bio@mail.ru</a></li>
                <li><Return /><a class="link" href="#">Заказать звонок</a></li>
            <li><a href="#"><div class="right-button-bottom">Получить КП</div></a></li>
            </ul>
        </div>
    </section>
</template>

<script setup lang="ts">
  import Logo from "~/assets/svg/logo.svg";
  import Gps from "~/assets/svg/gps.svg";
  import Number from "~/assets/svg/number.svg";
  import Return from "~/assets/svg/return.svg";
  import Mail from "~/assets/svg/mail.svg";
</script>

<style lang="scss">
@use "~/assets/scss/Bottom.scss"
</style>