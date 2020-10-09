const Discord = require("discord.js");
const myid = ['667030309031641089'];
const developers = ['667030309031641089','692080114892144720'];
 
 
const prefix = ['#'];
const cmd = require("node-cmd")
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();



client.login("NzYyNDUwNTE5NTA3NDY4MzM3.X3r_EA.xUQPEo_FH007cf7UPRUzB5ibvek");
client2.login("NzQ0Nzk3Mzc1NDE5MzgzODQ4.X39s8Q.S-TGXDjXyA2OwpU6-LvPPtBSLJ4");
client3.login("NzQ1MzcxODg5OTM3MTU0MDg5.X3-HPg.lQqzJWEWiBwUfDB6m8vidomTlA4");
client4.login();
client5.login();
client6.login("NzQxOTU1NTQ3NzI4OTY5ODI5.X3-LFA.CLkXDCDRVLrPmjv2fXhQ4JzsTOU");


//????????????????????????????????????????????????????????????????


client.on('message', message => {
var argresult = message.content.split(` `).slice(1).join(' ');
if (!developers.includes(message.author.id)) return;
  if (message.content === 'd1') {
message.channel.send('#daily')
  }
  if(message.content === 'c'){
message.channel.send('#credits')
  }
  if(message.content === 'r1'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if (message.content === 'p1') {
message.channel.send('#profile')
  }
  if(message.content.startsWith("s1")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});
 
client2.on('message', message => {
var argresult = message.content.split(` `).slice(1).join(' ');
if (!developers.includes(message.author.id)) return;
  if (message.content === 'd2') {
message.channel.send('#daily')
  }
  if(message.content === 'c'){
message.channel.send('#credits')
  }
   if(message.content === 'r2'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if (message.content === 'p2') {
message.channel.send('#profile')
  }
  if(message.content.startsWith("s2")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});
 
client3.on('message', message => {
var argresult = message.content.split(` `).slice(1).join(' ');
if (!developers.includes(message.author.id)) return;
  if (message.content === 'd3') {
message.channel.send('#daily')
  }
  if(message.content === 'c'){
message.channel.send('#credits')
  }
  if(message.content === 'r3'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if (message.content === 'p3') {
message.channel.send('#profile')
  }
  if(message.content.startsWith("s3")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});
 
client4.on('message', message => {
var argresult = message.content.split(` `).slice(1).join(' ');
if (!developers.includes(message.author.id)) return;
  if (message.content === 'd4') {
message.channel.send('#daily')
  }
  if(message.content === 'c'){
message.channel.send('#credits')
  }
  if(message.content === 'r4'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if (message.content === 'p4') {
message.channel.send('#profile')
  }
  if(message.content.startsWith("s4")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});
 
client5.on('message', message => {
var argresult = message.content.split(` `).slice(1).join(' ');
if (!developers.includes(message.author.id)) return;
  if (message.content === 'd5') {
message.channel.send('#daily')
  }
  if(message.content === 'c'){
message.channel.send('#credits')
  }
  if(message.content === 'r5'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if (message.content === 'p5') {
message.channel.send('#profile')
  }
  if(message.content.startsWith("s5")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client6.on('message', message => {
var argresult = message.content.split(` `).slice(1).join(' ');
if (!developers.includes(message.author.id)) return;
  if (message.content === 'd6') {
message.channel.send('#daily')
  }
  if(message.content === 'c'){
message.channel.send('#credits')
  }
  if(message.content === 'r6'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if (message.content === 'p6') {
message.channel.send('#profile')
  }
  if(message.content.startsWith("s6")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});


//????????????????????????????????????????????????????????????????


client.on('message', message => {
var argresult = message.content.split(` `).slice(1).join(' ');
if (!developers.includes(message.author.id)) return;
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``1`` ")
    }
});

client2.on('message', message => {
var argresult = message.content.split(` `).slice(1).join(' ');
if (!developers.includes(message.author.id)) return;
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``2`` ")
    }
});

client3.on('message', message => {
var argresult = message.content.split(` `).slice(1).join(' ');
if (!developers.includes(message.author.id)) return;
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``3`` ")
    }
});

client4.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``4`` ")
    }
});

client5.on('message', message => {
var argresult = message.content.split(` `).slice(1).join(' ');
if (!developers.includes(message.author.id)) return;
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``5`` ")
    }
});

client6.on('message', message => {
var argresult = message.content.split(` `).slice(1).join(' ');
if (!developers.includes(message.author.id)) return;
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``6`` ")
    }
});


//????????????????????????????????????????????????????????????????


client.on('message', message => {
var argresult = message.content.split(` `).slice(1).join(' ');
if (!developers.includes(message.author.id)) return;
if (message.content === prefix+'fast') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 30000; x++) {
        message.channel.send(`**??? ???? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client2.on('message', message => {
var argresult = message.content.split(` `).slice(1).join(' ');
if (!developers.includes(message.author.id)) return;
if (message.content === prefix+'fast') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 30000; x++) {
        message.channel.send(`**??? ???? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client3.on('message', message => {
var argresult = message.content.split(` `).slice(1).join(' ');
if (!developers.includes(message.author.id)) return;
if (message.content === prefix+'fast') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 30000; x++) {
        message.channel.send(`**??? ???? ??? ?? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client4.on('message', message => {
var argresult = message.content.split(` `).slice(1).join(' ');
if (!developers.includes(message.author.id)) return;
if (message.content === prefix+'fast') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 30000; x++) {
        message.channel.send(`**??? ???? ??? ?? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client5.on('message', message => {
var argresult = message.content.split(` `).slice(1).join(' ');
if (!developers.includes(message.author.id)) return;
if (message.content === prefix+'fast') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 30000; x++) {
        message.channel.send(`**??? ???? ??? ?? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});


//????????????????????????????????????????????????????????????????

client.on('message',function(message) {
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "s")) {
if(!args) return;
message.channel.send(`${args}`);
}
});



var interval;
var infoid = [];
var Abdo = [];
var AbdoSPAM = [];
var curr = 0;
var count = 0;
var acurr = 0;



client2.on('message',function(message) {
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "s")) {
if(!args) return;
message.channel.send(`${args}`);
}
});



var interval;
var infoid = [];
var Abdo = [];
var AbdoSPAM = [];
var curr = 0;
var count = 0;
var acurr = 0; 



client3.on('message',function(message) {
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "s")) {
if(!args) return;
message.channel.send(`${args}`);
}
});



var interval;
var infoid = [];
var Abdo = [];
var AbdoSPAM = [];
var curr = 0;
var count = 0;
var acurr = 0;



client4.on('message',function(message) {
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "s")) {
if(!args) return;
message.channel.send(`${args}`);
}
});



var interval;
var infoid = [];
var Abdo = [];
var AbdoSPAM = [];
var curr = 0;
var count = 0;
var acurr = 0;


client6.on('message',function(message) {
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "s")) {
if(!args) return;
message.channel.send(`${args}`);
}
});



var interval;
var infoid = [];
var Abdo = [];
var AbdoSPAM = [];
var curr = 0;
var count = 0;
var acurr = 0;


//
const express = require("express");
const app = express();

app.listen(() => console.log("Ready to play song | Bot created by Angry Black"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});

//????????????????????????????????????????????????????????????????
