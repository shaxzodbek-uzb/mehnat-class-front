<template>
  <div>
    {{ value[field.relation_name].id }}
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
