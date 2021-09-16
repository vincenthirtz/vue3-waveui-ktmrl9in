<template>
  <w-app>
    <slot></slot>
  </w-app>
</template>

<script>
  export default {
  props: {
    mdxComponents: {
      type: Object,
      default: () => ({})
    }
  },
  provide () {
    return {
      '$mdxComponents': this.mdxComponents
    }
  }
}
</script>