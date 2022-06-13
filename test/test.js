const assert = require('assert');
const { expect } = require('chai');
const pureFunctions = require('../pureFunctions.js')

describe('the pigLatinVowel function', () => {

    it('should return pigLatin if the first letter is a vowel', () => {
        let result = pureFunctions.pigLatinVowel("eat")
        expect(result).to.equal("eat-yay")
    });

    it('should return null the first letter is a consonant', () => {
        let result = pureFunctions.pigLatinVowel("love")
        expect(result).to.equal(undefined)

    })

})

describe('the pigLatinConsonant function', () => {

    it('should  correctly translate clustered consonant words', () => {
        let result = pureFunctions.pigLatinConsonant("bread")
        expect(result).to.equal("ead-bray")
    });

    it('should tranlate simple consonant words', () => {
        let result = pureFunctions.pigLatinConsonant("banana")
        expect(result).to.equal("anana-bay")

    })

})

describe('the allPigLatin function', () => {

    it('should translate a CLUSTER string that beigns with a consonant', () => {
        let result = pureFunctions.allPigLatin("smile")
        expect(result).to.equal("ile-smay")
    });

    it('should translate a string that beigns with a  vowel or consonant', () => {
        let result = pureFunctions.allPigLatin("everything")
        expect(result).to.equal("everything-yay")

    })

})


describe('the pigSentence function', () => {

    it('should translate a string  and add the dash in the correct position that beigns with a  vowel or consonant', () => {
        let result = pureFunctions.pigSentence("moist egg dopest island")
        expect(result).to.equal("oist-may egg-yay opest-day island-yay")
    });

    it('should translate a string and set it to lower case that beigns with a  vowel or consonant', () => {
        let result = pureFunctions.pigSentence("Are you still reading")
        expect(result).to.equal("are-yay ou-yay ill-stay eading-ray")

    })

})

describe('the reversePigWordVowel function', () => {

    it('should translate a wordto english that beigns with a  vowel', () => {
        let result = pureFunctions.reversePigWordVowel("omelet-yay")
        expect(result).to.equal("omelet")
    });

    it('should return a translated word without the dash if the word beigns with a consonant', () => {
        let result = pureFunctions.reversePigWordVowel("everyday-yay")
        expect(result).to.equal("everyday")

    })

})


