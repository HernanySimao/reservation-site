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
            <h1 class="modal-title fs-5" id="exampleModalLabel">Criar mesa</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form action="">
              <div class="mb-4">
                <input
                  type="text"
                  placeholder="Número da mesa"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-4">
                <input
                  type="text"
                  placeholder="Capacidade da mesa"
                  class="form-control"
                  required
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Fechar
            </button>
            <button type="button" class="button-primary">Criar mesa</button>
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