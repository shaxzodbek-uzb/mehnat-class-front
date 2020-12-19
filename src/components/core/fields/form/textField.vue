<template>
  <div class="col-span-6 sm:col-span-3">
    <label :for="field.key" class="block text-sm font-medium text-gray-700">{{
      field.label
    }}</label>
    <input
      type="text"
      :name="field.key"
      v-bind:value="value"
      v-on:input="onInput"
      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    field: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    onInput(v) {
      this.$emit("input", v.target.value);
    }
  }
};
</script>

<style></style>
