<template>
  <CreateComponent
    :fields="fields"
    apiSlug="users"
    indexViewName="UserIndex"
    title="пользователь"
  />
</template>

<script>
import CreateComponent from "@/components/core/create";
import { userFields } from "@/data/index";

export default {
  data() {
    return {
      fields: []
    };
  },
  components: { CreateComponent },
  mounted() {
    this.fields = userFields;
  }
};
</script>
