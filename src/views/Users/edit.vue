<template>
  <updateComponent
    urlSlug="users"
    indexViewName="UserIndex"
    title="пользователя"
    belongsToIncludes="articles"
  />
</template>

<script>
import updateComponent from "@/components/core/update";

export default {
  components: { updateComponent }
};
</script>
