<template>
  <modal name="modal" height="auto" :scrollable="true" :clickToClose="false">
    <div class="container-fluid  p-4">
      <div class="float-right">
        <p class="text-muted" @click="hideModal">
          <CIcon size="xl" name="cil-x" />
        </p>
      </div>
      <CreateComponent
        :fields="fields"
        apiSlug="users"
        indexViewName="UserIndex"
        title="пользаватель"
      />
      <hr />
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
import CreateComponent from "@/components/core/create";
import { userFields } from "@/data/index";
export default {
  name: "FormUser",
  components: {
    CreateComponent
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
      fields: [],
      user: {
        username: "",
        fullname: "",
        birth_date: "",
        phone: "11231",
        status: "",
        gender: "",
        password: ""
      }
    };
  },
  mounted() {
    this.fields = userFields;
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
        if (res.data) {
          this.hideModal();
        } else {
          console.log("invalid data");
        }
      });
    }
  }
};
</script>
