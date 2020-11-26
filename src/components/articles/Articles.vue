<template>
  <CRow>
    <CCol col="12" sm="6">
      <Article
        v-for="(article, index) in articles.data"
        :key="index"
        :article="article"
      />
    </CCol>
  </CRow>
</template>

<script>
import Article from "./Article";

export default {
  components: {
    Article
  },
  props: {
    articles: {
      type: Object,
      default() {
        return {
          data: []
        };
      }
    }
  }
};
</script>
