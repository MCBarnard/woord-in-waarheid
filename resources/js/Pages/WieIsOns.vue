<template>
    <div class="about">
        <HeroBanner
            text="Iemand roep in die woestyn: Maak die pad vir die Here gereed, maak die paaie vir Hom reguit."
        />
        <CenterText
            text="'n Paragraaf om die inhoud te beskryf byvoorbeeld wie die kerk is, 'n
             Paragraaf om die inhoud te beskryf byvoorbeeld wie die kerk is, 'n Paragraaf om die
             inhoud te beskryf byvoorbeeld wie die kerk is, 'n Paragraaf om die inhoud te beskryf byvoorbeeld wie die kerk is"
        />
<!--   Who we are     -->
        <!-- Ui cards -->
        <section id="cards">
            <div class="container py-2">
                <div class="row pb-4">
                    <div class="col-12 text-center">
                        <div class="display-3">Ons Span</div>
                    </div>
                </div>
                <!-- cards -->
                <div class="row">
                    <ProfileCard
                        name="Carry Johnshon"
                        position="Pastor"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Amet nemo harum repellendus aut itaque. Temporibus quaerat dolores ut, cupiditate molestiae
                        commodi! Distinctio praesentium, debitis aut minima doloribus earum quia commodi."
                        image="https://images.unsplash.com/photo-1495603889488-42d1d66e5523?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=130"
                    />
                    <ProfileCard
                        name="Alex Carry"
                        position="Pastor"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Amet nemo harum repellendus aut itaque. Temporibus quaerat dolores ut, cupiditate molestiae
                        commodi! Distinctio praesentium, debitis aut minima doloribus earum quia commodi."
                        image="https://images.unsplash.com/photo-1582003457856-20898dd7e1ea?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=130"
                    />
                    <ProfileCard
                        name="Alex Carry"
                        position="Pastor"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Amet nemo harum repellendus aut itaque. Temporibus quaerat dolores ut, cupiditate molestiae
                        commodi! Distinctio praesentium, debitis aut minima doloribus earum quia commodi."
                        image="/assets/lede/woman.jpg"
                    />
                    <ProfileCard
                        name="Alex Carry"
                        position="Pastor"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Amet nemo harum repellendus aut itaque. Temporibus quaerat dolores ut, cupiditate molestiae
                        commodi! Distinctio praesentium, debitis aut minima doloribus earum quia commodi."
                        image="/assets/lede/man.jpg"
                    />
                    <ProfileCard
                        name="Alex Carry"
                        position="Pastor"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Amet nemo harum repellendus aut itaque. Temporibus quaerat dolores ut, cupiditate molestiae
                        commodi! Distinctio praesentium, debitis aut minima doloribus earum quia commodi."
                        image="/assets/lede/man1.jpg"
                    />
                </div>
            </div>
            <!-- /cards -->
        </section>
        <!-- /Ui cards -->
<!--    -----------------------------------------    -->
    </div>
</template>

<script>
import HorizontalCard from "../Components/general/HorizontalCard";
import HeroBanner from "../Components/general/HeroBanner";
import CenterText from "../Components/general/CenterText";
import ProfileCard from "../Components/general/ProfileCard";

export default {
    name: "About",
    components: {
        HorizontalCard,
        HeroBanner,
        CenterText,
        ProfileCard
    }
}
</script>

<style scoped>
/* ==== Cards using Bootstrap === */

#cards .card {
    border-radius: 20px;
    min-height: 100%;
}

#cards .heading-border {
    position: absolute;
    width: 100%;
    top: 60%;
}

#cards .card .user-picture img {
    position: absolute;
    top: -20%;
    right: 10%;
    background: #f8f9fa!important;
    padding: 10px;
}

#cards .card .user-content .user-name {
    margin-right: 150px;
}
</style>
