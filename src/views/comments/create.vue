<template>
  <CreateComponent
    :fields="fields"
    urlSlug="comments"
    indexViewName="CommentIndex"
    title="комментарий"
  />
</template>

<script>
import CreateComponent from "@/components/core/create";

export default {
  components: { CreateComponent }
};
</script>
