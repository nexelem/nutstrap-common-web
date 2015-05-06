describe "Extensions", () ->
    beforeEach(module('myApp.common'))

    it 'unique array', () ->
        expect([1,1,2].unique()).toEqual([1,2])
        expect(["a","a","b"].unique()).toEqual(["a","b"])

    it 'supplant string', () ->
        expect("I'm {age} years old!".supplant({ age: 29 })).toEqual("I'm 29 years old!")
