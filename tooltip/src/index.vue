<template>
  <w-tooltip>
    <slot></slot>
    <template #activator="{ on }">
      <slot name="activator" :on="on"></slot>
    </template>
  </w-tooltip>
</template>

<script>
  export default {
  }
</script>