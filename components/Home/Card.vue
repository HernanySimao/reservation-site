<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const id = ref("");
</script>


<template>
  <section>
    <div class="container primary-theme-font">
      <div class="row">
        <div class="d-flex justify-content-between mt-5">
          <div class="mt-2 mb-3">
            <h2>As nossas mesas disponiveis</h2>
          </div>
        </div>
        <div v-for="(item, i) in data" :key="i" class="col-md-6 mt-4 mb-2">
          <div
            class="card"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            @click="id = item.id"
          >
            <div class="card-body">
              <img class="image-table" src="/image/mesa.jpg" alt="mesa" />
              <h5 class="card-title mt-3">Mesa {{ item.numero }}</h5>
              <h5 class="card-text">Capacidade: {{ item.capacidade }}</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                facere?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Modal :idR="id"> </Modal>
</template>

<style lang="sass" scoped>
.image-table
  width: 100%
  // height: 200px
  object-fit: cover
</style>

 