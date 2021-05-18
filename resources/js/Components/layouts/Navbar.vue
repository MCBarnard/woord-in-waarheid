<template>
    <header class="navbar">
        <img class="navbar_logo" src="/assets/home/curch_icon_round.gif" alt=""/>
        <router-link class="navbar__item" to="/" ><div>Tuis</div></router-link>
        <router-link class="navbar__item" to="/wie-is-ons" ><div>Wie is ons</div></router-link>
        <router-link class="navbar__item" to="/bedieninge" ><div>Bedieninge / Projekte</div></router-link>
        <router-link class="navbar__item" to="/ddds" ><div>Offer gawes / Tiendes</div></router-link>
    </header>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style scoped lang="scss">
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    align-items: center;
    color: white;
    font-family: Helvetica;
    font-weight: 300;
    background: #292424;
    justify-content: center;
    font-size: 18px;
    z-index: 4;
}

.navbar__item {
    padding: 16px 16px;
    cursor: pointer;
    vertical-align: middle;
    position: relative;
    color: #fff;
}
.navbar__item:hover {
    text-decoration: none;
}
.navbar__item:hover:after {
    display: block;
    position: absolute;
    content: "";
    width: 100%;
    border-bottom: 3px solid #6b6075;
    left: 0;
    bottom: 0;
    text-decoration: none;
}

.router-link-active.router-link-exact-active:after {
    display: block;
    position: absolute;
    content: "";
    width: 100%;
    border-bottom: 3px solid #a35ae3;
    left: 0;
    bottom: 0;
}
.navbar_logo {
    max-width: 100px;
    max-height: 100px;
    object-fit: contain;
    position: absolute;
    left: 5px;
    top: 5px;
    cursor: pointer;
}

</style>
