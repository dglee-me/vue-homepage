<template>
    <select class="form-control"
        v-on:chang="$emit('select-change', $event.target.value)"
    >
        <option value selected="" disabled="">선택하지않음</option>
        <option v-for="(item, index) in items" :key="index" :value="item">{{item}}</option>
        <option v-if="manual == 'true'" value="_manual">직접입력</option>
    </select>
</template>

<script>
   export default {
       name: "SelectBox",
       props: ["model", "items", "manual"],
       event: "select-change"
   };
</script>