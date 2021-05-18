<template>
    <div class="ecommerce-card">
        <div class="ecommerce-card__container" :class="[reversed && 'reverse-card card-swap']">
            <article class="ecommerce-card__left">
                <div class="ecommerce-card__heading">
                    <div class="ecom-image" :style="'background-image: url(' + icon + ')'"></div>
                    <h3 class="ecommerce-card__h3">{{ header }}</h3>
                </div>
                <div class="ecommerce-card__text">
                    <p>
                        {{ body }}
                    </p>
                    <router-link :to="link">{{ linkText }}</router-link>
                </div>
            </article>
            <article class="ecommerce-card__right sol-ecomm-Card" :style="'background-image: url(' + image + ')'">
                <div class="ecommerce-card__heading--mobile ">
                    <div class="ecom-image" :style="'background-image: url(' + icon + ')'" title="ecommerce icon with grey shopping cart"></div>
                    <h3 class="ecommerce-card__h3">{{ header }}</h3>
                </div>
                <img :src="image" alt="TBC">
            </article>
        </div>
    </div>
</template>

<script>
export default {
    name: "HorizontalCard",
    props: {
        reversed: {
            default: false,
            type: Boolean
        },
        header: {
            default: "Title",
            type: String
        },
        linkText: {
            default: "Text to link",
            type: String
        },
        body: {
            default: "Maecenas tincidunt nunc non feugiat sollicitudin. Phasellus dapibus urna eu enim convallis dictum.\n" +
                "                        Cras rutrum purus convallis, egestas tortor et, congue arcu. Praesent finibus augue eros,\n" +
                "                        hendrerit faucibus lorem posuere vitae. Sed quis quam ac nibh rhoncus tincidunt nisi.",
            type: String
        },
        image: {
            default: "https://www.payfast.co.za/assets/images/solutions/ecommerce.jpg",
            type: String
        },
        icon: {
            default: "https://www.payfast.co.za/assets/images/ecommerce_solutions_listing.svg",
            type: String
        },
        link: {
            default: "/",
            type: String
        }
    }
}
</script>

<style scoped lang="scss">
$card-height-60: 3.75rem;
$card-height-80: 5rem;

.ecommerce-card {
    max-width: 1096px;
    margin: auto;
    padding: 0 3.75rem;
}

.ecommerce-card {
    max-width: 1096px;
    margin: 4.375rem auto 8.75rem auto;
    padding: 0 $card-height-60 0 $card-height-60;

@media only screen and (max-width: 576px) {
    padding: 0 20px 0 20px;
}

&__container {
     margin: 3.75rem auto;
     display: flex;

@media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
    min-width: 17.5rem;
}
}

&__left {
     z-index: 1;
     width: 40%;

@media only screen and (max-width: 768px) {
    width: 100%;
}
}

.sol-ecomm-Card {
    background-image: url("https://www.payfast.co.za/assets/images/solutions/ecommerce.jpg");
}

.sol-tick-Card {
    background-image: url("https://www.payfast.co.za/assets/images/solutions/solutionslanding-ticketing.jpg");
}

.sol-inv-Card {
    background-image: url("https://www.payfast.co.za/assets/images/solutions/invoicing.jpg");
}

.sol-don-Card {
    background-image: url("https://www.payfast.co.za/assets/images/solutions/solutions-donation.jpg");
}
@media only screen and (-webkit-min-device-pixel-ratio: 2),
only screen and (min--moz-device-pixel-ratio: 2),
only screen and (-o-min-device-pixel-ratio: 2/1),
only screen and (min-device-pixel-ratio: 2),
only screen and (min-resolution: 2dppx) {
    .sol-ecomm-Card {
        background-image: url("https://www.payfast.co.za/assets/images/solutions/ecommerce@2x.jpg");
    }

    .sol-tick-Card {
        background-image: url("https://www.payfast.co.za/assets/images/solutions/solutionslanding-ticketing@2x.jpg");
    }

    .sol-inv-Card {
        background-image: url("https://www.payfast.co.za/assets/images/solutions/invoicing@2x.jpg");
    }

    .sol-don-Card {
        background-image: url("https://www.payfast.co.za/assets/images/solutions/solutions-donation@2x.jpg");
    }
}
&__right {
     min-height: 26.25rem;
     width: 60%;
     border-radius: 0.625rem;
     margin-top: 4.25rem;
     background-size: cover;
     background-position: center;
     background-repeat: no-repeat;

img {
    visibility: hidden;
    width: 100%;
@media only screen and (max-width: 768px) {
    height: 380px;
}
@media only screen and (max-width: 576px) {
    height: 300px;
}
}

@media only screen and (max-width: 1056px) {
    min-height: 28.75rem;
}

@media only screen and (max-width: 768px) {
    height: 380px;
    width: 100%;
    background-size: cover;
    min-height: unset;
    margin: 4.375rem auto 0 auto;
    border-radius: unset;
    border-top-left-radius: 0.625rem;
    border-top-right-radius: 0.625rem;
    -webkit-border-top-left-radius: 0.625rem;
    -webkit-border-top-right-radius: 0.625rem;
    -moz-border-radius-topleft: 0.625rem;
    -moz-border-radius-topright: 0.625rem;
}
@media only screen and (max-width: 576px) {
    height: 300px;
}
}

&__heading {
     display: flex;
     margin-left: 15%;
     background-repeat: no-repeat;
     padding-left: 3.5rem;

@media only screen and (max-width: 768px) {
    display: none;
}

&--mobile {
     display: none;
     transform: translateY(-5.625rem);
     background-repeat: no-repeat;
     height: 3.75rem;

@media only screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    margin: auto;
}

@media only screen and (max-width: 450px) {
    justify-content: flex-start;
}
}
}

&__h3 {
     margin-top: 8px;
     margin-left: 1.313rem;
     font-size: 36px;
     color: #041b2b;
     font-family: 'Poppins', sans-serif;
     white-space: nowrap;

@media only screen and (max-width: 768px) {
    margin-top: 16px;
    margin-left: 0;
    font-size: 1.438rem;
    white-space: nowrap;
}
}

&__text {
     min-height: 22.875rem;
     min-width: 400px;
     width: 120%;
     border-radius: 10px 10px 10px 3.75rem;
     background-color: #F7F9FE;
     padding: 40px;
     margin-top: 40px;
     margin-bottom: 40px;
     position: relative;
     overflow: hidden;
     transition: all 0.3s;

&:hover {
     box-shadow: 0 1.563rem 5rem -1.688rem rgba(173, 186, 223, 0.81);
@media only screen and (max-width: 768px) {
    box-shadow: none;
}
}

&:before {
     content: "";
     display: block;
     width: 0;
     height: 0.313rem;
     background: #a35ae3;
     transition: width 0.3s;
     position: absolute;
     top: 0;
     margin-left: -40px;
 }

&:hover:before {
     width: 100%;

@media only screen and (max-width: 768px) {
    width: 0;
}
}

@media only screen and (max-width: 768px) {
    margin-top: 0;
    border-radius: 0 0 10px 10px;
    width: 100%;
    padding: 1.625rem;
    min-height: 16.875rem;
}
@media only screen and (max-width: 576px) {
    min-width: unset;
}

p {
    min-height: 280px;
    height: auto;
    color: #475968;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    border-bottom: 1px solid rgba(23, 126, 232, 0.1);
    margin-bottom: 32px;
    line-height: 2.125rem;
    padding-bottom: 20px;

@media only screen and (max-width: 768px) {
    height: auto;
    padding-bottom: 20px;
    min-height: unset;
}
}

a {
    color: #177EE8;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 600;
    float: right;
    line-height: 20px;

&:hover {
     color: #177EE8;
 }
}

i {
    margin-left: 4px;
}
}
}


.reverse-card {
    flex-direction: row-reverse;


.ecommerce-card__text {
    transform: translateX(-120px);
}
    @media only screen and (max-width: 768px) {
        flex-direction: column-reverse;

        .ecommerce-card__text {
            transform: unset;
        }
    }
}

.ecom-image {
    height: $card-height-60;
    width: $card-height-80;
    background-repeat: no-repeat;
    background-size: contain;
}

.ticket-image {
    background-image: url("https://www.payfast.co.za/assets/images/ticketing_solutions_listing.svg");
    height: $card-height-60;
    width: $card-height-80;
    background-repeat: no-repeat;
}

.invoicing-image {
    background-image: url("https://www.payfast.co.za/assets/images/invoicing_solutions_listing.svg");
    height: $card-height-60;
    width: $card-height-80;
    background-repeat: no-repeat;
}

.donation-image {
    background-image: url("https://www.payfast.co.za/assets/images/donations_solutions_listing.svg");
    height: $card-height-60;
    width: calc(100% + 20%);
    background-repeat: no-repeat;
    transform: translate(-5.625rem, -0.313rem);

.ecommerce-card__h3 {
    width: 100%;
}

@media only screen and (max-width: 1050px) {
    margin-left: 0;
}

@media only screen and (max-width: 992px) {
    margin-left: 0;
    transform: translate(-0.625rem, -0.313rem);
}

@media only screen and (max-width: 768px) {
    margin-left: 0;
    width: 5rem;
    transform: translateX(0);
}
}
.sol-ecomm-Card {
    background-image: url("https://www.payfast.co.za/assets/images/solutions/ecommerce.jpg");
}
</style>
