<script lang="ts" setup>
definePageMeta({
  layout: "dashboard",
  middleware: "auth",
});
</script>

<template>
  <section>
    <div>
      <DashboardReservation> </DashboardReservation>
    </div>
  </section>
</template>
