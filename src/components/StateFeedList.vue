<template>
    <div class="feed-container">
        <h1>Nyheter</h1>
        <div class="grid-feed">
            <feed v-for="feed in feeds" v-bind:feed="feed" v-bind:key="feed.Id">
            </feed>
        </div>
    </div>
</template>
<script>
    
import { mapGetters, mapActions } from 'vuex'
import Feed from './Feed'
import Isotope from 'isotope-layout'
import ImagesLoaded from 'imagesloaded'

export default {
    components: {Feed},
    data () {
        return {
            errors: [],
            grid: {}
        }
    },
    created () {
        this.$store.dispatch('fetchFeeds').then(() => {
            this.grid = new Isotope( '.grid-feed', {
                itemSelector: '.grid-feed-item',
                    masonry: {
                        transitionDuration: '0.8s',
                        percentPosition: true,
                        gutter: 10
                    }
            });
            ImagesLoaded( this.grid ).on( 'progress', function() {
                console.log("images loaded");
                iso.layout();
            });
        });
    },
    computed: mapGetters({
        feeds: 'getFeeds'
    }),
    methods: mapActions([
        'fetchFeeds'
    ])
}
</script>

<style>
    .feed-container {
        font-size: 1em;
        max-width: 1300px;
        margin-left: auto;
        margin-right: auto;
    }
</style