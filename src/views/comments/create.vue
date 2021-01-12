<template>
  <CreateComponent
    urlSlug="comments"
    indexViewName="CommentIndex"
    title="комментарий"
    belongsToIncludes="articles"
  />
</template>

<script>
import CreateComponent from "@/components/core/create";

export default {
  components: { CreateComponent }
};
</script>
