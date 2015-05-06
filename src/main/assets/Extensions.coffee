
###
 # Supplant the string with a given set of keys e.g. "I'm {age} years old!".supplant({ age: 29 }) -> "I'm 29 years old!
 #
 # Taken directly from Douglas Crockford -> http://javascript.crockford.com/remedial.html
###
String::supplant = (o) ->
    @replace(/{([^{}]*)}/g, (a, b) ->
        r = o[b];
        if typeof r is 'string' or typeof r is 'number' then r else a
    );


###
    Finds unique  array options
###
Array::unique = ->
    output = {}
    output[@[key]] = @[key] for key in [0...@length]
    value for key, value of output
