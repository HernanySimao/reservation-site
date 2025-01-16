<script lang="ts" setup>
definePageMeta({
  layout: "dashboard",
  middleware: "auth",
});

const shouldRefreshData = useState("shouldRefreshData", () => false);
const data = ref(null);
const fetchData = async () => {
  try {
    const { data: fetchedData, error } = await useIFetch("mesa", {
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    });
    data.value = fetchedData.value;
  } catch (err) {}
};

watch(shouldRefreshData, (newValue) => {
  if (newValue) {
    fetchData();
    shouldRefreshData.value = false;
  }
});

onMounted(() => {
  fetchData();
});
</script>


<template>
  <section>
    <DashboardTable :data="data"> </DashboardTable>
  </section>
</template>
