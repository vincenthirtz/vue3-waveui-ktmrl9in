<template>
  <MDXProvider :mdxComponents="mdxComponents">
    <slot></slot>
  </MDXProvider>
</template>

<script>
  import MDXProvider from './mdx-provider.vue'

const mdxComponents = {}
export default {
  components: { MDXProvider },
  setup () {
    return { mdxComponents }
  }
}
</script>