const { randomNotRepetitive } = require('./random');
const { pagesGenerator } = require('./pagesGenerator');
export const split = (page: number = 1) : Array<string>  => {

  const { listWords } = require('../database/words');1
  
  return pagesGenerator(listWords, 5, page);
}

