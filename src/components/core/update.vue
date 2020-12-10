<template>
  <CContainer class="c-app flex-column" :fluid="true">
    <router-link :to="{ name: 'UserIndex' }" class="mb-3">
      <CIcon name="cilArrowLeft" /> Назад
    </router-link>
    <CCard class="w-100 bg-white">
      <CCardHeader> Oтредактировать {{ title }} </CCardHeader>
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
          <CIcon name="cil-user-plus" />Oтредактировать
        </CButton>
      </CCardBody>
    </CCard>
  </CContainer>
</template>
<script>
import textInput from "@/components/core/form-components/textInput";
import textAreaInput from "@/components/core/form-components/textAreaInput";
import passwordInput from "@/components/core/form-components/passwordInput";
import selectInput from "@/components/core/form-components/selectInput";
import dateInput from "@/components/core/form-components/dateInput";
import radioInput from "@/components/core/form-components/radioInput";
export default {
  components: {
    textInput,
    textAreaInput,
    passwordInput,
    selectInput,
    dateInput,
    radioInput
  },
  props: {
    fields: {
      type: Array,
      default() {
        return [];
      }
    },
    apiSlug: {
      type: String,
      default: ""
    },
    id: {
      type: Number,
      default: 0
    },
    indexViewName: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    }
  },
  methods: {
    save() {
      let params = {};
      for (let index = 0; index < this.fields.length; index++) {
        const element = this.fields[index];
        params[element.key] = element.value;
      }
      this.$api.put(`${this.apiSlug}/${this.id}`, params).then(res => {
        if (res.data.success) {
          this.$router.push({ name: this.indexViewName });
        } else {
          console.log("invalid data");
        }
      });
    }
  }
};
</script>

<style></style>
