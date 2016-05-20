var express = require('express');
var router = express.Router();
var Twit = require('twit');

var T = new Twit({
  consumer_key: 'gWKjJ2OnCNmXLKwOqfyfaQTyb',
  consumer_secret: 'hOMkXlLCLNcA3BgBLetgyATojg1nqeZEzHoUqcxUxwwcIIY48f',
  access_token: '714465526848888832-MHW34PMBqmf8URg2vPX0j29APOujjOx',
  access_token_secret: 'BPbcyhfteE0wGGJ5WwNErhLaXCJGB2vz8lhNA5ypwCbRp'
});

function retweetRecent() {
  T.get('search/tweets', {
      q: "#deepthought OR #dontpanic",
      result_type: "recent"
    },
    function(err, data, response) {
      if (!err) {
        var retweetId = data.statuses[0].id_str;
        T.post('statuses/retweet/' + retweetId, {}, function(err, response) {
          if (response) {
            console.log('Retweeted Tweet ID: ' + retweetId);
          }
          if (err) {
            console.log('Retweet Error: ', err);
          }
        });
      } else {
        console.log('Search Error: ', err);
      }
    });
}

function getTheirStatus() {
  var stream = T.stream('statuses/filter', { track: ['learning', 'keys', 'fun'] })

  stream.on('tweet', function (tweet) {
    console.log(tweet);
  })
}

function getOurStatusStream() {
  var stream = T.stream('user')
  stream.on('tweet', function (tweet) {
    console.log(tweet);
  });
}

// function getOurStatus() {
//   var stream = T.stream('user')
//   // var statuses = T.get('statuses/user_timeline')
//   // console.log("first status", statuses);
//   // console.log("first stream", statuses);
//   stream.on('tweet', function (tweet) {
//     return tweet;
//   });
// }

function geet(){
  T.get('search/tweets', { q: 'fun', screen_name: 'tweetthawt', count: 100 }, function(err, data, response) {
  console.log(data)
})
}

function postStatus(input){
  T.post('statuses/update', { status: input }, function(err, data, response) {
  console.log(data)
})
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Twitter-Placeholder'});
});

router.get('/twitter', function(req, res, next) {
  res.render('twitter', { title: 'Twitter-Placeholder'});
});

router.post('/twitter', function(req, res, next) {
    postStatus(req.body.tweetInput);
    console.log(req.body.tweetInput);
    res.render('twitter', { title: req.body.tweetInput});
});


module.exports = router;
