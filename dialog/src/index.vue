<template>
  <w-dialog>
    <slot />

    <template #title v-if="$slots.title">
      <slot name="title"></slot>
    </template>

    <template #actions v-if="$slots.actions">
      <slot name="actions"></slot>
    </template>
  </w-dialog>
</template>

<script>
  export default {
  }
</script>