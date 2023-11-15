<template>
    <div>
        <Nav></Nav>
        <Header></Header>
        <br>

        <hr/>
        <br>
        <Main></Main>
        <Footer></Footer>

    </div>

</template>
<script>
import Nav from '../components/Nav.vue';
import Header from '../components/Header.vue';
import Main from '../components/Main.vue';
import Footer from '../components/Footer.vue';

export default {
   components:{
       Nav,
       Header,
       Footer,
       Main
   }
}
</script>
<style scoped>

</style>
