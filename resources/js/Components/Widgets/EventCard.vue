<template>
    <div id="bid-uur">
        <div class="sqs-block image-block sqs-block-image sqs-text-ready" data-block-type="5"
             id="block-yui_3_17_2_1_1590023071736_19469">
            <div class="sqs-block-content" id="yui_3_17_2_1_1621340746945_121">
                <figure
                    class="sqs-block-image-figure image-block-outer-wrapper image-block-v2 design-layout-card combination-animation-none individual-animation-none individual-text-animation-none image-position-right image-linked sqs-text-ready"
                    data-scrolled="" data-test="image-block-v2-outer-wrapper" id="yui_3_17_2_1_1621340746945_120"
                    :class="[reverse && 'reverse']"
                >

                    <div class="intrinsic" id="yui_3_17_2_1_1621340746945_119">
                        <div class="image-inset content-fit"
                             id="yui_3_17_2_1_1621340746945_118">
                            <img
                                alt="Prayer.jpg" class="loaded"
                                :src="image"
                                style="left: 0px; top: 0.0286444px; width: 730px; height: 486.943px; position: absolute;">
                            <div class="image-overlay"></div>

                        </div>


                    </div>


                    <figcaption class="image-card-wrapper" data-width-ratio="">
                        <div class="image-card sqs-dynamic-text-container">


                            <div class="image-title-wrapper">
                                <div class="image-title sqs-dynamic-text"
                                ><p id="prayer-meeting">{{ heading }}</p>
                                </div>
                            </div>


                            <div class="image-subtitle-wrapper">
                                <div class="image-subtitle sqs-dynamic-text" data-width-percentage="31.7">
                                    <p>
                                        <strong id="sub-heading">
                                            {{ subHeading }}
                                            <br>
                                        </strong>
                                        <span id="body" v-html="body"></span>
                                    </p>
                                </div>
                            </div>


                            <div class="image-button-wrapper">
                                <div class="image-button sqs-dynamic-text" data-width-percentage="31.7"
                                >
                                    <div class="image-button-inner min-font-set">
                                        <a :href="link">{{ linkText }}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BidUur",
    props: {
        image: {
            default: "https://images.squarespace-cdn.com/content/v1/58eba8d3725e255182484880/1611853076022-C288NADWOB9PV5SOS93I/ke17ZwdGBToddI8pDm48kBl4YCNUOkrKYQ4p1H4jLnZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ua0RCRIEXQSuPz5RnEM2QpCGlrhZInH2mIdVOLiRr-BZmfDfC9hcJ_CV9QBm_ln3EA/Prayer.jpg?format=1000w",
            type: String
        },
        heading: {
            default: "Bid Uur",
            type: String
        },
        subHeading: {
            default: "Bid saam by die kerk of aanlyn!",
            type: String
        },
        linkText: {
            default: "Bid Uur",
            type: String
        },
        link: {
            default: "/",
            type: String
        },
        body: {
            default: ""
        },
        reverse: {
            default: false,
            type: Boolean
        }
    }
}
</script>

<style scoped>
#bid-uur {
    max-width: 71rem;
    display: flex;
    padding: 0 40px;
    margin: auto;
}

.sqs-block {
    position: relative;
    height: auto;
    padding-top: 17px;
    padding-bottom: 17px;
}

[class*=sqs-col] .sqs-block {
    padding-left: 17px;
    padding-right: 17px;
}

.sqs-block:not(.sqs-block-html):not(.sqs-block-markdown) {
    clear: both;
}

.sqs-layout:not(.sqs-editing) .sqs-row .sqs-block:not(.float):not(.sqs-feature-gated-wrapper):first-child {
    padding-top: 0;
}

figure {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 40px;
    margin-inline-end: 40px;
}

article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {
    display: block;
}

figure {
    margin: 1em 40px;
}

.sqs-block-image .sqs-block-image-figure {
    margin: 0;
}

.sqs-block-image .image-block-outer-wrapper.image-block-v2 {
    position: relative;
    display: flex;
    flex-direction: row-reverse;
}
.sqs-block-image .image-block-outer-wrapper.image-block-v2.reverse {
    flex-direction: row;
}


.sqs-block-image .image-block-outer-wrapper.image-block-v2 .intrinsic {
    position: relative;
    max-width: initial !important;
}

.sqs-block-image .design-layout-card:not(.sqs-narrow-width) > :first-child {
    width: calc(55% - 0%);
}

.sqs-block-image .image-block-outer-wrapper.image-block-v2 .image-inset {
    position: relative;
}

.sqs-block-image .design-layout-card .intrinsic img, .sqs-block-image .design-layout-overlap .intrinsic img, .sqs-block-image .design-layout-collage .intrinsic img, .sqs-block-image .design-layout-stack .intrinsic img {
    width: 100% !important;
    height: auto !important;
    position: static !important;
}

.sqs-block-image .image-block-outer-wrapper.image-block-v2 .intrinsic img {
    display: block;
    width: 100%;
}

.sqs-block-image .design-layout-card .sqs-image-content::after, .sqs-block-image .design-layout-card .image-overlay {
    background-color: rgba(0, 0, 0, .1);
}

.sqs-block-image .image-block-outer-wrapper.image-block-v2 .sqs-image-content::after, .sqs-block-image .image-block-outer-wrapper.image-block-v2 .image-overlay {
    content: "";
    display: block;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

/*-----------------------------------------------------*/
.sqs-block-image .design-layout-card:not(.sqs-narrow-width).image-position-right .image-card-wrapper {
    margin-right: 0%;
}

.image-block-card-content-position-center .sqs-block-image .design-layout-card .image-card-wrapper {
    -ms-flex-align: center;
    align-items: center;
}

.sqs-block-image .design-layout-card:not(.sqs-narrow-width) .image-card-wrapper {
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-justify-content: center;
    justify-content: center;
    min-height: 100%;
}

.sqs-block-image .design-layout-card:not(.sqs-narrow-width) .image-card-wrapper {
    position: relative;
    width: calc(45% - 0%);
}

.sqs-block-image .image-block-outer-wrapper.image-block-v2 .image-card-wrapper {
    z-index: 2;
    pointer-events: none;
}

.sqs-block-image .design-layout-card .image-card-wrapper {
    background-color: #f0f0f0;
}

article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {
    display: block;
}

figcaption {
    display: block;
}

/*-----------------------------------------------------*/
.sqs-block-image .design-layout-card:not(.sqs-narrow-width) .image-card {
    position: relative;
    width: 100%;
}

.sqs-block-image .image-block-outer-wrapper.image-block-v2 .image-card {
    pointer-events: auto;
}

.sqs-block-image .design-layout-card .image-card {
    padding: 10% 0;
}

/*-----------------------------------------------------*/
.image-block-card-dynamic-font-sizing .sqs-block-image .design-layout-card .image-title-wrapper {
    font-size: 8vw;
}

.image-block-card-text-alignment-left .sqs-block-image .design-layout-card .image-card > * {
    text-align: left !important;
}

.sqs-block-image .design-layout-card .image-title-wrapper, .sqs-block-image .design-layout-card .image-subtitle-wrapper, .sqs-block-image .design-layout-card .image-button-wrapper {
    padding: 0 10%;
}

/*-----------------------------------------------------*/
.sqs-dynamic-text {
    min-width: 100%;
    line-height: 1em;
}

/*-----------------------------------------------------*/
.image-block-card-dynamic-font-sizing .sqs-block-image .design-layout-card .image-title p {
    font-family: proxima-nova;
    font-weight: 900;
    font-style: normal;
    letter-spacing: 0em;
    text-transform: none;
    line-height: 1.1em;
}

.sqs-block-image .image-block-outer-wrapper.image-block-v2 .image-title p {
    display: inline;
    margin: 0;
    word-wrap: break-word;
    overflow-wrap: break-word;
}

.sqs-block-image .design-layout-card .image-title p {
    background-color: rgba(255, 255, 255, 0);
    color: #000;
    box-shadow: 0.5em 0 0 rgb(255 255 255 / 0%), -0.5em 0 0 rgb(255 255 255 / 0%);
}

.sqs-block-image .image-block-outer-wrapper.image-block-v2 p {
    font-size: inherit;
}

p:last-child {
    margin-bottom: 0;
}

p:first-child {
    margin-top: 0;
}

/*-----------------------------------------------------*/
.image-block-card-dynamic-font-sizing .sqs-block-image .design-layout-card .image-subtitle-wrapper {
    font-size: 4vw;
}

.image-block-card-text-alignment-left .sqs-block-image .design-layout-card .image-card > * {
    text-align: left !important;
}

.sqs-block-image .design-layout-card .image-title-wrapper, .sqs-block-image .design-layout-card .image-subtitle-wrapper, .sqs-block-image .design-layout-card .image-button-wrapper {
    padding: 0 10%;
}

/*-----------------------------------------------------*/
.sqs-block-image .design-layout-card .image-title-wrapper + .image-subtitle-wrapper .image-subtitle {
    margin-top: 5%;
}

.sqs-dynamic-text {
    min-width: 100%;
    line-height: 1em;
}

/*-----------------------------------------------------*/
.sqs-block-image .image-block-outer-wrapper.image-block-v2 .image-subtitle p:last-child {
    margin-bottom: 0;
}

.sqs-block-image .image-block-outer-wrapper.image-block-v2 .image-subtitle p:first-child {
    margin-top: 0;
}

.image-block-card-dynamic-font-sizing .sqs-block-image .design-layout-card .image-subtitle p {
    font-weight: 300;
    font-style: normal;
    letter-spacing: 0em;
    text-transform: none;
    line-height: 1.6em;
}

/*-----------------------------------------------------*/
.sqs-block-image .image-block-outer-wrapper.design-layout-card .image-button-wrapper {
    margin-top: 5%;
    font-size: 2.8vw;
}

.image-block-card-text-alignment-left .sqs-block-image .design-layout-card .image-card > * {
    text-align: left !important;
}

/*-----------------------------------------------------*/
.sqs-dynamic-text {
    min-width: 100%;
    line-height: 1em;
}

/*-----------------------------------------------------*/
.min-font-set, .min-font-set ~ * {
    font-size: 13px !important;
}

/*-----------------------------------------------------*/
body.image-block-card-dynamic-font-sizing .sqs-block-image .image-block-outer-wrapper.design-layout-card a {
    font-size: inherit !important;
}

.sqs-block-image .image-block-outer-wrapper.design-layout-card .image-button a {
    display: inline-block;
    padding: .6em 1.5em;
    border: 2px solid #f93a24;
    background-color: rgba(0, 0, 0, 0);
    font-size: 14px;
    font-weight: 600;
    font-style: normal;
    letter-spacing: .1em;
    line-height: .9em;
    text-transform: uppercase;
    color: #f93a24;
    border-radius: 0;
    transition: all 0.3s ease;
}

.sqs-block-image .image-block-outer-wrapper.design-layout-card .image-button a:hover {
    background-color: #f93a24;
    color: #ffffff;
}

.sqs-block-image .image-block-outer-wrapper.image-block-v2 .image-card a, .sqs-block-image .image-block-outer-wrapper.image-block-v2 .image-card a:hover {
    text-decoration: none;
}

.sqs-block-image .image-block-outer-wrapper.image-block-v2 .image-card a {
    display: inline;
}

/*-----------------------------------------------------*/
.sqs-block-image .design-layout-card:not(.sqs-narrow-width):after {
    content: "";
    display: block;
    clear: both;
}

#prayer-meeting {
    font-size: 32px;
    font-weight: bold;
}

.image-title .sqs-dynamic-text {
    line-height: unset;
}

.sqs-block-image .design-layout-card .image-title-wrapper[data-v-6e8967a0], .sqs-block-image .design-layout-card .image-subtitle-wrapper[data-v-6e8967a0], .sqs-block-image .design-layout-card .image-button-wrapper[data-v-6e8967a0] {
    padding: 0 30px;
}

.sqs-block-image .image-block-outer-wrapper.image-block-v2 .image-title p[data-v-6e8967a0], .sqs-block-image .image-block-outer-wrapper.image-block-v2 .image-subtitle p[data-v-6e8967a0] {
    white-space: unset;
}

#sub-heading {
    margin-bottom: 8px;
    display: block;
}
#body {
    line-height: 20px;
}
/*-----------------------------------------------------*/
</style>
