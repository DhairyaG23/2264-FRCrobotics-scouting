var teamArray; //Array with all the teams in the event
var teamNumArray; //Array with all the team numbers (DEPRACATED)
var tKeyArray; //Array with all the team keys

var currentTeam; //The current team being sent to get a score
var currentEvent; //The current event being processed

var index; //The current index in the array that is being handled

var teamTotal; //The total score of a team at an event, gets reset at the same time as teamAvg
var teamAvg; //The Avg of a team, gets reset every time a new team is sent to getTeamScores

var teamScoreRequestObj; //The parsed JSON file of getTeamScores
var keyk; //A Variable that cycles from 0-2 to cycle througha and check which team contains the key of the target team
var autoScore;
var TOPScore;
var blueKeyArray = []; //Array with all the blue team keys
var eventScoreArray = []; //Array with all scores of each team from ana event
var avgScoreArray = []; //Array of averagre scores
var outerArray = [];
var innerArray = [];
var bottomArray = [];
var autoArray = [];
var tOPArray;
var avgautoArray = [];
var avgtOPArray = [];
var bigbig;
var innerVar;
var outerVar;
var bottomVar;
var innerAvg;
var outerAvg;
var bottomAvg;
//Reset stuff
var i;
var u;
var mainTable = document.getElementById('table');
var tr2;

var avg; //Average value for a given team
var autoTotal;
var tOPTotal
var autoAvg;
var tOPAvg
var table = document.getElementById('table-items');
var p;

$(document).ready(function() {
    $('.js-example-basic-single').select2();
});

function reset() {
    index = 0;
    eventScoreArray = [];
    outerArray = [];
    innerArray = [];
    bottomArray = [];
    avgScoreArray = [];
    avgautoArray = [];
    autoArray = [];
    avgtOPArray = [];
    tOPArray = [];
    p = 0;
}

//Get the new Team Key to work with
function getKeys() {

  if(index < teamArray.length) {
      currentTeam = tKeyArray[index];

      getTeamScores(currentTeam, currentEvent);
      index++;
    } else {

      putItems();
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
      console.log(bc);
      console.log(size)
      console.log(items.length);
      console.log("-------");

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
function getTeamScores (tKey, eKey) {


    var teamScoreRequest = new XMLHttpRequest();
    teamScoreRequest.open("GET", "https://www.thebluealliance.com/api/v3/team/" + tKey + "/event/" + eKey + "/matches" , true);
    teamScoreRequest.setRequestHeader("X-TBA-Auth-Key", "lrqZK0XAvSpeHXuWi9vhbmnAbF4ueBRQB3OevJC1pOWIWQdwX1WKRJ4oQceP0ox5");
    teamScoreRequest.send();
    //Reset the Team Totals and Averages
    teamTotal = 0;
    teamAvg = 0;
    autoAvg = 0;
    autoTotal = 0;
    autoArray = [];
    tOPAvg = 0;
    tOPTotal = 0;
    tOPArray = [];
    eventScoreArray = [];
    outerArray = [];
    innerArray = [];
    bottomArray = [];
    bottomAvg = 0;
    bottomVar = 0;
    innerAvg = 0;
    innerVar = 0;
    outerAvg = 0;
    outerVar = 0;


    teamScoreRequest.onload = function() {
        teamScoreRequestObj = JSON.parse(this.responseText);
        // //console.log(teamScoreRequestObj);
        teamAlliance = "";
        for(matchNum = 0; matchNum < teamScoreRequestObj.length; matchNum++) {
            blueKeyArray = teamScoreRequestObj[matchNum].alliances.blue.team_keys;
            for(keyk = 0; keyk < 2; keyk++) {
                if(tKey == blueKeyArray[keyk]) {
                    teamAlliance = "blue";

                    teamTotal += teamScoreRequestObj[matchNum].alliances.blue.score
                    outerVar += teamScoreRequestObj[matchNum].score_breakdown.blue.autoCellsOuter + teamScoreRequestObj[matchNum].score_breakdown.red.teleopCellsOuter;
                    innerVar += teamScoreRequestObj[matchNum].score_breakdown.blue.autoCellsInner + teamScoreRequestObj[matchNum].score_breakdown.red.teleopCellsInner;
                    bottomVar += teamScoreRequestObj[matchNum].score_breakdown.blue.autoCellsBottom + teamScoreRequestObj[matchNum].score_breakdown.red.teleopCellsBottom;
                    autoTotal += teamScoreRequestObj[matchNum].score_breakdown.blue.autoPoints;
                    tOPTotal += teamScoreRequestObj[matchNum].score_breakdown.blue.teleopPoints;
                }
            }
            //FIX LINE UNDERNEATH!!!!
            if(teamAlliance == "blue") {

            } else {
                teamTotal += teamScoreRequestObj[matchNum].alliances.red.score
                outerVar += teamScoreRequestObj[matchNum].score_breakdown.red.autoCellsOuter + teamScoreRequestObj[matchNum].score_breakdown.red.teleopCellsOuter;
                innerVar += teamScoreRequestObj[matchNum].score_breakdown.red.autoCellsInner + teamScoreRequestObj[matchNum].score_breakdown.red.teleopCellsInner;
                bottomVar += teamScoreRequestObj[matchNum].score_breakdown.red.autoCellsBottom + teamScoreRequestObj[matchNum].score_breakdown.red.teleopCellsBottom;
                autoTotal += teamScoreRequestObj[matchNum].score_breakdown.red.autoPoints;
                tOPTotal += teamScoreRequestObj[matchNum].score_breakdown.red.teleopPoints;
            }
            teamAlliance = "";

          }
//6.39
          // for(var i = 0; i < eventScoreArray.length; i++ ){
          //     teamTotal += parseInt(eventScoreArray[i], 10 ); //don't forget to add the base
          //
          // }
          var avg = (teamTotal/teamScoreRequestObj.length).toFixed(2);

          // for(var u = 0; u < autoArray.length; u++ ){
          //     autoTotal += parseInt(autoArray[u], 10 ); //don't forget to add the base
          // }

          var autoAvg = (autoTotal/teamScoreRequestObj.length).toFixed(2);

          // for(var u = 0; u < tOPArray.length; u++ ){
          //     tOPTotal += parseInt(tOPArray[u], 10 ); //don't forget to add the base
          // }

          var tOPAvg = (tOPTotal/teamScoreRequestObj.length).toFixed(2);

          // for(var u = 0; u < innerArray.length; u++ ){
          //     innerVar += parseInt(innerArray[u], 10 ); //don't forget to add the base
          // }

          var innerAvg = (innerVar/teamScoreRequestObj.length).toFixed(2);

          // for(var u = 0; u < outerArray.length; u++ ){
          //     outerAvg += parseInt(outerArray[u], 10 ); //don't forget to add the base
          // }

          var outerAvg = (outerVar/teamScoreRequestObj.length).toFixed(2);

          // for(var u = 0; u < bottomArray.length; u++ ){
          //     bottomVar += parseInt(bottomArray[u], 10 ); //don't forget to add the base
          // }

          var bottomAvg = (bottomVar/teamScoreRequestObj.length).toFixed(2);



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


          var bigbig = ('getMyTeamInfoVar(\"' + teamNumArray[p] + '\")');


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
          teamNames.innerHTML = teamArray[p] + " - " + teamNumArray[p];
          teamScores.innerHTML = avg;
          autoScores.innerHTML = autoAvg;
          tOPScores.innerHTML = tOPAvg;
          innerNums.innerHTML = innerAvg;
          outerNums.innerHTML = outerAvg;
          bottomNums.innerHTML =bottomAvg;

          // empty.innerHTML = "";



          eventScoreArray = [];

          autoArray = [];
          p++;
          getKeys();

    }

}



var table;
var name;
var score;

function putItems() {
        $('.loading').fadeOut(600);
        $('.sortable').fadeIn(1000);
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
        reset();
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
