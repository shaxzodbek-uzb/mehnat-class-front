<template>
  <CForm>
    <CRow>
      <CCol sm="12">
        <CInput
          type="number"
          label="User"
          placeholder="User id"
          v-model="article.user_id"
        />
      </CCol>
      <CCol sm="12">
        <CInput
          label="Alias"
          placeholder="There write alias"
          v-model="article.alias"
        />
      </CCol>
      <CCol sm="12">
        <CTextarea
          label="Text"
          placeholder="There write text"
          v-model="article.text"
        />
      </CCol>
    </CRow>
  </CForm>
</template>
<script>
export default {
  name: "FormArticle",
  props: {
    article: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      items: []
    };
  },
  mounted() {
    this.$api(`users`, { params: { include: "articles.comments" } }).then(
      ({ data: { data } }) => (this.items = data)
    );
  }
};
</script>
