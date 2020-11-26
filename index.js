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

//Create a new array with the new names of each tutorial that is in the proper title case formatting.

const titleCased = () => {
  //each sentence on the tutorials array would be split per words
  return tutorials.map(sentence => {
    const arrayOfSentences = sentence.split(' ');
    //per word, it's disect per letter..
    //then take 1st letter of each word, upper case that and then add it back to the rest of the word
    const words = arrayOfSentences.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    //joining back each words into a sentence
    const newSentence = words.join(' ')
    return newSentence
  })
}
