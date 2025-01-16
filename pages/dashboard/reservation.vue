<script lang="ts" setup>
definePageMeta({
  layout: "dashboard",
  middleware: "auth",
});

const data = ref(null);
const fetchData = async () => {
  try {
    const { data: fetchedData, error } = await useIFetch("reserva", {
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    });
    data.value = fetchedData.value;
  } catch (err) {}
};

onMounted(() => {
  fetchData();
});
</script>

<template>
  <section>
    <div>
      <DashboardReservation :data="data?.data"> </DashboardReservation>
    </div>
  </section>
</template>
