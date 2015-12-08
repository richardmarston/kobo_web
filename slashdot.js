#!/usr/bin/nodejs

function new_html() {
}

var cheerio = require('cheerio');

var argv = require('minimist')(process.argv.slice(2));
if (!argv.f) {
  console.log("Give me a filename, bozo");
  process.exit(1);
}

fs = require('fs')
fs.readFile(argv.f, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  $ = cheerio.load(data);
    $('body').find('div').filter(
      function(i,elem) {
        return $(this).attr('class') == "body";
      }
    )
    .each(
      function(i,elem) {
        console.log($(this).html());
      }
    )
  }
);
