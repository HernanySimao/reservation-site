<script lang="ts" setup>
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

onMounted(() => {
  fetchData();
});
</script>

<template>
  <div class="mt-d">
    <HomeBanner> </HomeBanner>
    <HomeCard :data="data?.data"> </HomeCard>
  </div>
</template>


<style lang="sass" scoped>
.mt-d
  margin-top: 150px
</style>
