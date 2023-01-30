<template>
    <div class="my-container">
        <h1> Not Found 404!</h1>
        <router-link class="button button-pink" :to="{ name: 'products' }">
            Go back
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'NotFound'
    }
</script>

<style lang="scss">
.my-container {
    height: 100vh;
    font-family: "Montserrat", "sans-serif";
    font-weight: bolder;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style> 
