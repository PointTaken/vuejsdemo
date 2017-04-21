<template>
    <div class="grid-feed-item" v-bind:class="feed.FeedTheme">
        <div id="klikkbarDel">
            <div class="crop">               
                <img class="hovedbilde" v-bind:src="feed.FeedImage"/>
            </div>
            <div class="nyhetstittel"> 
                <h3>{{feed.Title}}</h3>
            </div>
            <div class="nyhetsingress" v-html="feed.FeedBody"></div>
            <div class="nyhetsfooter">
                <span class="nyhetsdato feedDato">{{feed.Created}}</span>
                <span class="nyhetsdato fa fa-clock-o">&nbsp;</span>
            </div>
        </div>
        <div id="SoMeDel">
            <i class="fa fa-comment" />&nbsp;<span >{{feed.Comments.length}}</span>
            <i class="fa fa-star" v-on:click="addLike()" />&nbsp;
            <span>{{feed.Likes.length}}</span>
        </div>
    </div>
</template>
<script>
    export default {
        name: "feed",
        props: ["feed"]
    }
</script>
<style scoped>
    * {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        font-family: "Segoe UI Semilight","Segoe UI","Segoe",Tahoma,Helvetica,Arial,sans-serif
    }
    h1,h2,h3,p {
        margin: 0;
    }

    input#btnOpprett {
        float: right;
    }

    #btnOpprett:hover {
        cursor: pointer;
        background-color: #942D22;
    }

    .is-loading {
        background-image: url(https://pointtaken.sharepoint.com/PublishingImages/ring.gif);
        height: 120px;
    }

    .filter-button-group > input {
        min-width: 6em;
        padding: 7px 10px;
        margin: 0 1em 1em 0;
        vertical-align: middle;
        text-align: center;
        font-size: 1.123em;
        height: 35px;
        cursor: pointer;
    }

    .grid-feed:after {
        content: '';
        display: block;
        clear: both;
    }

    .grid-feed-item-sizer,
    .grid-feed-item {
        width: 24%;
    }

    .grid-feed-item {
        float: left;
        position: relative;
        background-color: #fff;
        margin-bottom: .5rem;
        min-height: 11rem;
        cursor: pointer;
    }

    .grid-feed-item a:hover {
        color: #444;
    }

    .grid-feed-item:hover,
    .grid-feed-item-fremhevet:hover {
        background-color: #a0cbed;
    }

    .grid-feed-item-fremhevet {
        width: 48.5%;
        float: left;
        position: relative;
        background-color: #fff;
        margin-bottom: .5rem;
        min-height: 200px;
        cursor: pointer;
    }

    .nyhetstittel h3 {
        color: #fff;
        font-size: 1.75em;
        padding: .8rem;
        font-weight: 400;
    }

    .nyhetsingress {
        font-size: 1.25em;
        color: #fff;
        padding: .8rem;
        max-height: 150px;    
    }

    #lukkFeed {
        font-size: 1.8em;
        float: right;
        padding: 0 5px 0 0;
        top: 0;
        position: absolute;
        right: 3%;
    }

    .nyhetsfooter {
        position: absolute;
        padding: .8rem;    
        width: 100%;
        bottom: -4px;
    }

    .temaDel {
        display: none;
    }

    .nyhetsdato {
        float: right;
    }

    #large .nyhetsdato {
        float: left;
        position: absolute;
        top: 0;
        margin-top: .5rem;
    }

    .hovedbilde {
        width: 100%;
        min-height: 200px;
        max-heigth: 625px;
    }

    .editContainer {
        float: right;
        min-height: 10px;
        margin-top: 10px;
        margin-bottom: 20px;
    }

    #large {
        display: none;
        position: fixed;
        z-index: 10000;
        top: 0;
        left: 16%;
        height: 90%;
        width: 60%;
        font-size: 16px;
        height: 95%;
        margin-top: 2%;
        padding: 40px;
        margin-bottom: 15%;
        overflow-x: hidden;
        overflow-y: scroll;
        background-color: #f6f6f6;
    }

    #large img {
        max-width: 500px;
        height: auto;
    }

    #large div {
        color: #444;
    }

    .centerFeedImage {
        text-align: center;
    }

    #background {
        display: none;
        position: fixed;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 1;
        background-color: rgba(10,0,0,0.9);
    }

    .commentLogo,
    .likeLogo {
        width: 25px;
    }

    #feedLikesImg {
        width: 25px;
        border-radius: 25px;
    }

    #SoMeDel {
        padding: 0 0 10px 15px;
    }

    #feedKommenrarerOverskrift {
        display: none;
    }

    #feedTittel h3 {
        font-size: 1.75em;
        font-weight: 400;
        color: #444;
    }

    #feedBilde {
        border-radius: 30px;
        float: left;
        max-height: 50px;
    }

    #feedKommentar {
        margin: 5px 0 20px 60px;
        font-size: .8em;
    }

    #feedForfatter {
        margin: 0 0 0 60px;
        font-size: .8em;
        font-weight: 700;
    }

    #feedOpprettet {
        margin: 0 0 0 60px;
        font-size: .6em;
    }

    .detailedFeed {
        margin-bottom: 35px;
    }

    .feed-likes {
        display: flex;
        flex-direction: row;
        margin-top: 1.5rem;

    }
        .feed-likes i {
            padding: 4px
        }
        

    /*Kommentarboks*/
    #nyKommentar textarea {
        margin: 0;
        width: 95%;
    }

    #nyKommentar input {
        background-color: #53a93f;
        margin: 1em 0;
        border: 0;
        border-radius: 5px;
        opacity: .8;
        color: #fff;
        padding: .5rem;
    }

    #nyKommentar input:hover {
        background-color: #a0cbed;
        cursor: pointer;
    }

    .filtersContainer {
        margin-bottom: 10px;
    }

    input[type=button],
    input[type=reset],
    input[type=submit],
    button {
        font-size: 1em;
        border: 0;
        font-size: 1.325em;
        color: #fff;
        background-color: #7f8c8d;
    }

    .newstheme-1,
    input.newstheme-1,
    #klikkbarDel.newstheme-1,
    #SoMeDel.newstheme-1 {
        color: #fff;
        background-color: #bdc3c7;
    }

    .newstheme-2,
    input.newstheme-2,
    #klikkbarDel.newstheme-2,
    #SoMeDel.newstheme-2 {
        color: #fff;
        background-color: #27ae60;
    }

    .newstheme-3,
    input.newstheme-3,
    #klikkbarDel.newstheme-3,
    #SoMeDel.newstheme-3 {
        color: #fff;
        background-color: #2980b9;
    }

    .newstheme-4,
    input.newstheme-4,
    #klikkbarDel.newstheme-4,
    #SoMeDel.newstheme-4 {
        color: #fff;
        background-color: #2c3e50;
    }

    .newstheme-5,
    input.newstheme-5,
    #klikkbarDel.newstheme-5,
    #SoMeDel.newstheme-5 {
        color: #fff;
        background-color: #8e44ad;
    }

    .newstheme-6,
    input.newstheme-6,
    #klikkbarDel.newstheme-6,
    #SoMeDel.newstheme-6 {
        color: #fff;
        background-color: #c0392b;
    }

    .newstheme-7,
    input.newstheme-7,
    #klikkbarDel.newstheme-7,
    #SoMeDel.newstheme-7 {
        color: #fff;
        background-color: #f39c12;
    }

    @media screen and (max-width: 740px) {
        .grid-feed-item-fremhevet,
        .grid-feed-item {
            width: 100%;
        }

        .grid-feed-item {
            border-bottom: 1px solid silver;
        }

        .crop .hovedbilde img {
            height: auto;
        }
    }

    @media screen and (max-width: 500px) {
        .grid-feed-item-sizer,
        .grid-feed-item {
            width: 100%;
        }

        .grid-feed-item-fremhevet {
            width: 100%;
        }

        #large {
            position: fixed;
            background: #fff;
            padding: 10px;
            z-index: 10;
            height: 100%;
            width: 100%;
            left: 0;
            margin-top: 0;
            padding-top: 35px;
            overflow-x: hidden;
        }

        #large img {
            max-width: 300px;
            height: auto;
        }

        #background {
            display: none;
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            background: #000;
            z-index: 1;
        }

        #nyKommentar textarea {
            width: 95%;
        }
    }

    @media screen and (max-width: 360px) {
        .grid-feed-item-fremhevet,
        .grid-feed-item {
            width: 100%;
        }
    }
</style>