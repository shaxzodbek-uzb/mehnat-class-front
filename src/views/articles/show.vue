<template>
  <BaseShow
    key="articles"
    title="Article details"
    apiIncludes="user.articles"
    :tableData="this.tableData"
    :backButton="{ name: 'ArticleIndex' }"
    updateForm="'@/components/articles/updateForm"
  >
    <template v-slot:title>
      <strong class="ml-2">
        {{ object.user.data.username + " - " + object.alias }}
      </strong>
    </template>
  </BaseShow>
</template>

<script>
import BaseShow from "@/components/core/show";
export default {
  name: "Article",
  components: { BaseShow },
  data() {
    return {
      tableData: [
        { title: "#", column: "id" },
        { title: "Alias", column: "alias" }
      ]
    };
  }
};
</script>
