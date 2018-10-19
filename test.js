var imageToTextDecoder = require('image-to-text');

var file = {
    name: 'ucard.jpg',
    path: './assets/images/'
  };

 var key = 'V7H4UL0vqZrJJxm9OOOyCQ';
 imageToTextDecoder.setAuth(key);
 imageToTextDecoder.getKeywordsForImage(file).then(function(keywords){
    console.log(keywords);
 },function(error){
    console.log(error);
 });
 