var rp = require('request-promise');
var fs = require('fs')
var path = require('path')
var theFile = path.join(__dirname, "/popular-articles.json")


let redditPosts = {
    uri: 'https://reddit.com/r/popular.json',
    json: true
}

console.log(redditPosts)
rp(redditPosts)
    .then((items) => {
        let redditArray = [];
        items.data.children.forEach( item => {
            let redditObj = {
                title: item.data.title,
                url: item.data.url,
                author: item.data.author
            }
            console.log(redditObj)
            redditArray.push(redditObj)
        })
        return JSON.stringify(redditArray)
    })
    .then((data) => {
        fs.writeFile(theFile, data, (err) => {
            if (err) throw err;
            console.log("yeet")
        })
    })
    .catch(function (err) {
        console.log(err)
    });

    