<template>
  <img
    alt="Vue logo"
    src="../assets/logo.png"
    :style="{ width: this.width + 'px' }"
  />
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 100
    }
  }
};
</script>
