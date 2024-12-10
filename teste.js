var teste = [10,10,20];
var loc = 40;
var tf = false;

for(var i = 0 ; i < teste.length ; i++) {
    for(var j = i+1 ; j < teste.length ; j++) {
      if (teste[i] + teste[j] == loc) {
        tf = true;
        break
      }
    }
}

console.log(tf);