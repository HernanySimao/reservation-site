<script lang="ts" setup>
</script>

<template>
  <section>
    <div class="container-fluid mt-4 xx">
      <div class="bg-color-primary d-flex align-items-center flex-wrap">
        <div
          class="col-md-6 custom-card text-center text-md-start primary-theme-font"
        >
          <h1 class="title">Reserve sua Mesa no melhor Restaurante</h1>
          <div>
            Explore uma variedade de opções, desde os clássicos até os mais
            exclusivos, e faça sua reserva de forma rápida e segura.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.bg-color-primary
  background: url("/image/food.png") no-repeat center center
  background-size: cover
  border-radius: 10px
  color: white
  padding: 100px
  min-height: 60vh

.title
  font-size: 4rem
  font-weight: bold
  line-height: 1.2

  @media (max-width: 768px)
    font-size: 1.5rem

.search-bar
  .input-group
    max-width: 500px
    margin: auto
</style>
