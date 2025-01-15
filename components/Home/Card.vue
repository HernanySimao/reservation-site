<script lang="ts" setup>
</script>


<template>
  <section>
    <div class="container mb-5 primary-theme-font">
      <div class="mt-5 mb-5">
        <h2>As nossas mesas disponiveis</h2>
      </div>

      <div class="row">
        <div v-for="i in 10" :key="i" class="col-md-6 mt-1 mb-1">
          <div class="card">
            <div class="card-body">Mesa {{ i }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.card
  border: 1px solid #f1f1f1
  cursor: pointer
  &:hover
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)
    transition: 0.3s
</style>