var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };
console.log(Object.entries(obj1).toString()===Object.entries(obj2).toString());

var obj3 = { name: "Person 1", age:5, pin:2525};
var obj4 = { age:5, name: "Person 1" };
console.log(Object.entries(obj3).toString()===Object.entries(obj4).toString());





var xhr = new XMLHttpRequest()
xhr.open("GET", "https://restcountries.com/v2/all")
xhr.onload = function(){
    if(xhr.status>=200 && xhr.status<300)
    {
        var t=JSON.parse(this.response)
        for(let i =0 ; i<t.length ;i++)
        {
            console.log(`Flag: ${t[i].flag}`)
        };
    }
}
xhr.send()












var xhr = new XMLHttpRequest()
xhr.open("GET", "https://restcountries.com/v2/all")
xhr.onload = function(){
    if(xhr.status>=200 && xhr.status<300)
    {
        var t=JSON.parse(this.response)
        for(let i =0 ; i<t.length ;i++)
        {
            console.log(`Name: ${t[i].name}, Region: ${t[i].region}, Sub Region :${t[i].subregion}, Population : ${t[i].population}`)
        };
    
    }
}
xhr.send()
