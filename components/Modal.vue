<script setup>
import { ref, watch } from "vue";
const { idR } = defineProps({
  idR: {
    type: Number,
    required: true,
  },
});

const dataId = ref(null);

const data = ref({
  clientName: "",
  clientNumber: "",
  reservationDateTime: "",
  mesa: { id: dataId.value },
});
watch(
  () => idR,
  (newVal) => {
    dataId.value = newVal;
    data.value.mesa.id = newVal;
  },
  { immediate: true }
);

const createReserva = async () => {
  try {
    // loading.value = true;
    const response = await useIFetch("reserva/criarReserva", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });

    // loading.value = false;
    const closeButton = document.querySelector(
      '.btn.btn-secondary[data-bs-dismiss="modal"]'
    );
    if (closeButton) {
      closeButton.click();
    }
  } catch (err) {
    console.log(err);
  }
};
</script>


<template>
  <section>
    <div class="primary-theme-font">
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Reservar mesa
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="mb-4">
                <input
                  type="text"
                  placeholder="Nome do cliente"
                  class="form-control"
                  v-model="data.clientName"
                />
              </div>
              <div class="mb-4">
                <input
                  type="text"
                  placeholder="Número do cliente"
                  class="form-control"
                  v-model="data.clientNumber"
                />
              </div>
              <div class="mb-4">
                <input
                  type="date"
                  placeholder="Data da reserva"
                  class="form-control"
                  v-model="data.reservationDateTime"
                />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button @click="createReserva" class="button-primary">
                Confirmar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.button-primary
  padding: 10px 10px !important
  border-radius: 5px

.form-control
  padding: 20px
  box-shadow: none
  border-radius: 12px
</style>