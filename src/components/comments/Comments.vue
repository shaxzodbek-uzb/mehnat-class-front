<template>
  <CRow>
    <CCol col="12" sm="12">
      <CWidgetIcon
        v-for="comment in comments.data"
        :key="comment.id"
        :header="comment.user ? comment.user.username : 'Unknown'"
        :text="comment.text"
      >
        <img src="@/assets/images/avatar_w.png" width="50" alt />
      </CWidgetIcon>
      <CCard body-wrapper class=" text-muted" v-if="comments.data.length == 0">
        Izoh mavjud emas
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
export default {
  props: {
    comments: {
      type: Object,
      default() {
        return [];
      }
    }
  }
};
</script>

<style></style>
