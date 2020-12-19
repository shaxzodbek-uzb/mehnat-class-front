<template>
  <IndexComponent
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
import IndexComponent from "@/components/core/index";
export default {
  name: "CommentIndex",
  components: {
    IndexComponent
  }
};
</script>
