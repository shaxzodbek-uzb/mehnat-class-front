<template>
  <div>{{ value[field.key] }}</div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default: () => {}
    },
    field: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style></style>
