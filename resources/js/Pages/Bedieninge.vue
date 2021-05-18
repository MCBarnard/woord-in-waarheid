<template>
    <div class="bedieninge">
        <HeroBanner
            text="Iemand roep in die woestyn: Maak die pad vir die Here gereed, maak die paaie vir Hom reguit."
        />
        <CenterText
            text="'n Paragraaf om die inhoud te beskryf byvoorbeeld wie die kerk is, 'n
             Paragraaf om die inhoud te beskryf byvoorbeeld wie die kerk is, 'n Paragraaf om die
             inhoud te beskryf byvoorbeeld wie die kerk is, 'n Paragraaf om die inhoud te beskryf byvoorbeeld wie die kerk is"
        />
        <HorizontalCard
            header="ssss"
            body="Just some super random body text inserted here"
            linkText="Just some super random body text inserted here"
            image="/assets/wie-is-ons/past.jpg"
            icon="/assets/wie-is-ons/pastor.png"
        />
        <HorizontalCard
            reversed
            header="ssss"
            body="Just some super random body text inserted here"
            linkText="Just some super random body text inserted here"
            image="/assets/wie-is-ons/past.jpg"
            icon="/assets/wie-is-ons/bible.png"
        />
        <HorizontalCard
            header="ssss"
            body="Just some super random body text inserted here"
            linkText="Just some super random body text inserted here"
            image="/assets/wie-is-ons/past.jpg"
            icon="/assets/wie-is-ons/christianism.png"
        />
        <HorizontalCard
            reversed
            header="ssss"
            body="Just some super random body text inserted here"
            linkText="Just some super random body text inserted here"
            image="/assets/wie-is-ons/past.jpg"
            icon="/assets/wie-is-ons/cross.png"
        />
    </div>
</template>

<script>
import HorizontalCard from "../Components/general/HorizontalCard";
import HeroBanner from "../Components/general/HeroBanner";
import CenterText from "../Components/general/CenterText";

export default {
    name: "Bedieninge",
    components: {
        HorizontalCard,
        HeroBanner,
        CenterText
    }
}
</script>

<style scoped>

</style>
