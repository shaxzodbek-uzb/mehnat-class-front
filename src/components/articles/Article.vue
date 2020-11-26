<template>
  <CRow>
    <CCallout color="info">
      <small class="text-muted">{{ article.alias }}</small
      ><br />
      <strong
        class="h5"
        @click="showComments = !showComments"
        style="cursor: pointer;"
        >{{ article.text }}</strong
      >
    </CCallout>
    <CCollapse :show="showComments" class="mt-2 w-100">
      <Comments :comments="article.comments" />
      <AddComment />
    </CCollapse>
  </CRow>
</template>

<script>
import Comments from "@/components/comments/Comments";
import AddComment from "@/components/comments/AddComment";

export default {
  components: {
    Comments,
    AddComment
  },
  props: {
    article: {
      type: Object,
      default() {
        return {
          comments: { data: [] }
        };
      }
    }
  },
  data() {
    return {
      showComments: false
    };
  }
};
</script>

<style></style>
