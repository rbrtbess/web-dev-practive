function FunFact() {
    var facts = [' was created a thousand years ago', ' gets its name from its shape', ' is the simplest pasta shape to produce in an industrial scale',' used to be way longer'];

    var myFact = facts[Math.round(Math.random()*
        (facts.length - 1))];
    
    document.getElementById('facts').innerHTML = 'Spaghetti ' + myFact + '.';
}