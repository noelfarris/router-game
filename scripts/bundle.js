(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
$('section').hide();
console.log('start');
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
        'music': 'turnMusic'
    },
    startLoading: function startLoading() {
        var that = this;
        $('#loading').show();
        console.log('loading');
        setTimeout(function () {
            that.navigate('menu', {
                trigger: true
            });
        }, 4000);
    },
    goMenu: function goMenu() {
        $('#loading').hide();
        $('#leaderboard').hide();
        $('#settings').hide();
        $('#game').hide();
        console.log('show menu');
        $('#menu').show();
    },
    goGame: function goGame() {
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
    goLeaderboard: function goLeaderboard() {
        $('#menu').hide();
        $('#game').hide();
        $('#settings').hide();
        $('#leaderboard').show();
    },
    goSettings: function goSettings() {
        $('#menu').hide();
        $('#game').hide();
        $('#leaderboard').hide();
        $('#settings').show();
    },
    turnMusic: function turnMusic() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }

});

var game = new Router();
Backbone.history.start();

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map