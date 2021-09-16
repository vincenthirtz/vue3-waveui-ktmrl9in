<template>
  <w-badge>
    <template #activator>
      <slot />
    </template>
    <template #badge>
      <slot name="badge" />
    </template>
    <slot />
  </w-badge>
</template>

<script>
  export default {
  }
</script>