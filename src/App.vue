<template>

  <!-- when using a component in a template Vue.js expects the DOM element to be
  lowercased and dasherized. e.g. FeedList -> feed-list -->

  <!-- <feed-list></feed-list> -->
  <state-feed-list></state-feed-list>
</template>

<script>
import FeedList from './components/FeedList'
import StateFeedList from './components/StateFeedList'

export default {
    components: {
      // With ES6 we can use the Object Literal Shorthand Syntax to save us some
      // keystrokes
      StateFeedList
    }  
}
</script>