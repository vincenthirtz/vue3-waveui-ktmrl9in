<template>
  <w-select v-bind="$props">
    <template #item="{ item, index }">
      <slot name="item" :item="item" :index="index"></slot>
    </template>
  </w-select>
</template>

<script>
  export default {
  }
</script>