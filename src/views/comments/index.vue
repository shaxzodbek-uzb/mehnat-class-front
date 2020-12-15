<template>
  <IndexComponent
    createViewName="CommentCreate"
    editViewName="CommentEdit"
    showViewName="CommentShow"
    urlSlug="comments"
    apiIncludes="user,articles"
    pageTitle="Страница комментариев"
    objectName="Комментарий"
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
