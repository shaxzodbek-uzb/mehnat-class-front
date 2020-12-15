<template>
  <CCol sm="12">
    <CSelect
      :label="label"
      :options="options"
      :placeholder="placeholder"
      :value.sync="selectedOption"
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
      type: Number,
      default: null
    },
    options: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return { selectedOption: "" };
  },
  mounted() {
    this.selectedOption = this.value;
  },
  watch: {
    selectedOption(newVal, oldVal) {
      if (newVal && newVal !== oldVal) {
        this.$emit("input", newVal);
      }
    }
  }
};
</script>

<style></style>
