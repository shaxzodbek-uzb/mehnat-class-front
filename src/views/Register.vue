<template>
  <modal name="modal" height="auto" :scrollable="true" :clickToClose="false">
    <div class="container-fluid p-2">
      <div class="float-right">
        <p class="text-muted" @click="hideModal">
          <CIcon size="xl" name="cil-x" />
        </p>
      </div>
      <CCardBody class="justify-content-center">
        <CForm>
          <CRow>
            <component
              v-for="field in fields"
              :key="field.key"
              :options="field.options"
              :label="field.label"
              :placeholder="field.placeholder"
              :is="field.type + 'Input'"
              v-model="field.value"
            >
            </component>
          </CRow>
        </CForm>
        <CButton
          color="info float-right"
          shape="pill"
          variant="outline"
          @click="save"
        >
          <CIcon name="cil-user-plus" />Сохранить
        </CButton>
        <br />
      </CCardBody>
    </div>
  </modal>
</template>
<script>
import { userFields } from "@/data/index";
import textInput from "@/components/core/form-components/textInput";
import textAreaInput from "@/components/core/form-components/textAreaInput";
import passwordInput from "@/components/core/form-components/passwordInput";
import selectInput from "@/components/core/form-components/selectInput";
import dateInput from "@/components/core/form-components/dateInput";
import radioInput from "@/components/core/form-components/radioInput";
export default {
  name: "FormUser",
  components: {
    textInput,
    textAreaInput,
    passwordInput,
    selectInput,
    dateInput,
    radioInput
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
        phone: "",
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
    save() {
      let params = {};
      for (let index = 0; index < this.fields.length; index++) {
        const element = this.fields[index];
        params[element.key] = element.value;
      }
      console.log(params);
      this.$api.post(`users`, params).then(({ data: { data } }) => {
        if (data) {
          this.$emit("getUsername", data.username);
          this.$emit("close");
        } else {
          console.log("invalid data");
        }
      });
    }
  }
};
</script>
