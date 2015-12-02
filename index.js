var fs = require('fs');
var cheerio = require('cheerio');
var request = require('request');
var commander = require('commander');

commander
    .version('0.0.1')
    .usage('[options] <url>')
    .option('--album <url>', 'full url of an imgur album', scrape)
    .parse(process.argv);

function scrape(url) {
    console.log(url);
    request(url, function(err, response, body) {
        if (err) {
            throw err;
        }
        $ = cheerio.load(body)
        $('.post-image img').each(function(index, value) {
            var image = $(this).attr('src');
            image = addProtocol(image);
            download(image, index);
        });
    });
}

function addProtocol(url) {
    if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
        return 'https:' + url;
    }
}

function download(url, index){
    request.get(url)
        .on('response', function(response) {}).pipe(fs.createWriteStream(index + '_image.jpg'))
}

