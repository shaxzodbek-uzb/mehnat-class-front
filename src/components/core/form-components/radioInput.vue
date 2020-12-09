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
    <!-- <div v-if="options.length" class="form-group form-row m-1">
      <div
        v-for="(item, index) in options"
        :key="index"
        class="custom-control custom-radio custom-control-inline"
      >
        <input
          type="radio"
          v-bind:value="item.value"
          @input="onChange(item.value)"
          :label="item.value"
          class="custom-control-input"
        />
        <label class="custom-control-label" :for="'cutom' + index"> </label>
      </div>
    </div> -->
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
