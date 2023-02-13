<template>
  <el-container>
    <el-aside width="200px">
      <Menu></Menu>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <slot></slot>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import Menu from './menu.vue'

</script>

<style lang="" scoped>
  
</style>