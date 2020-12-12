<template>
  <CCol sm="12">
    <CSelect
      :label="label"
      :options="options"
      :placeholder="placeholder"
      :value.sync="selectedOption"
      @input="onChange(selectedOption)"
    />
    <!-- <label for="select">{{ label }}</label>
    <select class="form-control" name="select" @change="onChange(value)">
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
        :label="option.label"
        :placeholder="placeholder"
      ></option>
    </select> -->
    <!-- <br /> -->
    {{ value }}
    {{ selectedOption }}
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
  methods: {
    onChange(v) {
      this.$emit("input", v);
    }
  }
};
</script>

<style></style>
