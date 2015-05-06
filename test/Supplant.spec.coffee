describe 'String Supplant', () ->

    it 'can supplant various strings', () ->
        expect(String.prototype.supplant).toBeDefined()
        expect("I'm {age} years old!".supplant({ age: 29 })).toEqual("I'm 29 years old!")
        expect("The {a} says {n}, {n}, {n}!".supplant({ a: 'cow', n: 'moo' })).toEqual("The cow says moo, moo, moo!")
