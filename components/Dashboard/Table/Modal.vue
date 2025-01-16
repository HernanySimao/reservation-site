<script  setup>
const { $swal } = useNuxtApp();
const { isUpdate, isDate } = defineProps({
  isUpdate: {
    type: Boolean,
    required: false,
  },

  isDate: {
    type: Object,
    required: false,
  },
});

const data = ref({
  numero: "",
  capacidade: "",
});

watch(
  () => isUpdate, // Observa a propriedade isUpdate
  (newValue) => {
    if (newValue && isDate) {
      // Se isUpdate for false e isDate estiver disponível
      data.value.numero = isDate.numero || "";
      data.value.capacidade = isDate.capacidade || "";
    }
  },
  { immediate: true } // Garante que a função seja executada imediatamente se isUpdate for false
);

const loading = ref(false);
const shouldRefreshData = useState("shouldRefreshData");

const createTable = async () => {
  try {
    loading.value = true;
    const response = await useIFetch("mesa/criarMesa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });

    $swal.toast.fire({
      icon: "success",
      text: "Mesa criada com sucesso!",
    });

    loading.value = false;
    shouldRefreshData.value = true;
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
const updateTable = async () => {
  try {
    loading.value = true;
    const response = await useIFetch(`mesa/actualizar/${isDate?.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });

    $swal.toast.fire({
      icon: "success",
      text: "Mesa actualizada com sucesso!",
    });
    loading.value = false;
    shouldRefreshData.value = true;
    const closeButton = document.querySelector(
      '.btn-close[data-bs-dismiss="modal"]'
    );
    if (closeButton) {
      closeButton.click();
    }
  } catch (err) {
    console.log(err);
  }
};

const closeModal = () => {
  data.value.numero = "";
  data.value.capacidade = "";
};

const deleteTable = async () => {
  const result = await $swal.modal.fire({
    title: "Você tem certeza?",
    text: "Essa ação não pode ser desfeita!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sim",
    cancelButtonText: "Não",
    customClass: {
      confirmButton: "btn btn-danger btn-lg font-toast",
      cancelButton: "btn btn-dark ms-4 w-20 btn-lg font-toast",
    },
  });

  if (result.isConfirmed) {
    try {
      const response = await useIFetch(`mesa/apagarMesa/${isDate?.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      $swal.toast.fire({
        icon: "success",
        text: "Mesa eliminada com sucesso!",
      });

      shouldRefreshData.value = true;
      const closeButton = document.querySelector(
        '.btn-close[data-bs-dismiss="modal"]'
      );
      if (closeButton) {
        closeButton.click();
      }
    } catch (err) {
      console.log(err);
    }
  } else if (result.dismiss === "cancel") {
  }
};
</script>


<template>
  <div>
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
              {{ !isUpdate ? " Criar mesa" : " Actualizar mesa" }}
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="closeModal"
            ></button>
          </div>
          <div class="modal-body">
            <div class="mb-4">
              <input
                type="text"
                :placeholder="
                  !isUpdate ? 'Número da mesa' : 'Actualizar número da mesa'
                "
                class="form-control"
                v-model="data.numero"
              />
            </div>
            <div class="mb-4">
              <input
                type="text"
                :placeholder="
                  !isUpdate
                    ? 'Capacidade da mesa'
                    : 'Actualizar capacidade da mesa'
                "
                class="form-control"
                v-model="data.capacidade"
              />
            </div>
          </div>
          <div class="modal-footer">
            <div v-if="!isUpdate">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Fechar
              </button>
            </div>
            <div v-else>
              <button @click="deleteTable" type="button" class="btn btn-danger">
                Eliminar mesa
              </button>
            </div>
            <div v-if="!isUpdate">
              <button
                v-if="!loading"
                @click="createTable"
                class="button-primary"
              >
                Criar mesa
              </button>
              <button v-else class="button-primary">Carregando...</button>
            </div>
            <div v-else>
              <button
                v-if="!loading"
                @click="updateTable"
                class="button-primary"
              >
                Actualizar mesa
              </button>
              <button v-else class="button-primary">Carregando...</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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