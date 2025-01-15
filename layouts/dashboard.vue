<script lang="ts" setup>
import type { Menu } from "@/Interfaces/IPage";

const logout = () => {
  try {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigateTo("/auth");
  } catch (err) {
    console.error(err);
  }
};
</script>

<template>
  <section>
    <div class="container-fluid primary-theme-font">
      <div class="row">
        <div class="col-lg-2 col-3 g-0">
          <div class="sidebar position-relative">
            <h1 class="text-center fw-bold mb-5">
              <NuxtLink to="/dashboard/table"
                ><img class="logo" src="/icons/logo-white.png" alt=""
              /></NuxtLink>
            </h1>
            <ul class="menu">
              <li v-for="(page, i) in pages" :key="i" class="mb-3 items">
                <NuxtLink class="link btn border-0" :to="page?.path">
                  <img class="icon-menu" :src="page?.icon" alt="" />
                  <span class="ms-3 mt-1 name-link">{{ page?.name }}</span>
                </NuxtLink>
              </li>
              <li class="items mb-3">
                <button @click="logout" class="link btn border-0">
                  <img class="icon-menu" src="/icons/sair.png" alt="" />
                  <span class="name-link ms-3 mt-1">Sair</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-lg-10 col-9 dashboard-content">
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.sidebar
  width: 100%
  height: 100vh
  background-color: #00564A
  color: #fff
  padding-top: 20px
  transition: width 0.3s ease

.logo
  width: 20%
  height: auto
  opacity: 0.9

.menu
  list-style-type: none
  padding: 0
  margin: 0

.icon-menu-logout
  width: 25px

.items
  padding-left: 30px

.link
  text-decoration: none
  color: #fff
  font-weight: 500
  font-size: 18px
  filter: brightness(0) invert(1)
  transition: 0.1s all
  &:hover
    filter: none
    color: #fff
    background-color: #A2A9FF17

.icon-menu
  width: 20px

@media screen and (max-width: 767px)
  .items
    padding-left: 20px
  .name-link
    display: none

.dashboard-content
  height: 100vh
  overflow: auto
</style>
