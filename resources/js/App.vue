<template>
    <div class="app">
        <section class="section-container">
            <Navbar></Navbar>
            <router-view></router-view>
        </section>
    </div>
</template>

<script>
import "./Styles/App.scss";
import Navbar from "./Components/layouts/Navbar";

export default {
    name: "App",
    components: {
        Navbar
    }
}
</script>

<style lang="scss">

</style>
