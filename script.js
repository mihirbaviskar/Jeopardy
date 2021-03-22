var qa = [];
var latestPrice = 0;
function getQuestion(topic, price){
  price = price.substring(1);
  price = parseInt(price);
  console.log(price);
  if(topic == "1"){ // Food
    qa[0]= {q:'This invention of two things that were very rare at the time, combined to make a portable device that made people capable of keeping memories, whether photos or videos.', a:"CamCorder"}; //question & answer for $100 Food
    qa[1]= {q:'This sport helped Indians get their independence from the British, shown in a movie directed by Ashutosh Gowariker.', a:'Cricket'}; //question & answer for $200 Food 
    qa[2]= {q:'This romance ethics group that has the word cat in its name and is native to the mediterraneans descent.', a:'Catalans'}; //question & answer for $300 Food
    qa[3]= {q:'This snack that contains cereal but is salty and is a MIX of flavors.', a:'Chex Mix'}; //question & answer for $400 Food
    qa[4]= {q:'This vehicle is used to harvest corn and has the abbreviation of company.', a:'Combine'}; //question & answer for $500 Food
  }
  if(topic == "2"){ // Instruments
    qa[0]= {q:'This invention was made in 1879 and is invented by a person with the same name as a talking train.', a:'Light Bulb'}; //question & answer for $100 Instruments
    qa[1]= {q:' What was the name of the inventor of google that studied computer engineering at Stanford before google.', a:'Larry Page '}; //question & answer for $200 Instruments
    qa[2]= {q:'Who invented the pencil? Only one qualifies to be the correct answer.', a:'Conrad Gessner,Wiliam Monroe, Nicolas-Jacques Conté'}; //question & answer for $300 Instruments
    qa[3]= {q:' Who made wikipedia.' , a:'Jimmy Wales'}; //question & answer for $400 Instruments
    qa[4]= {q:'What did Brian Gamlin do?', a:'He invented darts.'}; //question & answer for $500 Instruments
  }
  if(topic == "3"){ // Brands
    qa[0]= {q:'What sport has heavy balls and has the same thing you see on the edge of the roof of houses?', a:'Bowling'}; //question & answer for $100 Brands
    qa[1]= {q:'Who has the world record for the fastest 40 meter yard dash?', a:'John Ross'}; //question & answer for $200 Brands
    qa[2]= {q:'Who has the world record for the fastest bicycle?', a:' Mueller-Korneck'}; //question & answer for $300 Brands
    qa[3]= {q:' What sport does Tom Brady play?', a:'Football'}; //question & answer for $400 Brands
    qa[4]= {q:' What state has a colledge football team that has a dragon as their mascot? ', a:'Alabama'}; //question & answer for $500 Brands
  }
  if(topic == "4"){ //Holidays
    qa[0]= {q:'This drink is non alcoholic and is entirely made by one fruit', a:'Apple cider'}; //question & answer for $100 Holidays
    qa[1]= {q:'This alcoholic drink is the third most consumed drink in the world before water and tea.', a:'beer'}; //question & answer for $200 Holidays
    qa[2]= {q:'This drink is clear and originated in Sweden and Poland and Russia. It is made with water and a gas made out of corn.', a:'vodka'}; //question & answer for $300 Holidays
    qa[3]= {q:' This juice is mostly made out of a fruit and contains sugar, water, and other fruit juices. It has tons of health benefits, but has a tart taste.', a:'Cranberry juice '}; //question & answer for $400 Holidays
    qa[4]= {q:' This flavor of the juice from Caprisun is filled with different types of TROPICAL fruits. After drinking this you will be strong enough to PUNCH a wall open.', a:'tropical punch'}; //question & answer for $500 Holidays
  }
  if(topic == "5"){  //Movies
    qa[0]= {q:'This superhero slings through the neighborhood saving people even though he is a teenager. What is this superheros name?', a:'spiderman or Peter parker'}; //question & answer for $100 Movies
    qa[1]= {q:'This superhero can fly and wears underwear and a cape. This superhero has both a female and male version. ', a:'superman or supergirl'}; //question & answer for $200 Movies
    qa[2]= {q:'The Hulk is played by who is in the Incredible Hulk?', a:':Lou Ferrigno '}; //question & answer for $300 Movies
    qa[3]= {q:'Who played wonder woman in Wonder Woman?', a:'Gal Gadot'}; //question & answer for $400 Movies
    qa[4]= {q:':What is the name of the place that aqua man is trying to save in the movie Auqaman?  ', a:'Atlantis'}; //question & answer for $500 Movies
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