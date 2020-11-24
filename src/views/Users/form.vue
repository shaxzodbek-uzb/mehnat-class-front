<template>
  <div>
    <CForm>
      <CRow>
        <CCol sm="8">
          <CRow>
            <CCol sm="12">
              <CInput
                label="F.I.O"
                placeholder="F.I.O"
                :horizontal="{ label: 'col-sm-4', input: 'col-sm-8' }"
                v-model="user.fullname"
              />
            </CCol>
            <CCol sm="12">
              <CInput
                label="Foydalanuvchi nomi"
                placeholder="Foydalanuvchi nomi"
                :horizontal="{ label: 'col-sm-4', input: 'col-sm-8' }"
                v-model="user.username"
              />
            </CCol>
            <CCol sm="12">
              <CInput
                label="Tug'ilgan yili"
                placeholder="Tug'ilgan yili"
                type="date"
                :horizontal="{ label: 'col-sm-4', input: 'col-sm-8' }"
                v-model="user.birth_date"
              />
            </CCol>
            <CCol sm="12">
              <CTextarea
                label="Status"
                placeholder="Statusingizni kiriting"
                :horizontal="{ label: 'col-sm-4', input: 'col-sm-8' }"
                v-model="user.status"
              />
            </CCol>
            <CCol sm="12">
              <CInput
                label="Telefon"
                placeholder="Telefon raqamingizni kiriting"
                :horizontal="{ label: 'col-sm-4', input: 'col-sm-8' }"
                v-mask="'## ### ## ##'"
                v-model="user.phone"
              />
            </CCol>
            <CCol sm="12">
              <div class="form-group form-row">
                <label for="SelectGender" class="col-form-label col-sm-4"
                  >Jinsi</label
                >
                <div class="col-sm-8">
                  <select
                    v-model="user.gender"
                    class="form-control"
                    id="SelectGender"
                  >
                    <option
                      v-for="(gender, index) in genders"
                      :key="index"
                      :value="gender.value"
                      >{{ gender.label }}</option
                    >
                  </select>
                </div>
              </div>
            </CCol>
          </CRow>
        </CCol>
      </CRow>
    </CForm>
  </div>
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
