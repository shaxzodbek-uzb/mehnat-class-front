<template>
  <div>
    <CForm>
      <CRow>
        <CCol sm="4">
          <CInput
            label="Foydalanuvchi nomi"
            placeholder="Enter your name"
            v-model="user.username"
          />
        </CCol>
        <CCol sm="4">
          <div class="form-group">
            <label for="exampleFormControlSelect1">Roli</label>
            <select
              v-model="user.role"
              class="form-control"
              id="exampleFormControlSelect1"
            >
              <option
                v-for="(role, index) in roles"
                :key="index"
                :value="role.value"
                >{{ role.value }}</option
              >
            </select>
          </div>
        </CCol>
      </CRow>
      <CRow>
        <CCol sm="4">
          <div class="form-group">
            <label for="exampleFormControlSelect1">Status</label>
            <select
              v-model="user.status"
              class="form-control"
              id="exampleFormControlSelect1"
            >
              <option
                v-for="(status, index) in statuses"
                :key="index"
                :value="status.value"
                >{{ status.value }}</option
              >
            </select>
          </div>
        </CCol>
        <CCol sm="4">
          <CInput
            type="date"
            label="Ro'yhatdan otgan sanasi"
            placeholder="0000 0000 0000 0000"
            v-model="user.registered"
          />
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
      statuses: [
        { value: "Active" },
        { value: "Banned" },
        { value: "Inactive" },
        { value: "Pending" }
      ]
    };
  }
};
</script>
