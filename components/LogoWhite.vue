<template>
  <router-link to="donation" class="logo">
    <img :src="$i18n.locale === 'ru' ? image_ru : image_en" alt="Логотип" class="logo__image">
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
    right: 5px;
    width: 20%;
    height: auto;
    top: 20%;
  }

  .logo:hover {
    opacity: 0.8;
  }

  .logo__image {
    object-fit: cover;
    width: 100%;
    height: auto;
  }
}
</style>
