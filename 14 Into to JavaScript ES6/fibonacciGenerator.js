function fibonacciGenerator(n){
    var fg = [0,1];
    for (var i=2;i<n;i++){
        fg.push(fg[i-2]+fg[i-1]);
    }
    if (n<=1) {return [0];}
    else if (n<=2) {return [0,1];}
    else {return fg;}
}

fibonacciGenerator(5);