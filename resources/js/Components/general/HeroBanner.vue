<template>
    <div class="home-top">
        <div class="marketing">
            <h1 class="h1-verse">
                {{ text }}
            </h1>
        </div>
    </div>
</template>

<script>
export default {
    name: "HeroBanner",
    props: {
        text: {
            default: "Iemand roep in die woestyn: Maak die pad vir die Here gereed, maak die paaie vir Hom reguit.",
            type: String
        }
    }
}
</script>

<style scoped lang="scss">
.home-top {
    background-image: url("/assets/home/crowd.jpg");
    background-repeat: no-repeat;
    background-size: cover;
}
.marketing {
    align-content: center;
    padding: 200px 20px;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: linear-gradient(315deg, rgba(89, 5, 123, 0.5) 0%, rgba(68, 0, 111, 0.5) 74%);
}
.h1-verse {
    color: #FFFFFF;
    text-shadow: 2px 0px 17px #00000045;
    font-size: 22px;
    max-width: 450px;
    text-align: center;
    display: block;
    margin: auto;
    font-weight: 00;
}
</style>
