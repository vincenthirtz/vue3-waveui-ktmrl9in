<template>
  <w-timeline>
    <template #item="{ item, index }">
      <slot name="item" :item="item" :index="index"></slot>
    </template>
  </w-timeline>
</template>

<script>
  export default {
  }
</script>