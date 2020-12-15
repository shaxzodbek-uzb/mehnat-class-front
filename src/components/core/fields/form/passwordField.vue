<template>
  <CCol sm="12">
    <CInput
      :label="label"
      type="password"
      :placeholder="placeholder"
      @input="onInput"
      v-bind:value="value"
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
      default: ""
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
