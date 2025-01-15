<template>
  <section>
    <div class="container">
      <div class="mt-5 mb-5">
        <h1>Reservas</h1>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col">status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 10" :key="i">
            <th scope="row">{{ i }}</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Confirmado</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<style lang="sass" scoped>
</style>