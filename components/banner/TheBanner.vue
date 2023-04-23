<script setup lang="ts">
import IconPhone from '~/components/icon/IconPhone.vue'
import IconVK from '~/components/icon/IconVK.vue'
const dataBanner = [
  { img: '/img/dom.jpg', link: '/' },
  { img: '/img/dom.jpg', link: '/' }
]
</script>

<template>
  <Swiper
    :modules="[SwiperEffectCreative, SwiperNavigation]"
    :slides-per-view="1"
    :space-between="0"
    loop
    navigation
    :parallax="true"
    :speed="800"
  >
    <SwiperSlide v-for="(item, index) in dataBanner" :key="index" class="d-flex align-items-center">
      <img :src="item.img" alt="dom">
      <div class="container content user-select-none">
        <div class="row">
          <div class="col-lg-12 col-sm-12">
            <div class="slider-content">
              <h4 class="tag">
                РОСКОШНЫЕ ДОМА
              </h4>
              <h1 class="title">
                Загородные дома <br> в поселке <span>Скандинавия</span>
              </h1>
              <p class="info">
                Красивые и теплые загородные дома
              </p>
              <div class="d-flex align-items-center">
                <div class="slider-button float-start">
                  <NuxtLink :to="item.link">
                    <button class="btn-1">
                      Смотреть
                    </button>
                  </NuxtLink>
                </div>
                <div class="slider-icon d-flex">
                  <a href="tel:+73919990088" class="align-items-center d-flex">
                    <IconPhone style="font-size: 1.75rem" />
                    <h6 class="tel">
                      <span>Телефон:</span> +7 (391) 999-00-88
                    </h6>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="align-items-center d-flex slider-socail-icon">
          <span class="follow-us">Следить за нами:</span>
          <a href="#"><IconVK /></a>
          <a href="#"><i class="fab fa-twitter" /></a>
          <a href="#"><i class="fab fa-pinterest-p" /></a>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<style scoped lang="sass">
@import "@/assets/sass/variables"
.swiper
  height: 850px
  width: 100%
  max-width: 1920px
  position: relative

  &:active
    cursor: grab

  .swiper-slide
    &:before
      position: absolute
      content: ""
      //z-index: 1
      box-shadow: 0 1px 0 0 $gray-1
      width: 100%
      height: 100%
      bottom: 100px
      transform-origin: 100% 0

    &:after
      position: absolute
      content: ""
      //z-index: 1
      right: 100px
      left: 100px
      box-shadow: -1px 0 0 0 $gray-1
      width: 100%
      height: 100%
      -webkit-transform-origin: 100% 0

  .content
    z-index: 2

  .slider-content
    z-index: 3
    cursor: default

    &:active
      cursor: grab

    .tag
      color: $brown-1
      font-size: 1.125rem
      font-weight: 400
      animation: 1s 1.5s fadeInDown both
      padding-bottom: 1rem

    .title
      font-size: 5rem
      color: $white
      font-weight: 400
      animation: 1s 1.5s fadeInDown both

      span
        color: $brown-1

    .info
      font-size: 1.125rem
      color: $white
      padding: 2rem 0 2.8rem
      width: 45%
      animation: 1s 1.3s fadeInRight both

    .tel
      display: inline-block
      font-weight: 400
      font-family: $questrial
      color: $white-1
      font-size: 1.25rem

    .slider-icon
      a, span
        color: $brown-1

    .slider-button
      animation: 1s 1.3s fadeInRight both
      margin-right: 2rem

  .slider-socail-icon
    position: absolute
    left: 40px
    top: 0
    bottom: 0
    animation: 1s 1.5s fadeInDown both

    a
      display: block
      color: $gray-100
      text-align: center
      font-size: 1rem
      margin: 1rem 0 0 -0.5rem
      transition: .3s

    span
      display: inline-block
      font-size: 1rem
      color: $brown-1
      font-family: $questrial
      writing-mode: vertical-rl
      font-weight: 400
      transform: rotate(180deg)
      margin-bottom: 80px

      &:before
        position: absolute
        content: ""
        z-index: -1
        width: 1px
        height: 80px
        background: $brown-1
        bottom: 145px
        left: 14px

  img
    filter: brightness(0.7)
    z-index: -1
    position: absolute
    object-fit: cover
    height: 100%
    width: 100%
    top: 0
    bottom: 0
    left: 0
    right: 0
</style>
