<template>
    <section id="jumbotron" class="container">
    </section>
    <section class="container">
        <div class="row">
            <div class="col-12">
                <ContactComponent></ContactComponent>
            </div>
        </div>
    </section>
</template>

<script>
import ContactComponent from '../components/ContactComponent.vue';

export default {
    name: 'ContactUs',
    components: {
        ContactComponent
    }
}
</script>

<style lang="scss" scoped>
#jumbotron {
    background-image: url(./../assets/img/jumbo.jpg);
    background-position: center;
    background-size: cover;
    min-height: 200px;
    margin-top: 10px;
}

</style>