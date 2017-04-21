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
import axios from 'axios'
import Feed from './Feed'
import Isotope from 'isotope-layout'
import ImagesLoaded from 'imagesloaded'

export default {
    components: {Feed},
    data () {
        return {
            feeds: [],
            errors: [],
            grid: {}
        }
    },
    created() {
        axios.get('http://localhost:3000/feeds')
            .then(response => {
                // JSON responses are automatically parsed.
                this.feeds = response.data;                    
            })
            .catch(e => {
                this.errors.push(e)
        });
    },
    mounted () {
        this.grid = new Isotope( '.grid-feed', {
                itemSelector: '.grid-feed-item',
                    masonry: {
                        transitionDuration: '0.8s',
                        percentPosition: true,
                        gutter: 10
                    }
                });
    }
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