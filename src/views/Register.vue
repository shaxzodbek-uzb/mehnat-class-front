<template>
  <modal name="modal" height="auto" :scrollable="true" :clickToClose="false">
    <div class="container-fluid  p-4">
      <div class="float-right">
        <p class="text-muted" @click="hideModal">
          <CIcon size="xl" name="cil-x" />
        </p>
      </div>
      <h4>Yangi foydalanuvchi qo'shish</h4>
      <FormRegister :user="user" />
      <CButton
        color="info float-right"
        class="m-2"
        shape="pill"
        @click="saveUser"
      >
        Ro'yhatdan o'tish
      </CButton>
    </div>
  </modal>
</template>
<script>
import FormRegister from "@/components/form/form";
export default {
  name: "FormUser",
  components: {
    FormRegister
  },
  props: {
    show: {
      type: Boolean,
      default() {
        return false;
      }
    }
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
      }
    };
  },
  mounted() {
    this.showModal();
  },
  methods: {
    showModal() {
      this.$modal.show("modal");
    },
    hideModal() {
      this.$modal.hide("modal");
      this.close();
    },
    close() {
      this.$emit("close");
    },
    saveUser() {
      this.$api.post(`users`, { ...this.user }).then(res => {
        if (res.data.success) {
          // this.$router.push({ name: "UserIndex" });
        } else {
          console.log("invalid data");
        }
      });
    }
  }
};
</script>
