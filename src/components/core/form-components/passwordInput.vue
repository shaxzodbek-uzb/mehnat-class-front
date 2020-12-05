<template>
  <CCol sm="12">
    <CInput
      :label="label"
      type="password"
      :placeholder="placeholder"
      v-model="value"
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
  }
};
</script>

<style></style>
