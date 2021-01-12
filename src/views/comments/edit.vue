<template>
  <UpdateComponent
    urlSlug="comments"
    indexViewName="CommentIndex"
    title="статью"
    belongsToIncludes="comments"
  />
</template>

<script>
import UpdateComponent from "@/components/core/update";

export default {
  components: { UpdateComponent }
};
</script>

<style></style>
