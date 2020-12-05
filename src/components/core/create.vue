<template>
  <CContainer class="c-app flex-column" :fluid="true">
    <router-link :to="{ name: 'UserIndex' }" class="mb-3">
      <CIcon name="cilArrowLeft" /> Foydalanuvchilar ro'yhatiga qaytish
    </router-link>
    <CCard class="w-100 bg-white">
      <CCardHeader>
        Yangi foydalanuvchi qo'shish
      </CCardHeader>
      <CCardBody class="justify-content-center">
        <CForm>
          <CRow>
            <component
              v-for="field in fields"
              :key="field.key"
              :label="field.label"
              :placeholder="field.placeholder"
              :is="field.type + 'Input'"
              v-model="field.value"
            >
            </component>
            {{ fields }}
            <!-- <CCol sm="12">
              <CInput
                label="Tug'ilgan yili"
                placeholder="Tug'ilgan yili"
                type="date"
                v-model="user.birth_date"
              />
            </CCol>
            <CCol sm="12">
              <CInput
                label="Telefon"
                placeholder="Telefon raqamingizni kiriting"
                v-mask="'## ### ## ##'"
                v-model="user.phone"
              />
            </CCol>
            <CCol sm="12">
              <p>Jins</p>
              <div class="form-group form-row m-1">
                <div class="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    v-model="user.gender"
                    :value="1"
                    id="customRadioInline1"
                    name="customRadioInline1"
                    class="custom-control-input"
                  />
                  <label class="custom-control-label" for="customRadioInline1"
                    >Erkak</label
                  >
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    v-model="user.gender"
                    :value="2"
                    id="customRadioInline2"
                    name="customRadioInline1"
                    class="custom-control-input"
                  />
                  <label class="custom-control-label" for="customRadioInline2"
                    >Ayol</label
                  >
                </div>
              </div>
            </CCol> -->
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
      </CCardBody>
    </CCard>
  </CContainer>
</template>
<script>
import textInput from "@/components/core/form-components/textInput";
import textAreaInput from "@/components/core/form-components/textAreaInput";
export default {
  components: {
    textInput,
    textAreaInput
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
    indexViewName: {
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
      console.log(params);
      this.$api.post(`${this.apiSlug}`, params).then(res => {
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
