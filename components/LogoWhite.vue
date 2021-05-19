<template>
  <router-link to="donation" class="logo">
    <img :src="'_nuxt/assets/images/logo_white_' + [$i18n.locale] + '.png'" alt="Логотип" class="logo__image">
  </router-link>
</template>

<script>
import imageRu from '@/assets/images/logo_white_ru.png'
import imageEn from '@/assets/images/logo_white_en.png'

export default {
  name: 'LogoWhite',
  data () {
    return {
      image_ru: imageRu,
      image_en: imageEn
    }
  }
}
</script>

<style scoped>
.logo {
  display: none;
}

@media screen and (min-width: 1280px) {
  .logo {
    display: block;
    position: absolute;
    z-index: 13;
    right: 17px;
    width: 117px;
    height: 86px;
    top: 445px;
  }

  .logo:hover {
    opacity: 0.8;
  }

  .logo__image {
    object-fit: cover;
    width: 117px;
    height: 86px;
  }
}
</style>
