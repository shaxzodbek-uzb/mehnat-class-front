<template>
  <div>
    <input type="text" @onInput="$emit" />
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
