<template>
  <CRow>
    <CCol col="12" sm="12">
      <CInput placeholder="Add comment" v-model="comment.text" class="w-100" />
    </CCol>
    <CCol col="12" sm="12">
      <CButton
        class="float-right"
        color="info"
        shape="pill"
        variant="outline"
        @click="addComment(article.id)"
      >
        Add comment
      </CButton>
    </CCol>
  </CRow>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      default() {
        return [];
      }
    }
  },
  methods: {
    addComment(article_id) {
      debugger
      this.comment.article_id = article_id;
      this.$api
        .post(`comments`, { ...this.comment })
        .then(res => {
          if (res.data.success) {
            this.showAlert = true;
          }
        })
        .finally(() => {
          this.comment.text = "";
          this.getData();
        });
    }
  },
  data() {
    return {
      comment: {
        user_id: 1,
        article_id: "",
        text: ""
      }
    };
  }
};
</script>

<style></style>
