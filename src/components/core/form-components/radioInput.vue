<template>
  <CCol sm="12">
    <p>{{ label }}</p>
    <div class="form-group form-row m-1">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="custom-control custom-radio custom-control-inline"
      >
        <input
          type="radio"
          v-model="user.item"
          @change="onChange"
          :value="item.value"
          :label="item.label"
          :id="index"
          class="custom-control-input"
        />
        <label class="custom-control-label" :for="index">
          {{ item.label }}
        </label>
      </div>
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
    items: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    onChange(v) {
      this.$emit("radio", v);
    }
  }
};
</script>

<style></style>
