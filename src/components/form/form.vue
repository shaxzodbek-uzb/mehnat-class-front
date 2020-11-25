<template>
  <CForm>
    <CRow>
      <CCol sm="12">
        <CInput placeholder="F.I.O" v-model="user.fullname" />
      </CCol>
      <CCol sm="12">
        <CInput placeholder="Foydalanuvchi nomi" v-model="user.username" />
      </CCol>
      <CCol sm="12">
        <CInput
          placeholder="Tug'ilgan yili"
          type="date"
          v-model="user.birth_date"
        />
      </CCol>
      <CCol sm="12">
        <CTextarea placeholder="Statusingizni kiriting" v-model="user.status" />
      </CCol>
      <CCol sm="12">
        <CInput
          placeholder="Telefon raqamingizni kiriting"
          v-mask="'## ### ## ##'"
          v-model="user.phone"
        />
      </CCol>
      <CCol sm="12">
        <div class="form-group form-row">
          <select
            v-model="user.gender"
            class="form-control"
            placeholder="Jinsi"
          >
            <option
              v-for="(gender, index) in genders"
              :key="index"
              :value="gender.value"
              >{{ gender.label }}</option
            >
          </select>
        </div>
      </CCol>
    </CRow>
  </CForm>
</template>
<script>
export default {
  name: "FormUser",
  props: {
    user: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      roles: [{ value: "Member" }, { value: "Staff" }, { value: "Admin" }],
      genders: [
        { value: 1, label: "Erkak" },
        { value: 2, label: "Ayol" }
      ]
    };
  }
};
</script>
