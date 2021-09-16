<template>
  <w-breadcrumbs>
    <template v-if="$slots.separator" #separator>
      <slot name="separator" />
    </template>
    <template v-if="$slots.item" #item="{ item, isLast }">
      <slot name="item" :item="item" :is-last="isLast" />
    </template>
  </w-breadcrumbs>
</template>

<script>
  export default {
  }
</script>