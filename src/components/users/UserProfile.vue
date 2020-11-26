<template>
  <CRow>
    <CCol col="12" sm="6">
      <CRow
        class="header_image"
        :style="{
          backgroundImage: 'url(' + require('@/assets/images/600x200.jpg') + ')'
        }"
      >
        <img
          class="avatar_profile ml-2"
          src="@/assets/images/avatar.png"
          width="130"
          alt
        />
      </CRow>
      <div class="mt-5">
        <CButton
          class="float-right"
          color="info"
          shape="pill"
          variant="outline"
          @click="updateUser(user.id)"
          ><CIcon name="cilSettings" /> Edit</CButton
        >
        <h3>
          <strong> {{ user.fullname }}</strong>
        </h3>
        <p class="text-muted">@{{ user.username }}</p>
        <p class="text-muted">
          <strong>Phone: </strong> {{ user.phone }}
          <strong>Birthdate: </strong> {{ user.birth_date }}
        </p>
        <p><strong>Status: </strong> {{ user.status }}</p>
      </div>
      <hr />
    </CCol>
  </CRow>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default() {
        return {
          comments: []
        };
      }
    }
  },
  methods: {
    updateUser(id) {
      this.$router.push({ name: "UserEdit", params: { id } });
    }
  }
};
</script>

<style></style>
