<template>
  <IndexComponent
    :fields="fields"
    createViewName="ArticleCreate"
    editViewName="ArticleEdit"
    showViewName="ArticleShow"
    urlSlug="articles"
    apiIncludes="user.comments"
    pageTitle="Страница статей"
    objectName="Статья"
  >
  </IndexComponent>
</template>

<script>
import { articles as articleData } from "@/data/article";
import IndexComponent from "@/components/core/index";
export default {
  name: "ArticleIndex",
  components: {
    IndexComponent
  },
  data() {
    return { fields: articleData.fields };
  }
};
</script>
