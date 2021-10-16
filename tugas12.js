function panggilAku() {
  var buah = ['Pisang', 'Jeruk', 'Apel', 'Mangga'];
  console.log(buah);

  var buah2 = buah.pop()
  console.log(buah);
  buah.shift()
  return buah
}

console.log(panggilAku());
