<template>
    <select 
        class="form-control"
        v-on:change="updateValue($event.target.value)"
    >
        <option value selected="" disabled="">선택하지않음</option>
        <option v-for="(item, index) in items" :key="index" :value="item">{{item}}</option>
        <option v-if="manual == true" value="_manual">직접입력</option>
    </select>
</template>

<script>
   export default {
       name: "SelectBox",
       props: {
           value: String,
           items: Array,
           manual: Boolean
       },
       methods: {
           updateValue: function (value) {
                this.$emit('change', value);
            }
       }
   };
</script>