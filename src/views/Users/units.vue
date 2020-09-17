<template>
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
</template>
<script>
export default {
  name: "Units",
  props: {
    data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      
    };
  }  
}
</script>
