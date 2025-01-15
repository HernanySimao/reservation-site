<script lang="ts" setup>
</script>
<template>
  <section>
    <div>
      <div class="container">
        <div class="row">
          <div class="d-flex justify-content-between mt-5">
            <h1>Minhas mesas</h1>
            <button
              class="button-primary-outline"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Criar
            </button>
          </div>
          <div v-for="i in 6" :key="i" class="col-md-6 mt-4 mb-2">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn button-primary">Ver detalhe</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DashboardTableModal></DashboardTableModal>
    </div>
  </section>
</template>


<style lang="sass" scoped>
.button-primary
  padding: 10px

.btn-danger
  border-radius: 0
  padding: 10px
</style>
