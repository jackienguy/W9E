// JS Object
var twitterTweets = [ 
    {
    tweet: "Not sure if I actually like movies or just like looking at something whilie I eat popcorn",
    username: "Noodles",
    created_at: "01-12-2016",
    age: 16
    },
    {
    tweet: "Just choked on an apple seed. This is what I get for trying to eat healthy.",
    username: "Rodney Lacroix",
    created_at: "04-12-2016",
    age: 26
    },
    {
    tweet:"Debugging is like an onion. There are multiple layers to it, and the more you peel them back, the more likely you're going to start crying at inappropriate times",
    username: "I Am Developer", 
    created_at: "02-16-2019",
    age: 22
    },
    {
    tweet: "The closest I have been to a diet this year is erasing food searches from my browser history",
    username: "pauly casillas",
    created_at: "04-21-2014",
    age: 17
    },
    {
    tweet: "My bucket list is basically a list of places I want to eat",
    username: "Mrs.Hook",
    created_at: "09-24-2015",
    age: 23
    },
    {
    tweet: "Winter is just a 3 month long eating contest",
    username: "Ivsy",
    created_at: "12-26-2016",
    age: 28
    },
    {
    tweet:"The best debugger ever made is a good night's sleep",
    username: "Sasha Laundy",
    created_at: "12-02-2017", 
    age: 22
    },
    {
    tweet: "I can't turn water into wine, but I can turn ice cream into breakfast",
    username: "Louis Peitzman",
    created_at: "06-25-2012",
    age: 31
    },
    {
    tweet: "Why scoop ice cream into a bowl when you can just scoop it straight into you mouth",
    username: "Daniel Halawi",
    created_at: "05-06-2016",
    age: 26
    },
    {
    tweet: "Dogs are cooler than cats",
    username: "Jackie",
    created_at: "-7-09-2021",
    age: 99
    }
]

function adultAge (tweets) {
var age = tweets.age;
if (age >= 18) {
    return true;
} else {
    return false;
}
}

console.log(twitterTweets.filter(adultAge));
