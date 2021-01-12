<template>
  <UpdateComponent
    urlSlug="articles"
    indexViewName="ArticleIndex"
    title="статью"
    belongsToIncludes="articles"
  />
</template>

<script>
import UpdateComponent from "@/components/core/update";

export default {
  components: { UpdateComponent }
};
</script>

<style></style>
