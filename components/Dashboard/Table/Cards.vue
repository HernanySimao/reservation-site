<script lang="ts" setup>
const { $swal } = useNuxtApp();
defineProps({
  data: {
    type: Boolean,
    required: false,
  },
});

const isUpdate = ref(false);
const isDate = ref([]);

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * 3);
  return `/image/mesa${randomIndex}.jpg`;
}
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
              @click="(isUpdate = false), (isDate = '')"
            >
              Criar
            </button>
          </div>
          <div
            v-if="data"
            v-for="(item, i) in data"
            :key="i"
            class="col-md-6 mt-4 mb-2 d-flex align-items-stretch"
          >
            <div class="card">
              <div class="card-body">
                <img class="image-table" :src="getRandomImage()" alt="mesa" />
                <h5 class="card-title mt-3">Mesa #{{ item.numero }}</h5>
                <h5 class="card-text">Capacidade: {{ item.capacidade }}</h5>

                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  class="btn button-primary"
                  @click="(isUpdate = true), (isDate = item)"
                  >Ver detalhe</a
                >
              </div>
            </div>
          </div>
          <div v-else>
            <h5 class="text-center mt-5">Sem mesas disponiveís</h5>
          </div>
        </div>
      </div>
      <DashboardTableModal
        :isUpdate="isUpdate"
        :isDate="isDate"
      ></DashboardTableModal>
    </div>
  </section>
</template>


<style lang="sass" scoped>
.button-primary
  padding: 10px

.btn-danger
  border-radius: 0
  padding: 10px

.image-table
  width: 100%
  // height: 200px
  object-fit: cover
</style>
