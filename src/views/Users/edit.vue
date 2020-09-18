<template>
  <CContainer class="c-app flex-column" :fluid="true">
    <router-link :to="{ name: 'UserIndex' }" class="mb-3">
      <CIcon name="cilArrowLeft" /> Foydalanuvchilar ro'yhatiga qaytish
    </router-link>
    <CCard class="w-100 bg-white">
      <CCardHeader>
        Foydalanuvchini tahrirlash
      </CCardHeader>
      <CCardBody class="justify-content-center">
        <FormUser :user="user" />
        <CButton color="primary float-right" @click="updateUser">
          <CIcon name="cil-user-plus" />Saqlash
        </CButton>
      </CCardBody>
    </CCard>
  </CContainer>
</template>
<script>
import FormUser from "./form";
export default {
  name: "UserCreate",
  components: {
    FormUser
  },
  data() {
    return {
      user: {
        id: "",
        fullname: "",
        username: "",
        status: "",
        age: ""
      }
    };
  },
  mounted() {
    let id = this.$route.params.id;
    this.$api(`users/${id}`).then(({ data: { data } }) => {
      this.user.fullname = data.fullname;
      this.user.username = data.username;
      this.user.status = data.status;
      this.user.age = data.age;
      this.user.id = data.id;
    });
  },
  methods: {
    updateUser() {
      this.$api.put(`users/${this.user.id}`, { ...this.user }).then(res => {
        console.log(res);
      });
    }
  }
};
</script>
