<template>
  <w-checkboxes>
    <template v-if="$slots.item" #item="{ item }">
      <slot name="item" :item="item"></slot>
    </template>
  </w-checkboxes>
</template>

<script>
  export default {
  }
</script>