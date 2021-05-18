<template>
    <div id="testimonial-section">
        <main>
            <div class="slider">
                <div class="buttons">
                    <div @click="prevSlide()" class="previous"></div>
                    <div @click="nextSlide()" class="next"></div>
                </div>
                <div v-for="(item, index) in testimonials" :key="index"  class="slide">
                    <div class="testimonial">
                        <blockquote>
                            {{ item.quote }}
                        </blockquote>
                        <p class="author">{{ item.name }}</p>
                    </div>

                    <div class="slider-img">
                        <img :src="item.image" alt="Author Image">
                    </div>

                </div>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    name: "Testimonials",
    data() {
        return {
            index: 0,
            next: undefined,
            prev: undefined,
            slides: undefined,
        }
    },
    mounted() {
        this.next = document.querySelector(".next");
        this.prev = document.querySelector(".previous");
        this.slides = document.querySelectorAll(".slide");
        this.display(this.index);
    },
    props: {
        testimonials: {
            type: Array,
            default: [
                {
                    quote: "“ 'n Getuie se storie, Lorem ipsum dolor sit amet consectetur adipisicing elit.\n" +
                        "                        Amet nemo harum repellendus aut itaque. Temporibus quaerat dolores ut, cupiditate molestiae\n" +
                        "                        commodi! Distinctio praesentium, debitis aut minima doloribus earum quia commodi ”",
                    name: "Tanya Sinclair",
                    image: "https://alcs-slider.netlify.app/images/image-tanya.jpg"
                },
                {
                    quote: "“ 'n Getuie se storie, Lorem ipsum dolor sit amet consectetur adipisicing elit.\n" +
                        "                        Amet nemo harum repellendus aut itaque. Temporibus quaerat dolores ut, cupiditate molestiae\n" +
                        "                        commodi! Distinctio praesentium, debitis aut minima doloribus earum quia commodi ”",
                    name: "John Tarkpor",
                    image: "https://alcs-slider.netlify.app/images/image-john.jpg"
                }
            ]
        }
    },
    methods: {
        display(index) {
            this.slides.forEach((slide) => {
                slide.style.display = "none";
            });
            this.slides[index].style.display = "flex";
        },
        nextSlide() {
            this.index++;
            if (this.index > this.slides.length - 1) {
                this.index = 0;
            }
            this.display(this.index);
        },
        prevSlide() {
            this.index--;
            if (this.index < 0) {
                this.index = this.slides.length - 1;
            }
            this.display(this.index);
        }
    }
}
</script>

<style scoped lang="scss">
$DarkBlue: hsl(240, 38%, 20%);
$GrayishBlue: hsl(240, 18%, 77%);
$Background: #FFFFFF;

$font-300: 300;
$font-500: 500;
$font-700: 700;

$bezier: cubic-bezier(0.25, 0.8, 0.25, 1);

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&display=swap');

*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html {

    body {
        width: 100%;
        min-height: 100vh;
        color: $DarkBlue;
        font-size: 32px;
        font-family: 'Inter', sans-serif;
        background-color: $Background;
        background-repeat: no-repeat;
        background-position: left bottom;
        background-size: 280px 72px;
        background-image: url(https://alcs-slider.netlify.app/images/pattern-curve.svg);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;

        #testimonial-section {
            position: relative;
            max-width: 71rem;
            margin: auto;
        }
        main {
            width: 100%;
            max-width: 1440px;
            padding: 16px;

            .slider {

                .buttons {
                    z-index: 1;
                    right: 50%;
                    top: 261px;
                    width: 80px;
                    height: 40px;
                    position: absolute;
                    border-radius: 50px;
                    transform: translateX(50%);
                    background-color: $Background;

                    .previous,
                    .next {
                        width: 50%;
                        height: 100%;
                        position: absolute;
                        background-repeat: no-repeat;
                        background-position: center;
                        cursor: pointer;
                    }

                    .previous {
                        left: 0;
                        background-image: url('https://alcs-slider.netlify.app/images/icon-prev.svg');

                        &:hover {
                            transform: scale(1.25);
                        }
                    }

                    .next {
                        right: 0;
                        background-image: url('https://alcs-slider.netlify.app/images/icon-next.svg');

                        &:hover {
                            transform: scale(1.25);
                        }
                    }
                }

                .slide {
                    display: flex;
                    margin: 0 auto;
                    text-align: center;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column-reverse;

                    .testimonial {
                        padding: 32px 51px;
                        background-size: 60px;
                        background-position: top;
                        background-repeat: no-repeat;
                        background-image: url(https://alcs-slider.netlify.app/images/pattern-quotes.svg);

                        blockquote {
                            font-size: 18px;
                            font-weight: $font-300;
                            line-height: 24px;
                            margin-bottom: 36px;
                        }

                        .author {
                            font-size: 15px;
                            font-weight: $font-700;

                            span {
                                display: block;
                                color: $GrayishBlue;
                                font-weight: $font-500;
                            }
                        }
                    }

                    .slider-img {
                        width: 100%;
                        padding: 30px;
                        display: flex;
                        margin-bottom: 40px;
                        align-items: center;
                        justify-content: center;
                        background-size: contain;
                        background-position: center;
                        background-repeat: no-repeat;
                        background-image: url(https://alcs-slider.netlify.app/images/pattern-bg.svg);

                        img {
                            width: 240px;
                            display: block;
                            border-radius: 10px;
                            box-shadow: 0px 16px 40px 0px rgba(135, 105, 210, 0.4);
                        }
                    }

                    .active {
                        opacity: 1;
                        transform: translateX(0) scale(1);
                        transition-delay: 0.4s;
                    }
                }
            }
        }

        footer {
            font-size: 11px;
            text-align: center;

            a {
                color: hsl(228, 45%, 44%);
            }
        }

        .hide {
            display: none;
        }
    }
}

@media screen and (min-width: 600px) {
    html {
        body {
            main {
                max-width: 800px;

                .slider {
                    .buttons {
                        top: 280px;
                    }
                }
            }
        }
    }
}

@media screen and (min-width: 900px) {
    html {
        body {
            main {
                width: 100%;
                max-width: 1054px;
                padding: 64px 64px 64px 0;

                .slider {

                    .buttons {
                        right: 43%;
                        top: 500px;
                    }

                    .slide {
                        position: relative;
                        text-align: left;
                        display: flex;
                        flex-direction: row;

                        .testimonial {
                            padding: 32px 0 0 0;
                            background-size: 80px;
                            background-position: 19% -7%;
                            transform: translateX(100px);

                            blockquote {
                                font-size: 24px;
                                line-height: 30px;
                            }

                            .author {
                                span {
                                    display: contents;
                                }
                            }
                        }

                        .slider-img {
                            padding: 55px;

                            img {
                                width: 400px;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
