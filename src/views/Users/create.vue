<template>
  <div >
    <router-link :to="{ name: 'UserIndex'}" >
     <p style="margin-top:-20px"> <CIcon name="cilChevronLeft" /> Foydalanuvchilar ro'yhatiga qaytish</p>
    </router-link>
    <CContainer class="c-app flex-row bg-white">
      <CCardBody class="justify-content-center">
        <h4>Yangi foydalanuvchi qo'shish</h4>
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
      roles: [{ value: "Member" }, { value: "Staff" }, { value: "Admin" }],
      statuses: [
        { value: "Active" },
        { value: "Banned" },
        { value: "Inactive" },
        { value: "Pending" }
      ],
      selectOptions: [
        "Option 1",
        "Option 2",
        "Option 3",
        {
          value: "some value",
          label: "Selected option"
        }
      ]
    };
  },
  methods: {
    saveUser() {
      console.log( usersData);
      // usersData.push(this.user);
    }
  }
};
</script>
