<template>
  <IndexComponent
    :fields="fields"
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
import { comments as commentData } from "@/data/comment";
import IndexComponent from "@/components/core/index";
export default {
  name: "CommentIndex",
  components: {
    IndexComponent
  },
  data() {
    return { fields: commentData.fields };
  }
};
</script>
