// 20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything
// else you’d like. Write a program that creates a list containing these items.
let languages:string[]=['Javascript','typescript','python','react'];
let print =():void =>{
    languages.forEach((e,i) =>{
        console.log(`${i+1}) ${e}`);
    })
}
print();