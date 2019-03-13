function reverseLetter(str) {

return str.split('').reverse().join('').replace(/[^A-Za-z]/gi, '')

}
