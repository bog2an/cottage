<script setup lang="ts">
const dataNav = [
  { title: 'Главная', link: '/' },
  { title: 'Ипотека', link: '/' },
  {
    title: 'Поселки',
    dropDown: [
      {
        title: 'п. Скандинавия, идут продажи',
        link: '/'
      }
    ]
  },
  { title: 'Контакты', link: '/' }
]
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary p-0">
      <div class="container-fluid position-relative p-0">
        <NuxtLink class="navbar-brand p-0 m-0 position-absolute" to="/">
          <img src="/img/logo.png" class="img-brand" alt="logo">
        </NuxtLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div id="navbarNav" class="collapse navbar-collapse container justify-content-between">
          <ul class="navbar-nav">
            <li v-for="(data, index) in dataNav" :key="index" :class="data?.dropDown ? 'nav-item dropdown' : 'nav-item'">
              <div v-if="data?.dropDown">
                <a class="nav-link dropdown-toggle text-uppercase" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {{ data.title }}
                </a>
                <ul class="dropdown-menu">
                  <li v-for="(itemDropDown, i) in data?.dropDown" :key="i">
                    <NuxtLink class="dropdown-item" :to="itemDropDown?.link">
                      {{ itemDropDown.title }}
                    </NuxtLink>
                  </li>
                </ul>
              </div>
              <NuxtLink v-else class="nav-link text-uppercase" :to="data?.link">
                {{ data.title }}
              </NuxtLink>
            </li>
          </ul>
          <div>
            <button class="signUp">
              Записаться на показ
            </button>
          </div>
          <div class="d-flex flex-column text-end tel text-uppercase">
            <span>Красноярск</span>
            <a href="tel:+73919990088" class="text-decoration-none"><span>+7 391 999-00-88</span></a>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped lang="sass">
@import "@/assets/sass/variables.sass"
header
  position: fixed
  z-index: 100
  top: 0
  width: 100%
  box-shadow: 0 1px 0 0 $gray-1
  backdrop-filter: brightness(0.6)

  nav
    height: 100px

  .signUp
    @include fontWSH(400, 1rem, 1.625rem)
    padding: 10px 26px
    border-radius: 10px
    display: inline-block
    color: $white
    background-color: $brown-1
    transition: .5s
    border: 1px solid $brown-1
    position: relative
    z-index: 1

    &:hover
      color: $brown-1
      &:before
        border-radius: 10px
        transform: scale(1)

    &:before
      position: absolute
      content: ''
      z-index: -1
      left: 0
      top: 0
      right: 0
      bottom: 0
      background: #343047
      transform: scale(0)
      transition: .5s

  .tel
    font-family: $questrial
    font-weight: 400
    color: $white

    a
      color: $white

      &:hover
        color: $brown-1

</style>
