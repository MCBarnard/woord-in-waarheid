<template>
    <section class="intro-wrapper">
        <p class="intro-wrapper__text">
            {{ text }}
        </p>
    </section>
</template>

<script>
export default {
    name: "CenterText",
    props: {
        text: {
            default: "'n Paragraaf om die inhoud te beskryf byvoorbeeld wie die kerk is, 'n Paragraaf om die inhoud te beskryf byvoorbeeld wie die kerk is, " +
                "'n Paragraaf om die inhoud te beskryf byvoorbeeld wie die kerk is, 'n Paragraaf om die inhoud te beskryf byvoorbeeld wie die kerk is, ",
            type: String
        }
    }
}
</script>

<style scoped lang="scss">
.intro-wrapper {
    height: auto;
    max-width: 48.125rem;
    color: #475968;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    margin: 6rem auto 2rem;
    padding: 20px 3.75rem;
    min-width: 20rem;
    line-height: 34px;
@media only screen and (max-width: 576px) {
    margin: 4rem auto 2rem;
    padding: 20px;
}
}

</style>
