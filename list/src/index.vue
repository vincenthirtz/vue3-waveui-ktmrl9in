<template>
  <w-list>
    <template #item="{ item, index }" v-if="$slots.item">
      <slot name="item" :item="item" :index="index"></slot>
    </template>
  </w-list>
</template>

<script>
  export default {
  }
</script>