<template>
  <div>
    {{ value }}
  </div>
</template>

<script>
export default {
  props: {
    field: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style></style>
