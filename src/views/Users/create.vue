<template>
  <CContainer  class="c-app flex-column" :fluid="true">
    <router-link :to="{ name: 'UserIndex'}" class="mb-3">
     <CIcon name="cilArrowLeft" /> Foydalanuvchilar ro'yhatiga qaytish
    </router-link>
    <CCard class="w-100 bg-white">
      <CCardHeader>
        Yangi foydalanuvchi qo'shish
      </CCardHeader>
      <CCardBody class="justify-content-center">
        <FormUser :user="user" />
        <CButton color="info float-right" shape='pill' variant="outline" @click="saveUser">
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
        username: "",
        fullname: "",
        registered: "",
        status: "",
        age: "",
        password: ""
      },
    };
  },

  methods: {
    saveUser() {
        this.$api.post(`users`, {...this.user})
        .then(res =>{
          if (res.data.success) {
              this.$router.push({ name: 'UserIndex' })
          } else {
              console.log('invalid data')
            }
        })
    }
  }
};
</script>
