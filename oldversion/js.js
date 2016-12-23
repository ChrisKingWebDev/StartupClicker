jQuery.fn.enable = function() {
    $(this).removeClass("disabled");
};
jQuery.fn.disable = function() {
    $(this).addClass("disabled");
};
jQuery.fn.isDisabled = function() {
    return $(this).hasClass("disabled");
};

var codePerClick = 1;
var designPerClick = 1;
var buzzPerClick = 1;

var coders = 0;
var designers = 0;
var marketers = 0;
var coderCost = 50;
var designerCost = 50;
var marketerCost = 50;

var coderEfficency = 1;
var designerEfficency = 2;
var designDecay = .1;
var marketerEfficency = 10;
var buzzDecay = .2;

var staff = 0;

var tech = 0;
var design = 0;
var buzz = 0;
var users = 0;
var officeSpace = 3;
var servers = 1;
var techPerServer = 100;
var serverCost = 100;
var serverUpgradeCost = 500;
var goAlphaCost = 500;
var goBetaCostTech = 2500;
var goBetaCostDesign = 2500;

var money = 0;
var moneyPerUser = 1;

var officeCost = 10000;
var officesBought = 0;
var spacePerOffice = 25;

isAdmin = false;
isAdmin = true;
if(isAdmin){
	tech = 998;
	codePerClick = 55;
	designPerClick = 100;
	// buzzPerClick = 25;
	servers = 100;
	//buzz = 30;
}

var serverSpace = servers * techPerServer;

$tech = $("#tech"); // tech label
$design = $("#design"); // design label
$buzz = $("#buzz"); // buzz label
$users = $("#users"); // users label
$money = $("#money"); // money label
$coders = $("#coders"); // coders label
$designers = $("#designers"); // designers label
$marketers = $("#marketers"); // marketers label
$coderCost = $("#coderCost"); // coder cost label
$designerCost = $("#designerCost"); // design cost label
$marketerCost = $("#marketerCost"); // marketer cost label
$currentOffice = $("#currentOffice"); // current office label
$officeSpace = $("#officeSpace"); // office space label
$techPerServer = $("#techPerServer"); //tech per server label
$servers = $("#servers"); //servers label
$totalServerSpace = $("#totalServerSpace"); //servers label
$serverCost = $("#serverCost"); //tech per server label
$serverUpgradeCost = $("#serverUpgradeCost"); //tech per server upgrade
$designPanel = $("#designPanel"); //design panel
$buzzPanel = $("#buzzPanel"); //design panel
$usersPanel = $("#usersPanel"); //users panel
$moneyPanel = $("#moneyPanel"); //users panel
$messagePanel = $("#messagePanel"); //message panel

$codeClick = $("#codeClick"); // code click button
$designClick = $("#designClick"); // design click button
$inviteClick = $("#inviteClick"); // invite click button
$marketingClick = $("#marketingClick"); // marketing click button
$hireCoder = $("#hireCoder"); // hire coder button
$hireDesigner = $("#hireDesigner"); // hire designer button
$hireMarketer = $("#hireMarketer"); // hire marketer button
$buyGarage = $("#buyGarage"); // buy garage button
$buyHouse = $("#buyHouse"); // buy house button
$buyOffice = $("#buyOffice"); // buy office button
$buyServer = $("#buyServer"); // buy server button
$upgradeServers = $("#upgradeServers"); // buy server button
$goAlpha = $("#goAlpha"); // go alpha button
$goBeta = $("#goBeta"); // go beta button
$goLive = $("#goLive"); // go beta button

didAlpha = false;
didBeta = false;

inviteClickTimer = 0;
inviteTimer = 0;


function codeClick(){
	if($codeClick.isDisabled()){
		if(tech >= serverSpace){
			addMessage("Insufficient Server Space");
		}
	} else {
		tech = tech + codePerClick;
		if(tech > serverSpace){
			tech = serverSpace;
		}
		refreshLabels();
		testButtons();
	}
};
function designClick(){
	if($designClick.isDisabled()){
	} else {
		design = design + designPerClick;
		refreshLabels();
		testButtons();
	}
};
function inviteClick(){
	if($inviteClick.isDisabled()){
	} else {
		sendInvites(1);
		$inviteClick.disable();
	}
};
function marketingClick(){
	if($marketingClick.isDisabled()){
	} else {
		buzz = buzz + buzzPerClick;
		refreshLabels();
		testButtons();
	}
};
function sendInvites(num){
	signupRate = 0;
	if(users < 10){
		signupRate = 100;
	} else {
		//calulate signupRate based on balance of design and buzz against number of users
		designBuzz = design + (buzz * 2);
		if(designBuzz == 0){
			designBuzz = 1;
		}
		console.log("designBuzz "+designBuzz+" - users "+users);
		if(designBuzz >= users){
			signupRate = 75;
		} else {
			signupRate = designBuzz / users * 100;
		}
		if(signupRate > 50){
			signupRate = 50;
		}
		if(signupRate < 15){
			signupRate = 15;
		}

		console.log("signupRate "+signupRate);
		if(num == 1){
			randSeed = Math.floor((Math.random() * 100));
			console.log("randSeed "+randSeed);
			signupRate = (randSeed < signupRate) ? 100 : 0;
			console.log("signupRateRand "+signupRate);
		}
	}

	signUps	= Math.round(num * signupRate / 100);
	addMessage(signUps + " Signup"+(signUps > 1 ? "s" : ""));
	newUsers(signUps);
	refreshLabels();
	testButtons();
}
function newUsers(signUps){
	users = users + signUps;
	tech = tech - (signUps);
	if(tech < 0) {
		tech = 0;
	}
	design = design - (signUps * 2);
	if(design < 0) {
		design = 0;
	}
	if(buzz > 100){
		buzz = buzz - (signUps * 4);
		if(buzz < 0) {
			buzz = 0;
		}
	}
}


function hireCoder(){     //works out the cost of this cursor
    if($hireCoder.isDisabled()){
		if(tech < coderCost){
			addMessage("Insufficient Tech");
		} else if (officeSpace < 1){
			addMessage("Insufficient Office Space");
		}

	} else {
		coders = coders + 1;                                   //increases number of coders
		staff = staff + 1;
		tech = tech - coderCost;                          //removes the cookies spent
		officeSpace--;

		//coderCost = Math.floor(coderCost * Math.pow(1.1,coders));       //works out the cost of the next cursor
		coderCost = coderCost + ((Math.floor(coders / 5) + 1)  * 5);

		spaceTest();
		refreshLabels();
		testButtons();
	}
};
function hireDesigner(){     //works out the cost of this cursor
    if($hireDesigner.isDisabled()){
		if(design < designerCost){
			addMessage("Insufficient Design");
		} else if (officeSpace < 1){
			addMessage("Insufficient Office Space");
		}

	} else {
		designers = designers + 1;                                   //increases number of coders
		staff = staff + 1;
		design = design - designerCost;                          //removes the cookies spent
		officeSpace--;

		//designerCost = Math.floor(coderCost * Math.pow(1.2,designers));       //works out the cost of the next cursor
		designerCost = designerCost + ((Math.floor(designers / 5) + 1)  * 10);

		spaceTest();
		refreshLabels();
		testButtons();
	}
};
function hireMarketer(){     //works out the cost of this cursor
    if($hireMarketer.isDisabled()){
		if(buzz < marketerCost){
			addMessage("Insufficient Buzz");
		} else if (officeSpace < 1){
			addMessage("Insufficient Office Space");
		}

	} else {
		marketers = marketers + 1;                                   //increases number of coders
		staff = staff + 1;
		buzz = buzz - marketerCost;                          //removes the cookies spent
		officeSpace--;

		marketerCost = marketerCost + ((Math.floor(marketers / 5) + 1)  * 20);

		spaceTest();
		refreshLabels();
		testButtons();
	}
};


function spaceTest(){
		//special actions on certain levels
		if(staff == 3){
			$buyGarage.enable();
		}
		if(staff == 6 && didAlpha == true){
			$buyHouse.enable();
		}
		if(staff == 16){
			$buyOffice.enable();
		}
}

function buyGarage(){
	if($buyGarage.isDisabled()){
		addMessage("Garage Not Ready Yet");
	} else {
		$currentOffice.html("Garage");
		officeSpace = officeSpace + 3;
		$buyGarage.disable();
		$buyGarage.hide();
		$buyHouse.show();
		refreshLabels();
		testButtons();
	}
}
function buyHouse(){
	if($buyHouse.isDisabled()){
		if(officeSpace > 0){
			addMessage("Grandma Still Alive");
		} else {
			addMessage("Launch Alpha First");
		}
	} else {
		$currentOffice.html("Grandma's House");
		officeSpace = officeSpace + 10;
		$buyHouse.disable();
		$buyHouse.hide();
		$buyOffice.show();
		refreshLabels();
		testButtons();
	}
}
function buyOffice(){
	if($buyOffice.isDisabled()){
			addMessage("Insufficient Funds");
	} else {
		officeSpace = officeSpace + spacePerOffice;
		money = money - officeCost;
		$currentOffice.html("Office Space");

		refreshLabels();
		testButtons();
	}
}

function buyServer(){
	if($buyServer.isDisabled()){
		addMessage("Insufficient Tech");
	} else {
		tech = tech - serverCost;
		servers++;
		serverCost = serverCost + Math.floor((serverCost / 4));
		serverSpace = servers * techPerServer;
		refreshLabels();
		testButtons();
	}
}
function upgradeServers(){
	if($upgradeServers.isDisabled()){
		addMessage("Insufficient Tech");
	} else {
		tech = tech - serverUpgradeCost;
		techPerServer = techPerServer * 2;
		serverUpgradeCost = Math.floor(serverUpgradeCost * 1.5);
		serverSpace = servers * techPerServer;
		refreshLabels();
		testButtons();
	}
}

function goAlpha(){
	if($goAlpha.isDisabled()){
		addMessage("Insufficient Tech");
	} else {
		didAlpha = true;
		tech = tech - goAlphaCost;
		$goAlpha.disable();
		$goAlpha.hide();
		$goBeta.show();
		$designPanel.show();
		$usersPanel.show();
		$designClick.show();
		$inviteClick.show();
		spaceTest();
		refreshLabels();
		testButtons();
	}
}
function goBeta(){
	if($goBeta.isDisabled()){
		if(tech < goBetaCostTech){
			addMessage("Insufficient Tech");
		} else if(design >= goBetaCostDesign){
			addMessage("Insufficient Design");
		}
	} else {
		didBeta = true;
		tech = tech - goBetaCostTech;
		design = design - goBetaCostDesign;
		$goBeta.disable();
		$goBeta.hide();
		$goLive.show();
		$moneyPanel.show();
		$buzzPanel.show();
		$marketingClick.show();
	}
}

$(document).ready(function(){
	init();
	window.setInterval(function(){

		primaryGrowth();

	}, 1000);
});

function init(){
	refreshLabels();
}

function primaryGrowth(){
	if(tech < serverSpace){
		tech = tech + Math.floor(coders * coderEfficency);
	}
	if(tech > serverSpace){
		tech = serverSpace;
	}
	if(design > (tech * 2)){
		extraDesign = (design - tech) / design;
		thisDesigndecay = 1 - (designDecay * extraDesign);
		//console.log(extraDesign);
		//console.log(decay);
		design =  Math.floor(design * thisDesigndecay);
	} else {
		design = design + Math.floor(designers * designerEfficency);
	}
	if(design > (tech * 2)){
		$design.addClass("over");
	} else {
		$design.removeClass("over");
	}
	if(buzz > ((tech) + (design * 2))){
		extraBuzz = (buzz - (tech + design)) / buzz;
		thisBuzzdecay = 1 - (buzzDecay * extraBuzz);
		//console.log(extraDesign);
		//console.log(decay);
		buzz =  Math.floor(buzz * thisBuzzdecay);
	} else {
		buzz = buzz + Math.floor(marketers * marketerEfficency);
	}
	if(buzz > ((tech) + (design * 2))){
		$buzz.addClass("over");
	} else {
		$buzz.removeClass("over");
	}

	if($inviteClick.isDisabled()){
		inviteClickTimer++;
		if(inviteClickTimer == 5){
			inviteClickTimer = 0;
			$inviteClick.enable();
		}
	}

	//users send invites
	if(users > 0){
		inviteTimer++;
		if(inviteTimer == 5){
			inviteTimer = 0;
			if(users < tech){
				totalResources = (tech + design + buzz);
				distributedResouces = totalResources / 3;
				techDiff = Math.abs(tech - distributedResouces);
				designDiff = Math.abs(design - distributedResouces);
				buzzDiff = Math.abs(buzz - distributedResouces);
				totalDiff = (techDiff + designDiff + buzzDiff) / 3;
				percentOff = (distributedResouces - totalDiff) / distributedResouces;
				console.log("percentOff "+percentOff);
				percentInvite = .05 + (.10 * percentOff);
				console.log("percentInvite "+percentInvite);
				invitesSent = Math.round(percentInvite * users);
				if(invitesSent > 0){
					addMessage(invitesSent+" Invite"+(invitesSent > 1 ? "s" : "")+" Sent");
					sendInvites(invitesSent);
				}
			}
		}
	}

	//make money off users
	if(didBeta && users > 0){
		money = money + Math.round(moneyPerUser * users);
	}

	refreshLabels();
	testButtons();
}

function refreshLabels(){
    $tech.html(pNum(tech));
    $design.html(pNum(design));
    $buzz.html(pNum(buzz));
    $users.html(pNum(users));
    $money.html("$"+pNum((money/100).toFixed(2)));
	$coders.html(pNum(coders));
	$designers.html(pNum(designers));
	$marketers.html(pNum(marketers));
	$coderCost.html(coderCost+" Tech");
	$designerCost.html(designerCost+" Design");
	$marketerCost.html(marketerCost+" Buzz");
	$officeSpace.html(officeSpace);
	$techPerServer.html(pNum(techPerServer));
	$servers.html(pNum(servers));
	$serverCost.html(pNum(serverCost)+" Tech");
	$totalServerSpace.html(pNum(servers*techPerServer));
	$serverUpgradeCost.html(pNum(serverUpgradeCost)+" Tech");
}
function pNum(number){
	return numeral(number).format('0,0');
}

function testButtons(){
	//test buttons

	//code
	if(tech < serverSpace){
		$codeClick.enable();
	} else {
		$codeClick.disable();
	}


	//hire coder
	if(officeSpace > 0 && tech >= coderCost){
		$hireCoder.enable();
	} else {
		$hireCoder.disable();
	}
	//hire designer
	if(officeSpace > 0 && design >= designerCost){
		$hireDesigner.enable();
	} else {
		$hireDesigner.disable();
	}
	//hire marketer
	if(officeSpace > 0 && buzz >= marketerCost){
		$hireMarketer.enable();
	} else {
		$hireMarketer.disable();
	}

	//buy server
	if(tech >= serverCost){
		$buyServer.enable();
	} else {
		$buyServer.disable();
	}
	//upgrade server
	if(tech >= serverUpgradeCost){
		$upgradeServers.enable();
	} else {
		$upgradeServers.disable();
	}

	//buy server
	if(money >= officeCost){
		$buyOffice.enable();
	} else {
		$buyOffice.disable();
	}

	//go alpha
	if(tech >= goAlphaCost){
		$goAlpha.enable();
	} else {
		$goAlpha.disable();
	}
	//go beta
	if(tech >= goBetaCostTech && design >= goBetaCostDesign){
		$goBeta.enable();
	} else {
		$goBeta.disable();
	}
}
function addMessage(msg){
	if($messagePanel.children().length >= 5){
		$messagePanel.children()[4].remove();
	};
	$messagePanel.prepend("<span>"+msg+"</span>");
}
