#!/usr/bin/nodejs

function new_html() {
}

var cheerio = require('cheerio');

var argv = require('minimist')(process.argv.slice(2));
if (!argv.f) {
  console.log("Give me a filename, bozo");
  process.exit(1);
}

console.log('<body>');
fs = require('fs')
fs.readFile(argv.f, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  $ = cheerio.load(data);// //
    $('body').find('div, span').filter(
        function(i,elem) {
          return $(this).attr('class') == "p" || $(this).attr('class') == "story-title";
        }
      ).each(
        function(i,elem) {
          console.log($(this).html());
        }
      )
      console.log('</body>');
  }
);
