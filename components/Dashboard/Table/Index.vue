<script lang="ts" setup>
defineProps({
  data: {
    type: Boolean,
    required: false,
  },
});
</script>


<template>
  <section>
    <div>
      <DashboardTableCards :data="data?.data"> </DashboardTableCards>
    </div>
  </section>
</template>