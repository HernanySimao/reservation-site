<script setup>
const { $swal } = useNuxtApp();

definePageMeta({
  layout: "authentication",
});

const data = ref({
  email: "",
  password: "",
});

const loading = ref(false);

const login = async () => {
  try {
    loading.value = true;
    const response = await useIFetch("usuario/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });

    if (response.error?.value) {
      const statusCode =
        response.error.value.status || response.error.value.data?.statusCode;

      if (statusCode === 401) {
        loading.value = false;
        $swal.toast.fire({
          icon: "error",
          text: response.error.value.data?.message || "Credenciais inválidas.",
        });
        return;
      }
    }
    loading.value = false;
    navigateTo("/dashboard/table");
    localStorage.setItem("userId", response.data.value.id);
    localStorage.setItem("token", response.data.value.token);
  } catch (err) {
    console.log(err);
  }
};
</script>
<template>
  <section>
    <div class="container-fluid primary-theme-font">
      <div class="row d-flex align-items-center">
        <div class="col-md-6 col-12 mt-md-1 mt-5 h-100vh">
          <div class="text-center title mb-5">
            <h1 class="text-uppercase fw-bold">Bem-vindo</h1>
            <p>Por favor entre com as suas credencias</p>
          </div>
          <div class="input-container">
            <form @submit.prevent="login">
              <div class="mb-4">
                <label class="mb-1" for="">Email</label
                ><input
                  type="text"
                  placeholder="reserva@gmail.com"
                  class="form-control"
                  required
                  v-model="data.email"
                />
              </div>
              <div class="mb-4">
                <label class="mb-1" for="">Senha</label
                ><input
                  type="password"
                  placeholder="**********"
                  class="form-control mb-2"
                  required
                  v-model="data.password"
                />
              </div>
              <button
                v-if="!loading"
                type="submit"
                class="btn button-primary w-100 text-uppercase fw-bold mb-3"
              >
                Entrar
              </button>
              <div
                v-else
                class="btn button-primary w-100 text-uppercase fw-bold mb-3"
              >
                <div
                  class="spinner-border spinner-border-sm"
                  role="status"
                ></div>
              </div>
            </form>
          </div>
        </div>
        <div class="col-md-6 g-0">
          <img src="/image/epic-sana.png" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
img
  width: 100%
  height: 100vh
  object-fit: cover
  object-position: left

.input-container
  padding: 0 100px

.title
  line-height: 5px

.form-control
  padding: 15px
  box-shadow: none
  border-radius: 12px

// input::placeholder
//   padding-left: 10px

a
  text-decoration: none
@media (max-width: 576px)
  img
    display: none
  .input-container
    padding: 0 !important
</style>