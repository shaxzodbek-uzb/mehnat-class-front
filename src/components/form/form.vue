<template>
  <CForm>
    <CRow>
      <CCol sm="12">
        <CInput label="Ism" placeholder="Name" v-model="user.fullname" />
      </CCol>
      <CCol sm="12">
        <CInput label="Username" placeholder="@nick" v-model="user.username" />
      </CCol>
      <CCol sm="12">
        <CInput
          label="Parol"
          type="password"
          placeholder="password"
          v-model="user.password"
        />
      </CCol>
      <CCol sm="12">
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
        <CTextarea label="Status" placeholder="Bio" v-model="user.status" />
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
