<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div
          class="shadow-sm overflow-hidden border-b border-gray-200 sm:rounded-lg"
        >
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  v-for="item in fields"
                  :key="item.key"
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {{ item.label }}
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200 text-gray-500">
              <tr v-for="item in items" :key="item.id">
                <td
                  class="px-6 py-4 whitespace-nowrap"
                  v-for="field in fields"
                  :key="field.key"
                >
                  <component :is="field.type" :value="item" :field="field" />
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                >
                  <a href="#" class="text-indigo-600 hover:text-indigo-900"
                    >Edit</a
                  >
                </td>
              </tr>

              <!-- More rows... -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const belongsToField = () =>
  import("@/components/core/fields/index/belongsToField");
const idField = () => import("@/components/core/fields/index/idField");
const textField = () => import("@/components/core/fields/index/textField");
export default {
  components: {
    belongsToField,
    idField,
    textField
  },
  props: {
    fields: {
      type: Array,
      default() {
        return [];
      }
    },
    items: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style></style>
