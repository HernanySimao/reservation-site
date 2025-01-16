<script setup>
defineProps({
  data: {
    type: Object,
    required: true,
  },
});

function formatDate(isoDate) {
  const date = new Date(isoDate);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${day}-${month}-${year}`;
}
</script>


<template>
  <section>
    <div class="container">
      <div class="mt-5 mb-5">
        <h1>Reservas</h1>
      </div>
      <table v-if="data" class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Número</th>
            <th scope="col">Data da reserva</th>
            <th scope="col">Número da mesa</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in data" :key="i">
            <th scope="row">{{ i }}</th>
            <td>{{ item.clientName }}</td>
            <td>{{ item.clientNumber }}</td>
            <td>{{ formatDate(item.reservationDateTime) }}</td>
            <td>{{ item.mesa ? "#" + item.mesa?.numero : "----" }}</td>
          </tr>
        </tbody>
      </table>
      <div v-else>
        <h5 class="text-center mt-5">Sem reservas disponiveís</h5>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
</style>