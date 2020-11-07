<template>
  <transition appear name="v--mask">
    <footer v-once class="blog__footer">
      <a class="signature" href="" target="_blank">
        <img style="width: 50%" src="../assets/icon.png"/>
      </a>
    </footer>
  </transition>
</template>

<script>
export default { name: 'blog-footer' }
</script>
