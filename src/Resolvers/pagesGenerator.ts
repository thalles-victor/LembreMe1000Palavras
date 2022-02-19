const { listWords } = require('../database/words');

export const pagesGenerator = (list: Array<string>, numberOfElements: number, page: number) : Array<string> => {
  var listPages: Array<string> = [];

  if(page <= 0){
     alert("Page is 0 or smaller, I going define page as 1");
     page=1
  }

  for(var i=1; i< numberOfElements + 1; i++){
    listPages.push( list[i * page] )
  }

  return listPages;

}