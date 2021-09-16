<template>
  <w-card>
    <slot></slot>

    <template #title v-if="$slots.title">
      <slot name="title"></slot>
    </template>

    <template #actions v-if="$slots.actions">
      <slot name="actions"></slot>
    </template>
  </w-card>
</template>

<script>
  export default {
  }
</script>