<template>
    <div class="col-lg-4 col-md-6 mb-4 pt-5">
        <div class="card shadow-sm border-0">
            <div class="card-body">
                <div class="user-picture">
                    <img :src="image" class="shadow-sm rounded-circle" height="130" width="130" />
                </div>
                <div class="user-content">
                    <h5 class="text-capitalize user-name">{{ name }}</h5>
                    <p class=" text-capitalize text-muted small blockquote-footer">{{ position }}</p>
                    <p class="small text-muted mb-0">
                        {{ description }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProfileCard",
    props: {
        image: {
            default: "https://images.unsplash.com/photo-1582003457856-20898dd7e1ea?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=130",
            type: String
        },
        name: {
            default: "Name here",
            type: String
        },
        position: {
            default: "title here",
            type: String
        },
        description: {
            default: "title here",
            type: String
        }
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
