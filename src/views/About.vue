<template>
  <div class="container">
    <h1>This is an about page</h1>
    <CAlert color="success">
      This is success alert.
    </CAlert>
    <CRow>
      <CCol col="12" sm="6">
        <CCallout color="info">
          <small class="text-muted">New Clients</small><br>
          <strong class="h4">9,123</strong>
        </CCallout>
      </CCol>
      <CCol col="12" sm="6">
        <CCallout color="danger">
          <small class="text-muted">Recurring Clients</small><br>
          <strong class="h4">22,643</strong>
        </CCallout>
      </CCol>
    </CRow>
    <CProgress :value="counter" size="sm"/>
    <CProgress
      :value="counter"
      color="success"
      animated
      show-value
      style="height:20px;"
      class="mt-1"
    />
    <CProgress class="mt-1" show-value>
      <CProgressBar
        :value="counter*(6/10)"
        color="success"
      />
      <CProgressBar
        :value="counter*(2.5/10)"
        color="warning"
      />
      <CProgressBar
        :value="counter*(1.5/10)"
        color="danger"
      />
    </CProgress>
  </div>
</template>
<script>
export default {
  data () {
    return {
      counter: 86
    }
  }
}
</script>