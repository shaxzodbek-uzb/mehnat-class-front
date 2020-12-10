<template>
  <CreateComponent
    :fields="fields"
    apiSlug="articles"
    indexViewName="ArticleIndex"
    title="статью"
  />
</template>

<script>
import CreateComponent from "@/components/core/create";
import { articleFields } from "@/data/index";

export default {
  data() {
    return {
      fields: []
    };
  },
  components: { CreateComponent },
  mounted() {
    this.fields = articleFields;
  }
};
</script>

<style></style>
