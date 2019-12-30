import React, {useEffect} from 'react';
import * as RSSParser from 'rss-parser';
import './css/rss.scss'

var rssList = [];

// Note: some RSS feeds can't be loaded in the browser due to CORS security.
// To get around this, you can use a proxy.
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

function RSS(props) {
    useEffect(() => {
        RSSMain(props.feed, props.maxitems)
    })

    function RSSMain(feed, maxitems) { 
        new RSSParser().parseURL(CORS_PROXY + feed, function(err, feed) {
            if (err) throw err;
    
            rssList = feed.items.splice(0, maxitems)

            let list = rssList.map((b) => buildTemplate(b)).join('');

            function buildTemplate(b) {
                return `
                    <article class="BlogItem">
                        <a target="_blank" href="${b.link}">
                            <h3 class="BlogTitle">${b.title}</h3>
                        </a>
                        <p class="BlogContent">
                            <a target="_blank" href="${b.link}">
                                ${b.content}
                            </a>
                        </p>
                    </article>
                `;
            }
            document.querySelector("." + props.name).innerHTML = list
        })
    }

    return (
        <div className={"RSSFeed GridContainer " + props.name}></div>
    )
}

export default RSS;