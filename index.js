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
  const newArr = tutorials.map(function(str){
    const wordArr = [];
    const words = str.split(' ');
    words.forEach(function(word){
      
      const newWord = word[0].toUpperCase() + word.substr(1);
      wordArr.push(newWord);
    });
    
    return wordArr.join(' ')

  })
  return newArr;
}
titleCased();
