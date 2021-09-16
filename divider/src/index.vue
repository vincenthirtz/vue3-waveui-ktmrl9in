<template>
  <w-divider v-if="$slots.default">
    <slot />
  </w-divider>
  <w-divider v-else></w-divider>
</template>

<script>
  export default {
  }
</script>