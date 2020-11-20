var items = [1, 2, 3, 4, 5];

var res=items.filter(function(ele){
           return ele%2==0;
     }).map(function(ele){
            return ele+2;
         }).reduce(function(acc,ele){
                     return (acc*acc)+(ele*ele)
             });
             console.log(res)

//-----------------OR------------------------
     // var res=items.filter(function(ele){
//        return ele%2==0;
// })
// console.log(res)
// var added=res.map(function(ele){
//     return ele+2;
// })
// console.log(added)
// var square=added.reduce(function(acc,ele){
//          return (acc*acc)+(ele*ele)
// })
// console.log(square)