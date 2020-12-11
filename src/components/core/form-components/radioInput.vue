<template>
  <CCol sm="12">
    <p>{{ label }}</p>
    <div
      v-for="(item, index) in options"
      :key="index"
      class="form-check form-check-inline"
    >
      <input
        class="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        :id="'cutom' + index"
        v-bind:value="item.value"
        @input="onChange(item.value)"
        :label="item.value"
      />
      <label class="form-check-label" :for="'cutom' + index">
        {{ item.label }}
      </label>
    </div>
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
    onChange(v) {
      this.$emit("input", v);
    }
  }
};
</script>

<style></style>
