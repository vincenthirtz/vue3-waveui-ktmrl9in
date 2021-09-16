<template>
  <w-menu>
    <slot></slot>
    <template #activator="{ on }">
      <slot name="activator" :on="on"></slot>
    </template>
  </w-menu>
</template>

<script>
  export default {
  }
</script>