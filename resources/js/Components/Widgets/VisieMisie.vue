<template>
    <div class="we-provide token-margin-keeper">
        <div class="we-provide__wrapper secondary-max-width">
            <h2 class="we-provide__wrapper__head">
                Opskrif vir visie en misie
            </h2>
            <span class="we-provide__wrapper__sub">
                Klein paragraaf om die inhoud oor te bring
            </span>
            <div class="we-provide__wrapper__content">
                <div class="we-provide__wrapper__content__left">

                    <div class="invoicing-offer-wrapper">
                        <div class="we-provide__wrapper__content__left__offer">
                            <img class="we-provide__wrapper__content__left__offer__check-mark-img" src="/assets/components/Check-mark.svg" alt="Check mart">
                            <h3 class="we-provide__wrapper__content__left__offer__sub-headline extra-long-heading-bg features-headline-checks">
                                Visie
                            </h3>
                            <p class="we-provide__wrapper__content__left__offer__minor-text">
                                Om as gemeente in gehoorsaamheid teenoor God uitvoering te gee aan die <strong>GROOT GEBOD</strong> end die <strong>GROOT OPDRAG</strong>
                            </p>
                        </div>
                    </div>

                    <div class="invoicing-offer-wrapper">
                        <div class="we-provide__wrapper__content__left__offer">
                            <img class="we-provide__wrapper__content__left__offer__check-mark-img" src="/assets/components/Check-mark.svg" alt="Check mart">
                            <h3 class="we-provide__wrapper__content__left__offer__sub-headline extra-long-heading-bg features-headline-checks">
                                Misie
                            </h3>
                            <p class="we-provide__wrapper__content__left__offer__minor-text">
                                Om in die Koningkryk van God uit te bou deur mense tot bekeering in Jesus Christus te lei en hulle dan te leer om 'n dissipel te word wat die voorbeeld van Jesus uitleef.
                            </p>
                        </div>
                    </div>

                </div>

<!--                <div class="we-provide__wrapper__content__right">-->

<!--                    <div class="invoicing-offer-wrapper">-->
<!--                        <div class="we-provide__wrapper__content__left__offer">-->
<!--                            <img class="we-provide__wrapper__content__left__offer__check-mark-img" src="/assets/components/Check-mark.svg" alt="Check mark">-->
<!--                            <h3 class="we-provide__wrapper__content__left__offer__sub-headline extra-long-heading-md features-headline-checks">Split-->
<!--                                your recurring payments </h3>-->
<!--                            <p class="we-provide__wrapper__content__left__offer__minor-text">-->
<!--                                If you have a custom recurring payment integration such as <a href="/features/tokenization">tokenization</a> or-->
<!--                                <a href="/features/subscriptions">subscriptions</a>, you can also split these payments automatically.-->
<!--                            </p>-->
<!--                        </div>-->
<!--                    </div>-->

<!--                    <div class="invoicing-offer-wrapper">-->
<!--                        <div class="we-provide__wrapper__content__left__offer">-->
<!--                            <img class="we-provide__wrapper__content__left__offer__check-mark-img" src="/assets/components/Check-mark.svg" alt="Check mark">-->
<!--                            <h3 class="we-provide__wrapper__content__left__offer__sub-headline features-headline-checks">-->
<!--                                Improve cash flow </h3>-->
<!--                            <p class="we-provide__wrapper__content__left__offer__minor-text">-->
<!--                                Say goodbye to tedious payment waiting times and collections, with Split Payments-->
<!--                                everyone gets their financial cut instantly and with reduced error.-->
<!--                            </p>-->
<!--                        </div>-->
<!--                    </div>-->

<!--                </div>-->
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: "HeadAndBullets"
}
</script>

<style scoped lang="scss">
.we-provide {
    width: 100%;
    background: #f2f2f2;
    padding: 50px 0;
    margin-bottom: 100px;

    &__wrapper {
        max-width: 71rem;
        padding: 0 40px;
        margin: auto;

        &__head {
            color: #041B2BFF;
            font-family: 'Poppins', sans-serif;
            font-size: 1.375rem;
            font-weight: bold;
            line-height: 34px;
            display: block;
            margin-bottom: 8px;
        }

        &__sub {
            margin-bottom: 3rem;
            display: block;
            max-width: 700px;
        }

        &__content {
            display: flex;
            justify-content: space-between;
            flex-direction: column;

            &__left {
                display: flex;
                justify-content: space-between;

                @media screen and (max-width: 650px) {
                    flex-direction: column;
                }

                &__offer {
                    display: grid;
                    grid-template-columns: 3.688rem  auto;
                    margin-bottom: 18px;
                    @media screen and (max-width: 370px) {
                        grid-template-columns: 2rem  auto;
                    }

                    &__check-mark-img {
                        align-self: center;
                        grid-column: 1;
                        grid-row: 1;
                        height: 20px;
                        justify-self: left;
                        width: 20px;
                        align-self: auto;
                        @media screen and (min-width: 768px) {
                            height: 24px;
                            width: 24px;
                        }
                    }

                    &__sub-headline {
                        color: #041B2BFF;
                        font-family: 'Poppins', sans-serif;
                        font-size: 18px;
                        font-weight: bold;
                        grid-column: 2;
                        grid-row: 1;
                        line-height: 24px;
                        margin: unset;
                    }

                    .features-headline-checks {
                        height: 1rem;
                    }

                    &__minor-text {
                        color: #3D4F5C;
                        display: block;
                        font-family: 'Poppins', sans-serif;
                        font-size: 16px;
                        grid-column: 2;
                        grid-row: 2;
                        line-height: 24px;
                        margin: 0;

                        @media screen and (min-width: 992px) {
                            font-size: 14px;
                            width: 23.06rem;
                        }
                    }
                }
            }

            &__right {
                display: flex;
                justify-content: space-between;

                @media screen and (max-width: 650px) {
                    flex-direction: column;
                }

            }
        }
    }
}
.invoicing-offer-wrapper {
    max-width: 47%;

    @media screen and (max-width: 650px) {
        max-width: 100%;
    }
}

</style>
