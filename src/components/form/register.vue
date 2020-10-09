<template>
  <div>
    <CCard class="w-100 bg-white">
      <CCardBody class="justify-content-center">
        <CModal
          title="Foydalanuvchini tahrirlash"
          color="info"
          :footer="false"
          :show.sync="showModal"
        >
          <CForm>
            <CRow>
              <CCol sm="12">
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
                    <!-- <CInput
                      label="Foydalanuvchi nomi"
                      placeholder="Foydalanuvchi nomi"
                      :horizontal="{ label: 'col-sm-4', input: 'col-sm-8' }"
                      v-model="user.username"
                    /> -->
                    <CInput
                      label="Foydalanuvchi nomi"
                      placeholder="Username"
                      autocomplete="username"
                      :horizontal="{ label: 'col-sm-4', input: 'col-sm-8' }"
                      v-model="user.username"
                    >
                      <template #prepend-content>@</template>
                    </CInput>
                  </CCol>
                  <CCol sm="12">
                    <CInput
                      type="password"
                      label="Parol"
                      placeholder="Parol"
                      :horizontal="{ label: 'col-sm-4', input: 'col-sm-8' }"
                      v-model="user.password"
                    />
                  </CCol>
                  <CCol sm="12">
                    <CInput
                      label="Tug'ilgan yili"
                      placeholder="Tug'ilgan yili"
                      type="date"
                      :horizontal="{ label: 'col-sm-4', input: 'col-sm-8' }"
                      v-model="user.age"
                    />
                  </CCol>
                  <CCol sm="12">
                    <CInput
                      label="Telefon"
                      placeholder="Telefon"
                      :horizontal="{ label: 'col-sm-4', input: 'col-sm-8' }"
                      v-model="user.phone"
                    />
                  </CCol>
                </CRow>
              </CCol>
            </CRow>
        <CButton color="primary float-right" @click="updateUser">
          <CIcon name="cil-user-plus" />Saqlash
        </CButton>
          </CForm>
        </CModal>
      </CCardBody>
    </CCard>
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
    },
    showModal:{
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  data() {
    return {
    };
  }
};
</script>
