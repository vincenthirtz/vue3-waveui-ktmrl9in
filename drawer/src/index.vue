<template>
  <w-drawer>
    <slot />
    <template #pushable v-if="$slots.pushable">
      <slot name="pushable" />
    </template>
  </w-drawer>
</template>

<script>
  export default {
  }
</script>