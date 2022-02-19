export const randomNotRepetitive = (min: number, max: number, size: number) => {
  var listNumbers : Array<number> = [];

  var running = true
  while ( running ) {
    var value = Math.floor( Math.random() * ( max - min +1 ) + min )
    if(value in listNumbers){
      continue
    }
    listNumbers.push(value);

    if(listNumbers.length >= size) {
      running = false
    }
  }

  return listNumbers
}