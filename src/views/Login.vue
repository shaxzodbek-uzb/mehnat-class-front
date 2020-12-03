<template>
  <div class="c-app flex-row align-items-center login_page">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol md="8">
          <h1 class="text-center">APHORISM.COM</h1>
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <CForm>
                  <h1>Login</h1>
                  <p class="text-muted">Sign In to your account</p>
                  <CInput
                    placeholder="Username"
                    v-model="credientials.username"
                    autocomplete="username email"
                  >
                    <template #prepend-content
                      ><CIcon name="cil-user"
                    /></template>
                  </CInput>
                  <CInput
                    v-model="credientials.password"
                    placeholder="Password"
                    type="password"
                    autocomplete="curent-password"
                  >
                    <template #prepend-content
                      ><CIcon name="cil-lock-locked"
                    /></template>
                  </CInput>
                  <CRow>
                    <CCol col="6" class="text-left">
                      <CButton color="primary" class="px-4" @click="submitLogin"
                        >Login</CButton
                      >
                    </CCol>
                    <CCol col="6" class="text-right">
                      <CButton color="link" class="px-0"
                        >Forgot password?</CButton
                      >
                      <CButton color="link" class="d-lg-none" @click="Register"
                        >Register now!</CButton
                      >
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
            <CCard
              color="primary"
              text-color="white"
              class="text-center py-5 d-md-down-none"
              body-wrapper
            >
              <CCardBody>
                <h2>Sign up</h2>
                <CButton
                  color="light"
                  variant="outline"
                  size="lg"
                  @click="Register"
                >
                  Register Now!
                </CButton>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
    <RegisterModal v-if="show" :show="show" @close="show = false" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import RegisterModal from "./Register";
export default {
  name: "Login",
  components: {
    RegisterModal
  },
  data() {
    return {
      show: false,
      credientials: {
        username: "",
        password: ""
      },
      user: {
        username: "",
        fullname: "",
        registered: "",
        status: "",
        age: "",
        password: ""
      }
    };
  },
  methods: {
    ...mapActions({ login: "user/login" }),
    Register() {
      this.show = true;
    },
    createUser() {
      this.$api.post(`users`, { ...this.user }).then(res => {
        if (res.data.success) {
          // this.$router.push({ name: "UserIndex" });
        } else {
          console.log("invalid data");
        }
      });
    },
    submitLogin() {
      this.loading = true;
      this.login(this.credientials)
        .then(() => {
          this.$router.push({ name: "UserIndex" });
        })
        .catch(err => {
          this.showLoginError(err);
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
};
</script>
<style scoped>
.login_page {
  background-image: url("../assets/images/background.jpg");
}
</style>
