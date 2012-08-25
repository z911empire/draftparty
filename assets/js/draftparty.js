// JavaScript Document
$(document).ready(function(){
	$('#draft').hide();					   
	prepareForms();
	// launch draft button
	$('button[name="launchdraft"]').click(function() {
		timermaxseconds = $('input[name="drafttimersetup"]').val();
		updateTimer(true);
		addSnakeSlots();
		makeSnake();
		$('#setup').hide();
		$('#draft').show();
	});
	$('button[name="timerstopstart"]').click(function() {
		startstop();											  
	});
	$('button[name="timerreset"]').click(function() {
		//only restart if the timer is started
		if (!timerstarted) {
			updateTimer(true);	
		}
	});
	$('button[name="snakebwd"]').click(function() {
		adjustTheSnake(-1);											  
	});
	$('button[name="snakefwd"]').click(function() {
		adjustTheSnake(1);											  
	});
});

var timermaxseconds = 0;
var timerseconds = 0;
var timerstarted = false;
var timerid = 0;
var snakecount = 18;
var fullsnake = Array();
var onesnake = Array();
var currentpick=0;

function addSnakeSlots() {
	$('input.draftteam').each(function(i) {
		var extra="";
		if (i==0) {
			extra="class='drafting'";
		}
		$('#thesnake').append('<h4 '+extra+'>'+$(this).val()+'</h4>');

		onesnake.push($(this).val());
	});	
}

function makeSnake() {
	for (var i=0;i<snakecount;i++) {
		if (i%2==0) {
			if (i>0) { onesnake.reverse(); }
			for (var j=0;j<onesnake.length;j++) {
				fullsnake.push(onesnake[j]);	
			}
		} else {
			onesnake.reverse();
			for (var j=0;j<onesnake.length;j++) {
				fullsnake.push(onesnake[j]);	
			}				
		}
	}	
}

function adjustTheSnake(i) {
	if (currentpick+i < 0) { return false; }
	currentpick=currentpick+i;
	$('#thesnake').empty();
	for (var i=0;i<onesnake.length;i++) {
		var extra="";
		if (i==0) {
			extra="class='drafting'";
		}
		$('#thesnake').append('<h4 '+extra+'>'+fullsnake[i+currentpick]+'</h4>');		
	}
}

// start/stop timer
function startstop() {
	timerstarted=!timerstarted;
	// do the reverse of timerstarted
	if (timerstarted) {
		timerid = setInterval(function() {
			if (timerseconds<=1) {
				startstop();
				$('.jumbotron').text('DRAFT!');
			} else {
				timerseconds--;
				updateTimer(false);
			}
		},1000);
		$('button[name="timerstopstart"]').removeClass('btn-success').addClass('btn-danger').text('Pause');
	} else {
		clearInterval(timerid);
		$('button[name="timerstopstart"]').removeClass('btn-danger').addClass('btn-success').text('Start');
	}
}

function updateTimer(b) {
	// if b is true, it's a reset
	if (b) {
		timerseconds=timermaxseconds;
	} 
	translateTime();
}

function translateTime() {
	minutes = zeroFill((parseInt(timerseconds/60) % 60),2);
	seconds = zeroFill((timerseconds % 60),2);
	$('.jumbotron').text(minutes+':'+seconds);
}

/* -------------------------- form preparation functions -------------------------- */

function prepareForms() {
	prepareResetButtons();
}

function prepareResetButtons() {
	$('button[name="resetform"]').click(function() {
		$(this).closest('form')[0].reset();
	});
}

/* -------------------------- utility functions -------------------------- */

function enableKeyCode(obj, f, actionKeyCode) {
	$(obj).bind('keydown', function(e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == actionKeyCode) {
			f();
		}
	}); // that...is nice.
}

function zeroFill( number, width )
{
  width -= number.toString().length;
  if ( width > 0 )
  {
    return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number;
  }
  return number + ""; // always return a string
}