<template>
  <CContainer class="c-app flex-column" :fluid="true">
    <router-link :to="{ name: 'UserIndex' }" class="mb-3">
      <CIcon name="cilArrowLeft" /> Back to Articles list
    </router-link>
    <CCard class="w-100 bg-white">
      <CCardHeader>
        Create article
      </CCardHeader>
      <CCardBody class="justify-content-center">
        <FormArticle :article="article" />
        <CButton
          color="info float-right"
          shape="pill"
          variant="outline"
          @click="saveArticle"
        >
          <CIcon name="cil-user-plus" />Saqlash
        </CButton>
      </CCardBody>
    </CCard>
  </CContainer>
</template>
<script>
import FormArticle from "@/components/form/form_article";
export default {
  name: "UserCreate",
  components: {
    FormArticle
  },
  data() {
    return {
      article: {
        user_id: "",
        alias: "",
        text: ""
      }
    };
  },

  methods: {
    saveArticle() {
      this.$api.post(`articles`, { ...this.article }).then(res => {
        if (res.data.success) {
          this.$router.push({ name: "ArticleIndex" });
        } else {
          console.log("invalid data");
        }
      });
    }
  }
};
</script>
