var teamArray; //Array with all the teams in the event
var teamNumArray; //Array with all the team numbers (DEPRACATED)
var tKeyArray; //Array with all the team keys

var currentTeam; //The current team being sent to get a score
var currentEvent; //The current event being processed

var index; //The current index in the array that is being handled
var finalArray = [];
var finalArray2 = [];
var finalArray3 = [];
var finalArray4 = [];
var finalArray5 = [];
var finalArray6 = [];
var finalArray7 = [];
// window["teamTotal" + u]; //The total score of a team at an event, gets reset at the same time as window["teamAvg" + u]
// window["teamAvg" + u]; //The Avg of a team, gets reset every time a new team is sent to getTeamScores

var teamScoreRequestObj; //The parsed JSON file of getTeamScores
var keyk; //A Variable that cycles from 0-2 to cycle througha and check which team contains the key of the target team
var autoScore;
var TOPScore;
var blueKeyArray = []; //Array with all the blue team keys
// window["eventScoreArray" + u] = []; //Array with all scores of each team from ana event
// var window["avgScoreArray" + u] = []; //Array of averagre scores
// window["outerArray" + u] = [];
// window["innerArray" + u] = [];
// window["bottomArray" + u] = [];
// window["autoArray" + u] = [];
// window["tOPArray" + u];
// var avgwindow["autoArray" + u] = [];
// var avgwindow["tOPArray" + u] = [];
var bigbig;
// window["innerVar" + u];
// window["outerVar" + u];
// window["bottomVar" + u];
// window["innerAvg" + u];
// window["outerAvg" + u];
// window["bottomAvg" + u];
//Reset stuff
var i;
var reps = 0;
// var u;
var mainTable = document.getElementById('table');
var tr2;

var avg; //Average value for a given team
// window["autoTotal" + u];
// window["tOPTotal" + u]
// window["autoAvg" + u];
// window["tOPAvg" + u]
var table = document.getElementById('table-items');
var p;
// var u = 0;

$(document).ready(function() {
    $('.js-example-basic-single').select2();
});

function reset() {
    index = 0;
    window["eventScoreArray" + u] = [];
    window["outerArray" + u] = [];
    window["innerArray" + u] = [];
    window["bottomArray" + u] = [];
    window["avgScoreArray" + u] = [];
    // avgwindow["autoArray" + u] = [];
    window["autoArray" + u] = [];
    // avgwindow["tOPArray" + u] = [];
    window["tOPArray" + u] = [];
    p = 0;
    u = 0;
}

//Get the new Team Key to work with
function getKeys() {

    for(index = 0; index < teamArray.length; index++) {
      currentTeam = tKeyArray[index];

      getTeamScores(currentTeam, currentEvent, index);

      if(index == teamArray.length-1) {
          // putItems();
      }
    }


// }
}
var items;
var l = 2;
function showInfo() {

    if (l%2 == 0) {
    var items = document.getElementsByClassName("inline-collapsable");
    l++;
  } else {
    var items = document.getElementsByClassName("benis");
    l++;
  }
    var size = items.length;

    for (var i=0; i < size; i++) {
      var bc = size - 1 - i;
      // console.log(bc);
      // console.log(size)
      // console.log(items.length);
      // console.log("-------");

      if (l%2 == 0) {
      items[bc].classList.toggle("inline-collapsable");
      items[bc].classList.toggle("benis");
    } else {
      items[bc].classList.toggle("benis");
      items[bc].classList.toggle("inline-collapsable");
    }



    }
}

//Get the team scores
function getTeamScores (tKey, eKey, u) {
    // console.log("before");
    // loadJSON('https://www.thebluealliance.com/api/v3/team/frc1073/event/2020week0/matches?X-TBA-Auth-Key=lrqZK0XAvSpeHXuWi9vhbmnAbF4ueBRQB3OevJC1pOWIWQdwX1WKRJ4oQceP0ox5', gotData);
    var fff = "https://www.thebluealliance.com/api/v3/team/"+ tKey + "/event/" + eKey + "/matches?X-TBA-Auth-Key=lrqZK0XAvSpeHXuWi9vhbmnAbF4ueBRQB3OevJC1pOWIWQdwX1WKRJ4oQceP0ox5";
    let ok = new URL(fff);
    // console.log("during");
    fetch(ok)
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        window["teamScoreRequestObj" + u] = myJson;   // create counter1, counter2,...)

        // var teamScoreRequestObj = myJson;
        // console.log(myJson);
        // console.log("after");



    // function gotData(data) {
    //   console.log(data);
    // }



    // teamScoreRequest.setRequestHeader("X-TBA-Auth-Key", "lrqZK0XAvSpeHXuWi9vhbmnAbF4ueBRQB3OevJC1pOWIWQdwX1WKRJ4oQceP0ox5");

    // var teamScoreRequest = new XMLHttpRequest();
    // teamScoreRequest.open("GET", "https://www.thebluealliance.com/api/v3/team/" + tKey + "/event/" + eKey + "/matches" , true);
    // teamScoreRequest.setRequestHeader("X-TBA-Auth-Key", "lrqZK0XAvSpeHXuWi9vhbmnAbF4ueBRQB3OevJC1pOWIWQdwX1WKRJ4oQceP0ox5");
    // teamScoreRequest.send();
    //Reset the Team Totals and Averages
    window["teamTotal" + u] = 0;
    window["teamAvg" + u] = 0;
    window["autoAvg" + u] = 0;
    window["autoTotal" + u] = 0;
    window["autoArray" + u] = [];
    window["tOPAvg" + u] = 0;
    window["tOPTotal" + u] = 0;
    window["tOPArray" + u] = [];
    window["eventScoreArray" + u] = [];
    window["outerArray" + u] = [];
    window["innerArray" + u] = [];
    window["bottomArray" + u] = [];
    window["bottomAvg" + u] = 0;
    window["bottomVar" + u] = 0;
    window["innerAvg" + u] = 0;
    window["innerVar" + u] = 0;
    window["outerAvg" + u] = 0;
    window["outerVar" + u] = 0;


    // teamScoreRequest.onload = function() {
        // teamScoreRequestObj = JSON.parse(this.responseText);
        // //console.log(teamScoreRequestObj);
        window["teamAlliance" + u] = "";
        for(matchNum = 0; matchNum < window["teamScoreRequestObj" + u].length; matchNum++) {
            blueKeyArray = window["teamScoreRequestObj" + u][matchNum].alliances.blue.team_keys;
            for(keyk = 0; keyk < 2; keyk++) {
                if(tKey == blueKeyArray[keyk]) {
                    window["teamAlliance" + u] = "blue";

                    window["teamTotal" + u] += window["teamScoreRequestObj" + u][matchNum].alliances.blue.score
                    window["outerVar" + u] += window["teamScoreRequestObj" + u][matchNum].score_breakdown.blue.autoCellsOuter + window["teamScoreRequestObj" + u][matchNum].score_breakdown.red.teleopCellsOuter;
                    window["innerVar" + u] += window["teamScoreRequestObj" + u][matchNum].score_breakdown.blue.autoCellsInner + window["teamScoreRequestObj" + u][matchNum].score_breakdown.red.teleopCellsInner;
                    window["bottomVar" + u] += window["teamScoreRequestObj" + u][matchNum].score_breakdown.blue.autoCellsBottom + window["teamScoreRequestObj" + u][matchNum].score_breakdown.red.teleopCellsBottom;
                    window["autoTotal" + u] += window["teamScoreRequestObj" + u][matchNum].score_breakdown.blue.autoPoints;
                    window["tOPTotal" + u] += window["teamScoreRequestObj" + u][matchNum].score_breakdown.blue.teleopPoints;
                }
            }
            //FIX LINE UNDERNEATH!!!!
            if(window["teamAlliance" + u] == "blue") {

            } else {
                window["teamTotal" + u] += window["teamScoreRequestObj" + u][matchNum].alliances.red.score
                window["outerVar" + u] += window["teamScoreRequestObj" + u][matchNum].score_breakdown.red.autoCellsOuter + window["teamScoreRequestObj" + u][matchNum].score_breakdown.red.teleopCellsOuter;
                window["innerVar" + u] += window["teamScoreRequestObj" + u][matchNum].score_breakdown.red.autoCellsInner + window["teamScoreRequestObj" + u][matchNum].score_breakdown.red.teleopCellsInner;
                window["bottomVar" + u] += window["teamScoreRequestObj" + u][matchNum].score_breakdown.red.autoCellsBottom + window["teamScoreRequestObj" + u][matchNum].score_breakdown.red.teleopCellsBottom;
                window["autoTotal" + u] += window["teamScoreRequestObj" + u][matchNum].score_breakdown.red.autoPoints;
                window["tOPTotal" + u] += window["teamScoreRequestObj" + u][matchNum].score_breakdown.red.teleopPoints;
            }
            window["teamAlliance" + u] = "";

          }
//6.39
          // for(var i = 0; i < window["eventScoreArray" + u].length; i++ ){
          //     window["teamTotal" + u] += parseInt(window["eventScoreArray" + u][i], 10 ); //don't forget to add the base
          //
          // }
          window["avg" + u] = (window["teamTotal" + u]/window["teamScoreRequestObj" + u].length).toFixed(2);
          // finalArray.splice(u-1, 0, window["teamTotal" + u]/window["teamScoreRequestObj" + u].length);

          // for(var u = 0; u < window["autoArray" + u].length; u++ ){
          //     window["autoTotal" + u] += parseInt(window["autoArray" + u][u], 10 ); //don't forget to add the base
          // }

          window["autoAvg" + u] = (window["autoTotal" + u]/window["teamScoreRequestObj" + u].length).toFixed(2);

          // for(var u = 0; u < window["tOPArray" + u].length; u++ ){
          //     window["tOPTotal" + u] += parseInt(window["tOPArray" + u][u], 10 ); //don't forget to add the base
          // }

          window["tOPAvg" + u] = (window["tOPTotal" + u]/window["teamScoreRequestObj" + u].length).toFixed(2);

          // for(var u = 0; u < window["innerArray" + u].length; u++ ){
          //     window["innerVar" + u] += parseInt(window["innerArray" + u][u], 10 ); //don't forget to add the base
          // }

          window["innerAvg" + u] = (window["innerVar" + u]/window["teamScoreRequestObj" + u].length).toFixed(2);

          // for(var u = 0; u < window["outerArray" + u].length; u++ ){
          //     window["outerAvg" + u] += parseInt(window["outerArray" + u][u], 10 ); //don't forget to add the base
          // }

          window["outerAvg" + u] = (window["outerVar" + u]/window["teamScoreRequestObj" + u].length).toFixed(2);

          // for(var u = 0; u < window["bottomArray" + u].length; u++ ){
          //     window["bottomVar" + u] += parseInt(window["bottomArray" + u][u], 10 ); //don't forget to add the base
          // }

          window["bottomAvg" + u] = (window["bottomVar" + u]/window["teamScoreRequestObj" + u].length).toFixed(2);


          window["eventScoreArray" + u] = [];

          window["autoArray" + u] = [];
          p++;
          reps++;
          if(reps == teamArray.length) {
            // setTimeout(function() {
              console.log("running");
              for(v = 0; v < teamArray.length; v++) {
                // console.log(window["avg" + v]);
                finalArray.push(window["avg" + v]);
                finalArray2.push(window["autoAvg" + v]);
                finalArray3.push(window["tOPAvg" + v]);
                finalArray4.push(window["innerAvg" + v]);
                finalArray5.push(window["outerAvg" + v]);
                finalArray6.push(window["bottomAvg" + v]);

            }
            putItems();
          // }, 1000);
          }
          // getKeys();

    // }
      });

}



var table;
var name;
var score;
var listVar;
function putItems() {
      for (listVar = 0; listVar < teamArray.length; listVar++) {

      var tr = document.createElement('tr');
      var teamNames = document.createElement('td');
      var teamScores = document.createElement('td');
      var autoScores = document.createElement('td');
      var tOPScores = document.createElement('td');
      var outerNums = document.createElement('td');
      var innerNums = document.createElement('td');
      var bottomNums = document.createElement('td');

      outerNums.classList.toggle("inline-collapsable");
      innerNums.classList.toggle("inline-collapsable");
      bottomNums.classList.toggle("inline-collapsable");


      var bigbig = ('getMyTeamInfoVar(\"' + teamNumArray[listVar] + '\")');


      tr.classList.toggle('inline-centering');

      tr.setAttribute("onClick", bigbig);


      var table = document.getElementById('table-items');

      table.appendChild(tr);
      // table.appendChild(empty);
      tr.appendChild(teamNames);
      tr.appendChild(teamScores);
      tr.appendChild(autoScores);
      tr.appendChild(tOPScores);

      tr.appendChild(bottomNums);
      tr.appendChild(outerNums);
      tr.appendChild(innerNums);

      // //console.log("P is" + p);
      teamNames.innerHTML = teamArray[listVar] + " - " + teamNumArray[listVar];
      teamScores.innerHTML = finalArray[listVar];
      autoScores.innerHTML = finalArray2[listVar];
      tOPScores.innerHTML = finalArray3[listVar];
      innerNums.innerHTML = finalArray4[listVar];
      outerNums.innerHTML = finalArray5[listVar];
      bottomNums.innerHTML = finalArray6[listVar];
    }


        $('.loading').fadeOut(600);
        $('.sortable').fadeIn(1000);
        $('.makeEpicAppear').fadeIn(500);
}

var urlKey;
var urlName;
function checkParams(){
  var url = new URL(window.location.href);
  var listID = url.searchParams.get('listID');

  if(listID != null){
    $('.loading').fadeIn(600);
    // url.searchParams.get('eventName');
    urlKey = eKeyArray.indexOf(listID);
    urlName = eNameArray[urlKey];
    document.getElementById('event-name').innerHTML = urlName;

    makeList(listID);
  }
}



var eventk;
var eventkey;

function makeList(x){
  currentEvent = x;
  $('ul').empty()
  teamArray = [];
  teamNumArray = [];
  tKeyArray = [];
  eventKey = x;
  var teamRequest = new XMLHttpRequest();
  teamRequest.open("GET", "https://www.thebluealliance.com/api/v3/event/" + x + "/teams" , true);
  teamRequest.setRequestHeader("X-TBA-Auth-Key", "lrqZK0XAvSpeHXuWi9vhbmnAbF4ueBRQB3OevJC1pOWIWQdwX1WKRJ4oQceP0ox5");
  teamRequest.send();
  teamRequest.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200){

          var teamRequestObj = JSON.parse(this.responseText);
          var a;

          for (a = 0; a < teamRequestObj.length; a++) {
            teamArray.push(teamRequestObj[a].nickname);
            tKeyArray.push(teamRequestObj[a].key);
            teamNumArray.push(teamRequestObj[a].team_number);
        }
        // reset();
        getKeys();

      }
    }

}

function waitTillRun(){
  setTimeout(function(){
    checkParams();
  }, 1000)
}

$(document).ready(waitTillRun);
