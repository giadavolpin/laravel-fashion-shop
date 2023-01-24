<template>
	<AppHeader></AppHeader>
	<main>
	  <router-view></router-view>
	</main>
  </template>
  
  <script>
  import AppHeader from './components/HeaderComponent.vue';
	export default {
	  name: 'App',
	  components:{
		AppHeader
	  }
	  
	}
  </script>
  
  <style lang="scss" scoped>
  </style>