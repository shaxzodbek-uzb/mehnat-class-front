<template>
  <div>
    <div class="col-span-6 sm:col-span-3">
      <label for="country" class="block text-sm font-medium text-gray-700"
        >Country / Region</label
      >
      <select
        id="country"
        name="country"
        autocomplete="country"
        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option>United States</option>
        <option>Canada</option>
        <option>Mexico</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    field: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style></style>
