<template>
  <div class="meta">
    <MainHeader />
    <LanguageButton :is-additional-page="true" />
    <Menu />
    <Support />
    <div class="meta__main">
      <div class="meta__colour-container meta__colour-container_colour_grey-top" />
      <div class="meta__colour-container meta__colour-container_colour_white" />
      <div class="meta__colour-container meta__colour-container_colour_grey-bottom">
        <Drop class="meta__drop" />
      </div>
      <div class="meta__colour-container meta__colour-container_colour_red" />
      <LogoWhite />
      <div class="meta__container">
        <h1 ref="titleContainer" class="meta__title">
          <span v-for="line in splitTitle" :key="line" class="text-with-line">{{ line }}</span>
        </h1>
        <p class="meta__subtitle">
          Подзаголовок   такой весь из себя не большой,  но очень внушительный
        </p>
      </div>
      <div class="meta__wrapper">
        <img class="meta__image" src="~/assets/images/blade.svg" alt="Лезвие">
        <div class="meta__data">
          <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam blanditiis dolor ducimus eius est eum ex ipsum labore quis similique! Aut corporis cum expedita laborum necessitatibus perferendis rerum tempora voluptatibus?</span><span>Ad animi assumenda consectetur consequatur corporis debitis dolorem doloribus ea ipsum itaque laborum maiores minus modi molestiae molestias neque nisi non nulla, praesentium, quae quia recusandae rem sapiente, soluta voluptatibus?</span><span>Accusamus adipisci animi assumenda at atque doloremque exercitationem facere facilis fuga in minus molestias perferendis praesentium provident quam quas quia quisquam, repellendus saepe sed similique sint soluta unde veniam voluptates.</span><span>Accusamus, consectetur consequuntur earum illum iste minus nam nemo quasi quia quidem quo reiciendis rerum sequi veniam voluptates! Alias asperiores blanditiis dicta doloremque ea, eaque ipsum laboriosam nostrum sapiente. Velit!</span><span>Commodi ipsum nesciunt pariatur repudiandae? Consequatur consequuntur eaque eos, error inventore iste labore magni nemo neque obcaecati odio quae qui quibusdam quis reiciendis rem repellendus repudiandae tempore ullam vel veniam.</span><span>Aliquid eligendi hic laudantium qui! Ab aliquid animi at consectetur cum deserunt dignissimos dolor explicabo id impedit, itaque laudantium maxime natus, odit quod reiciendis rerum saepe suscipit velit veniam voluptatem?</span><span>Fuga itaque maiores minima, perferendis quas suscipit ut voluptates? Culpa fuga nemo recusandae sunt veniam? Ad ea, enim est eum, fugit ipsum molestiae mollitia nam numquam pariatur placeat possimus, ratione.</span><span>Ab alias aut earum, eius incidunt quibusdam sit voluptate! Blanditiis dolorum ducimus eos iste labore modi, perferendis placeat sapiente tenetur voluptate? Cum dolore minus omnis qui repellat sit vitae voluptatem?</span><span>Architecto asperiores, culpa excepturi fuga impedit magni minima necessitatibus possimus repellat repudiandae sequi similique suscipit vitae! Accusantium architecto eos error ex explicabo impedit non obcaecati quo, quos vitae voluptate voluptates?</span><span>A aspernatur eos illum maxime sequi! Distinctio eos ipsam iure modi nam quaerat quibusdam, quis recusandae voluptatem. Commodi laborum quisquam vero? Consectetur deleniti, est illum pariatur placeat quasi sint suscipit!</span><span>Accusantium at aut eligendi expedita explicabo facere nesciunt, non, odio perferendis porro quae quasi qui repellat repellendus tempore. Culpa dolorem facilis fugiat quidem recusandae veritatis vero voluptas! Aperiam, aspernatur officiis.</span><span>Accusantium, alias, animi aspernatur dolor eius ex expedita harum in molestias natus, nisi pariatur sed totam veritatis voluptatem. Facere harum hic ipsum quae tempora! Commodi debitis inventore necessitatibus provident ratione.</span><span>A aliquam amet, commodi cum deserunt dolorem eaque eligendi ex illo ipsum iste molestiae molestias odit pariatur porro quia ratione, tempora. Architecto et iusto, minima natus omnis suscipit totam velit?</span><span>Aliquid animi consequuntur dicta, doloribus est et eveniet explicabo facilis inventore laborum libero, minus mollitia nesciunt nulla quaerat quis repellat saepe sit soluta vero? Amet deserunt eveniet excepturi nostrum quisquam?</span><span>Aliquam aliquid beatae commodi consequatur cum dicta distinctio expedita, hic illum iure labore laboriosam minus molestiae nostrum nulla omnis optio praesentium provident quam qui suscipit vel veritatis voluptas voluptatibus voluptatum.</span><span>Asperiores dolore eius incidunt inventore ipsam neque, obcaecati optio quas quibusdam quo quos voluptatum? Accusantium aperiam atque commodi, dignissimos doloremque ducimus eius illo iste non placeat sint sunt, veniam voluptatum.</span><span>Architecto at beatae consectetur ea esse illo impedit ipsam itaque laborum nesciunt odio quia, tenetur voluptatem! Culpa enim esse, facilis labore magni molestias nisi quo sit ut? Deserunt, quas, repudiandae.</span><span>Commodi cupiditate eaque error et, iure suscipit unde voluptate? Ab aliquam at, aut blanditiis deserunt doloribus earum eligendi eveniet facere ipsa iure magnam placeat quibusdam quis sapiente sit ullam voluptatem.</span><span>Accusamus facilis id iure nulla perspiciatis possimus quae voluptatem! Consequuntur delectus, distinctio dolores ducimus eligendi est eveniet expedita hic, incidunt magnam modi odit officiis pariatur quis ratione tempora, ut voluptas.</span><span>Aliquam earum enim id, illum impedit incidunt itaque magni minima nesciunt omnis praesentium quidem sequi veniam. Alias, error eum expedita ipsam itaque totam vitae voluptas! Autem numquam quae quos rem!</span></p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import splitLine from '@/utilites/splitLine'

export default {
  data () {
    return {
      titleText: 'Заголовок',
      splitTitle: ['Заголовок'],
      resizeTimeout: null
    }
  },
  beforeMount () {
    window.addEventListener('resize', this.handleSplitTitle)
  },
  mounted () {
    this.handleSplitTitle()
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleSplitTitle)
  },
  methods: {
    handleSplitTitle () {
      if (!this.resizeTimeout) {
        this.resizeTimeout = setTimeout(() => {
          this.resizeTimeout = null
          this.splitTitle = splitLine(this.titleText, this.$refs.titleContainer)
        }, 40)
      }
    }
  }
}
</script>

<style scoped>
.meta {
  margin: 0 auto;
  min-height: 100vh;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 100%;
  overflow: hidden;
}

.meta__drop {
  display: none;
}

.meta__main {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  align-self: stretch;
}

.meta__container {
  background-color: #cbcbcb;
  width: 100%;
}

.meta__title {
  width: 80%;
  margin: 27px 0 14px 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: Vollkorn, Times, serif;
  font-size: 110px;
  line-height: 69px;
  color: #fff;
  font-style: italic;
  word-break: break-all;
}

.text-with-line {
  font-family: Vollkorn, Times, serif;
  font-size: 110px;
  line-height: 69px;
  color: #fff;
  font-style: italic;
  position: relative;
  word-break: normal;
}

.text-with-line::after {
  content: '';
  height: 15px;
  width: 100%;
  background-color: #b23438;
  bottom: 2px;
  left: 0;
  position: absolute;
}

.meta__subtitle {
  font-family: Vollkorn, Times, serif;
  font-size: 18px;
  line-height: 19px;
  font-style: italic;
  font-weight: 600;
  max-width: 72%;
  margin-left: 22px;
  margin-bottom: 18px;
}

.meta__image {
  width: 100%;
  height: auto;
  max-width: 500px;
  margin: 0 auto 20px;
}

.meta__data {
  max-width: 85%;
  margin: 0 auto;
}

@media screen and (min-width: 768px) {
  .meta__title {
    font-size: 220px;
    line-height: 137px;
    width: 87%;
    margin: 63px 0 30px 45px;
  }

  .text-with-line {
    font-size: 220px;
    line-height: 137px;
  }

  .text-with-line::after {
    height: 33px;
    width: 100%;
  }

  .meta__subtitle {
    font-size: 36px;
    line-height: 38px;
    font-style: normal;
    max-width: 72%;
    margin-left: 52px;
    margin-bottom: 52px;
  }

  .meta__image {
    height: 367px;
    max-width: unset;
    margin: 0 auto 50px;
    object-fit: contain;
  }
}

@media screen and (min-width: 1098px) {
  .meta__main {
    display: grid;
    grid-template-columns: auto 1098px auto;
    grid-template-areas:
      "grey-top title white"
      "red data grey-bottom";
    align-items: unset;
  }

  .meta__colour-container {
    width: calc((100vw - 1098px) / 2);
    height: auto;
  }

  .meta__colour-container_colour_grey-top {
    grid-area: grey-top;
    background-color: #cbcbcb;
  }

  .meta__colour-container_colour_white {
    grid-area: white;
    background-color: #fff;
  }

  .meta__colour-container_colour_grey-bottom {
    grid-area: grey-bottom;
    background-color: #cbcbcb;
    position: relative;
  }

  .meta__colour-container_colour_red {
    grid-area: red;
    background-color: #b23438;
  }

  .meta__container {
    grid-area: title;
  }

  .meta__title {
    font-size: 247px;
    line-height: 178px;
    width: 92%;
  }

  .text-with-line {
    font-size: 247px;
    line-height: 178px;
  }

  .meta__subtitle {
    font-size: 40px;
    line-height: 42px;
    max-width: 80%;
  }

  .meta__image {
    width: 50%;
    float: left;
    height: 367px;
    margin: 0 auto 50px;
    object-fit: contain;
  }

  .meta__wrapper {
    grid-area: data;
    margin-top: 50px;
  }
}

@media screen and (min-width: 1280px) {
  .meta__drop {
    display: block;
    width: 36px;
    height: 62px;
  }
}
</style>
