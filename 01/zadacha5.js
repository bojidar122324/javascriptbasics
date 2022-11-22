function solve ([n]) {
    let row1=" ";
    let row2=" ";
    for(let j = 0; j < n; j++){
        row1 = row1 + "*";

        if ( j==0 || j==(n-1)){
            row2 = row2 + "*";
        }
        else {
             row2 = row2 + " ";
        }
    }
 for(let i = 0; i < n; i++){
    if ( i==0 || i==(n-1)){
        console.log(row1);
    }
    else {
        console.log(row2);
    }
  }
}


  solve([3]);
solve([4]);
solve([5]);