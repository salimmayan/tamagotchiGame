import $ from 'jquery';
import './style.css';
import {Tamagotchi} from '../src/Tamagotchi.js';

let tamagotchi2 =  new Tamagotchi("Luke");
console.log(`Inside Main ${tamagotchi2}`);


$(document).ready(function() {
    $('#submit').click(function() {
        tamagotchi2.feed();
        $("#result").empty();
        $("#result").append(`Tamagotchi was fed. Food level: ${tamagotchi2.foodLevel}`);
    });

 

  

  tamagotchi2.onDeath = () => { 
      //alert('it died');
      $("#result").empty();
      $("#result").append(`Tamagotchi died. Food level: ${tamagotchi2.foodLevel}`);
  };

  tamagotchi2.onUnconcious = () => { 
    //alert('its Unconcious'); 
      $("#result").empty();
      $("#result").append(`Tamagotchi is unconscious. Food level: ${tamagotchi2.foodLevel}`);
};

});

