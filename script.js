var qa = [];
var latestPrice = 0;
function getQuestion(topic, price){
  price = price.substring(1);
  price = parseInt(price);
  console.log(price);
  if(topic == "1"){ // Food
    qa[0]= {q:'This fuit is an exotic that is grown in tropical regions and happens to share part of its name with a famous pirate from the Carribeans', a:"JackFruit"}; //question & answer for $100 Food
    qa[1]= {q:'This dish is a sausy dish that has a cheese filing and is popular among Italians.And happens to have the name of my favorite Power Ranger in in the name', a:'Ravioli'}; //question & answer for $200 Food 
    qa[2]= {q:'This popping snake is easy to make and a popular topping would be butter', a:'popcorn'}; //question & answer for $300 Food
    qa[3]= {q:'This nut has a hard shell but it is yummy on the inside. It even has its own ice cream flavor', a:'pistachio'}; //question & answer for $400 Food
    qa[4]= {q:'The desert is a sweet and creamy and fatty food and often has many flavors. It is often eaten cold.', a:'ice cream'}; //question & answer for $500 Food
  }
  if(topic == "2"){ // Instruments
    qa[0]= {q:'This instument has a triangle like base and plays soothing sounds. It is often bigger than me.', a:'Harp'}; //question & answer for $100 Instruments
    qa[1]= {q:'This French Harp is an popular instument upon many different music genres.You slide your mouth across it to make different tones and sounds.', a:'Harmonica'}; //question & answer for $200 Instruments
    qa[2]= {q:'This instrument jingles with metal creating a loud sound but still smallas my hand.', a:'Tambourine'}; //question & answer for $300 Instruments
    qa[3]= {q:'This small guitar is popular on beaches and is native to the Portugese.' , a:'Ukulele'}; //question & answer for $400 Instruments
    qa[4]= {q:'This instrument is disturbing at first but when you learn it school, it will be very relaxing.', a:'Recorder'}; //question & answer for $500 Instruments
  }
  if(topic == "3"){ // Brands
    qa[0]= {q:'This company would zoom right past you.It would blow dust on your face from the seats.', a:'Nascar'}; //question & answer for $100 Brands
    qa[1]= {q:'This company is the biggest multitech company in the world.It is a food that you and I never eat.', a:'Apple'}; //question & answer for $200 Brands
    qa[2]= {q:'This retail company operates a chain of membership-only wareshops clubs. The name has part of much it costs', a:'Costco'}; //question & answer for $300 Brands
    qa[3]= {q:'This company will GLUE you too the ground. While its mascot has nothing to do with glue.', a:'Elmers'}; //question & answer for $400 Brands
    qa[4]= {q:'This company is an information technology company and has the same intials as Hurshil Padi. ', a:'Hwelett - Packard '}; //question & answer for $500 Brands
  }
  if(topic == "4"){ //Holidays
    qa[0]= {q:'This holiday is a day to make greeting cards and is named after a Romain Saint that people used worship ', a:'Valentines Day'}; //question & answer for $100 Holidays
    qa[1]= {q:'This holiday is a worship day for some people but for others, it is just a way to get free toys.', a:'Christmas'}; //question & answer for $200 Holidays
    qa[2]= {q:'This holiday is a obnoctious holiday that requires an animal that almost nobody knew about.The name discribes the behaviour of the animal.', a:'Groundhog Day'}; //question & answer for $300 Holidays
    qa[3]= {q:'This holiday lasts as long as my birthday date and is celebrated during KartiKa.', a:'Diwali'}; //question & answer for $400 Holidays
    qa[4]= {q:'This hoiday is a way to get people together and to have fun, singing and dancing. This holiday will defiently get you to say WOW!', a:'Powwow'}; //question & answer for $500 Holidays
  }
  if(topic == "5"){  //Movies
    qa[0]= {q:'This movie is an animation movie and is about is named after something that everyone has.', a:'Cars'}; //question & answer for $100 Movies
    qa[1]= {q:'', a:''}; //question & answer for $200 Movies
    qa[2]= {q:'', a:''}; //question & answer for $300 Movies
    qa[3]= {q:'', a:''}; //question & answer for $400 Movies
    qa[4]= {q:'', a:''}; //question & answer for $500 Movies
  }
  document.getElementById("text").innerHTML = qa[(price/100) - 1].q;
  document.getElementById("overlay").style.display = "block";
  latestPrice = price;
  console.log(latestPrice)
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
function addMihir(){
  document.getElementById("mscore").innerHTML = "$" + (latestPrice + parseInt(document.getElementById("mscore").innerHTML.substring(1)));
}

function addRasika(){
  document.getElementById("rscore").innerHTML = "$" + (latestPrice + parseInt(document.getElementById("rscore").innerHTML.substring(1)));
}

function addBhupi(){
  document.getElementById("bscore").innerHTML = "$" + (latestPrice + parseInt(document.getElementById("bscore").innerHTML.substring(1)));
}