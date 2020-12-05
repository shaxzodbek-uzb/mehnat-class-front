<template>
  <CCol sm="12">
    <CInput
      :label="label"
      :placeholder="placeholder"
      v-bind:value="value"
      v-on:input="onInput"
    />
  </CCol>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "Label"
    },
    placeholder: {
      type: String,
      default: "Placeholder"
    },
    value: {
      type: String,
      default: null
    }
  },
  methods: {
    onInput(v) {
      this.$emit("input", v);
    }
  }
};
</script>

<style></style>
