<template>
  <div>
    {{
      value[field.relation_name]
        ? value[field.relation_name].data[field.related_object_title]
        : "-"
    }}
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default: () => {}
    },
    field: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style></style>
