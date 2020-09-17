<template>
  <div>
    <router-link :to="{ name: 'UserIndex'}" >
      <p style="margin-top:-20px"> <CIcon name="cilChevronLeft" /> Foydalanuvchilar ro'yhatiga qaytish</p>
    </router-link>
    <CContainer class="c-app flex-row bg-white">
      <CCardBody class="justify-content-center">
        <h4>Foydalanuvchini tahrirlash</h4>
        <FormUser :user="user" />
        <CButton color="primary float-right" @click="saveUser">
          <CIcon name="cil-user-plus" />Saqlash
        </CButton>
      </CCardBody>
    </CContainer>
  </div>
</template>
<script>
import { users as usersData } from "@/data/";
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
        status: ""
      },
      items: usersData.items.map((item, id) => { return {...item, id}}),
    };
  },
  methods: {
    updateUser() {
      console.log( usersData);
      // usersData.push(this.user);
    }
  }
};
</script>
