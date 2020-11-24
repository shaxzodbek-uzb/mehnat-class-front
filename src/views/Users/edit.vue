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
        <CButton
          color="info float-right"
          shape="pill"
          variant="outline"
          @click="updateUser"
        >
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
        birth_date: "",
        phone: "",
        gender: ""
      }
    };
  },
  mounted() {
    let id = this.$route.params.id;
    this.$api(`users/${id}`, { params: { include: "articles.comments" } }).then(
      ({ data: { data } }) => {
        this.user.fullname = data.fullname;
        this.user.username = data.username;
        this.user.status = data.status;
        this.user.birth_date = data.birth_date;
        this.user.id = data.id;
        this.user.phone = data.phone;
        this.user.gender = data.gender;
      }
    );
  },
  methods: {
    updateUser() {
      this.$api.put(`users/${this.user.id}`, { ...this.user }).then(res => {
        console.log(res);
        if (res.data.success) {
          this.$router.push({ name: "UserShow", params: { ...this.id } });
        } else {
          console.log("invalid data");
        }
      });
    }
  }
};
</script>
