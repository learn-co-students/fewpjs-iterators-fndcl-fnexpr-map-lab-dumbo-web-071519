const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const strArr = tutorials.map(phrase => {
    const wordsArr = [];
    const words = phrase.split(' ');
    words.forEach((x) => {
      let test = x.charAt(0).toUpperCase() + x.slice(1)
      wordsArr.push(test)
    })
    console.log(wordsArr.join(" "))
    return wordsArr.join(" ")
  })
  return strArr
}
titleCased()
console.log(titleCased())