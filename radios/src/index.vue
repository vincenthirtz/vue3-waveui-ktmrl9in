<template>
  <w-radios v-bind="$props">
    <template v-if="$slots.item" #item="{ item, index }">
      <slot name="item" :item="item" :index="index"></slot>
    </template>
  </w-radios>
</template>

<script>
  export default {
  }
</script>