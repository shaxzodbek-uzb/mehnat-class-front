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
        <CButton color="primary float-right" @click="saveUser">
          <CIcon name="cil-user-plus" />Saqlash
        </CButton>
      </CCardBody>
    </CCard>
    {{user}}
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
        role: "",
        registered: "",
        status: "",
        age: ""
      },
      
    };
  },

  methods: {
    validateForm() {
      this.$refs['user'].validate((valid) => {
        this.validated = valid
      })
    },
    saveUser() {
      this.validateForm()
      if (this.validated) {
        this.loading = true
        this.saveUser(this.form)
          .then((res) => {
            if (res.success) {
              this.loading = false
              console.log("saved successfully")
              .finally(() => {
                this.$router.push({ name: 'UserIndex' })
              })
            } else {
              console.log("this datas already saved")
            }
          })
          .catch(() => {
            console.log("error")
          })
      }
    }
  }
};
</script>
