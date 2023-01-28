<template>
	<AppHeader></AppHeader>
	<main>
	  <router-view></router-view>
	</main>
	<AppFooter></AppFooter>
  </template>
  
  <script>
  import AppHeader from './components/HeaderComponent.vue';
  import AppFooter from './components/FooterComponent.vue';

	export default {
	  name: 'App',
	  components:{
		AppHeader,
		AppFooter,
	  }
	  
	}
  </script>
  
  <style lang="scss" scoped>
  main{
  	min-height: calc(100vh - 300px)
  }
  </style>