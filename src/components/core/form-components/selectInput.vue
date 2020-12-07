<template>
  <CCol sm="12">
    <CSelect
      :label="label"
      :options="options"
      :placeholder="placeholder"
      v-bind:value="value"
      @select="onSelect"
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
    },
    options: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    onSelect(v) {
      this.$emit("select", v);
    }
  }
};
</script>

<style></style>
