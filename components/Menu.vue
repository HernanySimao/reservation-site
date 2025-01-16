<script setup>
</script>

<template>
  <section>
    <div>
      <nav class="navbar bg-body-tertiary p-3">
        <div
          class="container d-flex justify-content-between align-items-center"
        >
          <a class="navbar-brand primary-theme-font">
            <img class="logo" src="/icons/logo.png" alt="" />
          </a>
          <NuxtLink
            to="auth"
            class="button-primary link primary-theme-font"
            type="submit"
            >Entrar</NuxtLink
          >
        </div>
      </nav>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.navbar
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px

.logo
  width: 10%
  height: auto

.link
  text-decoration: none

@media (max-width: 767px)  // Mobile
  .logo
    width: 50px
    // display: none
  .navbar .container
    display: flex
    justify-content: space-between
    align-items: center
</style>
