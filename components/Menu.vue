<script setup>
</script>

<template>
  <section>
    <div>
      <nav class="navbar bg-body-tertiary p-3">
        <div class="container">
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
</style>
