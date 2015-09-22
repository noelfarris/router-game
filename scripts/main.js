'use strict';
$('section').hide()
console.log('start')
var audio = new Audio('../sounds/game.mp3');
audio.play();
var Router = Backbone.Router.extend({
    routes: {
        '': 'startLoading',
        'loading': 'startLoading',
        'menu': 'goMenu',
        'game': 'goGame',
        'leaderboard': 'goLeaderboard',
        'settings': 'goSettings',
        'music': 'turnMusic',
    },
    startLoading: function() {
        var that = this
        $('#loading').show();
        console.log('loading')
        setTimeout(function() {
            that.navigate('menu', {
                trigger: true
            })
        }, 4000);

    },
    goMenu: function() {
        $('#loading').hide();
        $('#leaderboard').hide();
        $('#settings').hide();
        $('#game').hide();
        console.log('show menu');
        $('#menu').show();
    },
    goGame: function() {
        $('#menu').hide();
        $('#leaderboard').hide();
        $('#settings').hide();
        $('#game').show();
        var options = {  
            useEasing: true,
              useGrouping: true,
              separator: ',',
              decimal: '.',
              prefix: '',
              suffix: ''
        };
        var demo = new CountUp("#counter", 0, 100000, 0, 2.5, options);
        demo.start();


    },
    goLeaderboard: function() {
        $('#menu').hide();
        $('#game').hide();
        $('#settings').hide();
        $('#leaderboard').show();
    },
    goSettings: function() {
        $('#menu').hide();
        $('#game').hide();
        $('#leaderboard').hide();
        $('#settings').show();
    },
    turnMusic: function() {
    	if(audio.paused) {
    		audio.play();
    	} else {
    		audio.pause();
    	}
    }

});

var game = new Router();
Backbone.history.start();
