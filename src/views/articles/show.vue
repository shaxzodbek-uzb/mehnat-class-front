<template>
  <BaseShow
    urlSlug="articles"
    title="Article details"
    apiIncludes="user.articles"
    :backButton="{ name: 'ArticleIndex' }"
  >
    <!-- <template v-slot:title>
      <strong class="ml-2">
        {{ object.user.data.username + " - " + object.alias }}
      </strong>
    </template> -->
  </BaseShow>
</template>

<script>
import BaseShow from "@/components/core/show";
export default {
  name: "Article",
  components: { BaseShow }
};
</script>
