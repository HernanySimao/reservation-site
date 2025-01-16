<script lang="ts" setup>
definePageMeta({
  layout: "dashboard",
  middleware: "auth",
});
</script>


<template>
  <section>
    <DashboardTable> </DashboardTable>
  </section>
</template>
