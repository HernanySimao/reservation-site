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
          <div
            class="card"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <div class="card-body">Mesa {{ i }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Modal> </Modal>
</template>

 