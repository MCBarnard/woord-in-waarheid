<template>
    <div class="home">
        <HeroBanner
            text="Iemand roep in die woestyn: Maak die pad vir die Here gereed, maak die paaie vir Hom reguit."
        />
        <div id="our-mission" class="who-are-we">
            <div class="container">
                <div class="mission-content wow fadeInLeft">
                    <h1>Wie is ons</h1>
                    <p>Ons is 'n kerk wat mense met God in aanraaking bring. Ons help hulle groei in 'n gesonde sterk
                        verhouding met Hom en om 'n lewe vol goedhartigheid te leef.</p>
                    <div class="three-circles">
                        <a href="/">
                            <div class="circle one">
                                <span class="circle-overlay"></span>
                                <h3>Ruik uit</h3>
                                <h4>na God</h4>
                                <span class="triangle"></span>
                            </div>
                        </a>
                        <a href="/">
                            <div class="circle two">
                                <span class="circle-overlay"></span>
                                <h3>Bou</h3>
                                <h4>verhoudinge</h4>
                                <span class="triangle"></span>
                            </div>
                        </a>
                        <a href="/">
                            <div class="circle three">
                                <span class="circle-overlay"></span>
                                <h3>Gee</h3>
                                <h4>mildelik</h4>
                                <span class="triangle"></span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <VisieMisie/>
        <EventCard
            body="  Elke Maandag - Frydag om <strong>8:00</strong>, <strong>12:00</strong>,
                    en <strong>18:30</strong>, ons bid saam en is ook aanlyn beskikbaar tydens
                    ons byeenkomste, so maak nie saak waar jy is nie, ons moedig U aan om 'n tydjie uit te sit om saam te bid
                    en loof te gee as 'n gemeente."
            heading="Bid Uur"
            subHeading="Bid saam by die kerk of aanlyn!"
            linkText="Bid Uur"
            link="/"
            image="https://images.squarespace-cdn.com/content/v1/58eba8d3725e255182484880/1611853076022-C288NADWOB9PV5SOS93I/ke17ZwdGBToddI8pDm48kBl4YCNUOkrKYQ4p1H4jLnZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ua0RCRIEXQSuPz5RnEM2QpCGlrhZInH2mIdVOLiRr-BZmfDfC9hcJ_CV9QBm_ln3EA/Prayer.jpg?format=1000w"
        />
        <EventCard
            reverse
            body="  Elke Maandag - Frydag om <strong>8:00</strong>, <strong>12:00</strong>,
                    en <strong>18:30</strong>, ons bid saam en is ook aanlyn beskikbaar tydens
                    ons byeenkomste, so maak nie saak waar jy is nie, ons moedig U aan om 'n tydjie uit te sit om saam te bid
                    en loof te gee as 'n gemeente."
            heading="Nog 'n byeenkoms"
            subHeading="'n Mooi inleiding"
            linkText="Kliek hier"
            link="/"
            image="/assets/wie-is-ons/past.jpg"
        />
        <Testimonials/>
    </div>
</template>

<script>
import VisieMisie from "../Components/Widgets/VisieMisie";
import HeroBanner from "../Components/general/HeroBanner";
import EventCard from "../Components/Widgets/EventCard";
import Testimonials from "../Components/Widgets/Testimonials";

export default {
    name: "Home",
    components: {
        HeroBanner,
        VisieMisie,
        EventCard,
        Testimonials
    }
}
</script>

<style scoped lang="scss">
#our-mission {
    width: 100%;
    background: white;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("/assets/home/top-print.png");
}
.who-are-we {
    width: 100%;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.who-are-we h1 {
    text-align: center;
    color: rebeccapurple;
    font-size: 45px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 3px;
}
.who-are-we p {
    color: #3c3c3c;
    font-size: 15px;
    line-height: 25px;
    text-align: center;
    max-width: 450px;
    margin: auto;
}
.three-circles {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
}

.three-circles .circle {
    background: #f5f5f5;
    min-width: 230px;
    width: 230px;
    height: 230px;
    border-radius: 100%;
    overflow: hidden;
    margin: 40px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all .7s;
    position: relative;
}

.three-circles .circle:hover {
    transform: scale(1.055);
}
.three-circles .circle-overlay {
    background: #f5f5f5;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    opacity: 1;
    transition: all .9s;
    z-index: 1;
}
.three-circles .circle h3 {
    color: rebeccapurple;
    font-size: 25px;
    text-transform: uppercase;
    font-weight: 700;
    padding: 0;
    margin: 0;
    transition: all .3s;
    z-index: 3;
}
.three-circles .circle:hover h3 {
    color: #FFFFFF;
}
.three-circles .circle h4 {
    color: black;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 600;
    padding: 0;
    margin: 0;
    transition: all .3s;
    margin-top: -5px;
    z-index: 3;
}
.three-circles .circle:hover h4 {
    color: #FFFFFF;
}
.three-circles .circle:hover .circle-overlay {
    background: rebeccapurple;
}
.three-circles .triangle {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 8.5px 0 8.5px;
    border-color: #663399 transparent transparent transparent;
    margin-top: 10px;
    transition: all .3s;
    z-index: 3;
}
.three-circles .circle:hover .triangle {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 8.5px 0 8.5px;
    border-color: #310e4c transparent transparent transparent;
    margin-top: 10px;
    transition: all .3s;
    z-index: 3;
}
.three-circles a {
    text-decoration: none!important;
    color: inherit!important;
}

</style>
