<template>
  <CreateComponent
    :fields="fields"
    apiSlug="comments"
    indexViewName="CommentIndex"
    title="комментарий"
  />
</template>

<script>
import CreateComponent from "@/components/core/create";
import { commentFields } from "@/data/index";

export default {
  data() {
    return {
      fields: []
    };
  },
  components: { CreateComponent },
  mounted() {
    this.fields = commentFields;
  }
};
</script>
