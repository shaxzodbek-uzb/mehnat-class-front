<template>
    <div>
        <CContainer >
        <CRow>
        <CCol sm="6">
            <CInput
            label="FirstName"
            placeholder="Enter your firstname"
            />
        </CCol>
        
        <CCol sm="6">
            <CInput
            label="LastName"
            placeholder="Enter your lastname"
            />
        </CCol>
        </CRow>
        <CRow>
        <CCol sm="4">
            <CInput
            label="Enter your login"
            placeholder="ex. login"
            />
        </CCol>
            <CCol sm="4">
            <CInput
            label="Enter your passord"
            placeholder="ex. password"
            />
        </CCol>
            <CCol sm="4">
            <CInput
            label="Confirm password"
            placeholder="ex. password"
            />
        </CCol>
        </CRow>
        <CRow>
        <CCol sm="4">
            <CSelect
            label="Day"
            :options="[1,2,3,4,5,6,7,8,9,10,11,12]"
            />
        </CCol>
        <CCol sm="4">
            <CSelect
            label="Month"
            :options="[1,2,3,4,5,6,7,8,9,10,11,12]"
            />
        </CCol>
        <CCol sm="4">
            <CSelect
            label="Year"
            :options="[2013, 2014,2015,2016,2017,2018,2019,2020]"
            />
        </CCol>
        </CRow>
        <CButton to="/create" size="md" color="info" class="">
              Save
        </CButton>
        </CContainer>
    </div>
</template>

<script>
export default {
name: 'Create',
  data () {
    return {
      details: [],
      collapseDuration: 0
    }
  },
  methods: {
   
  }
}
</script>
