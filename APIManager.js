/*
Author: Anas Nasrallah.
Purpose: Random User Page Generator.
Date: 27.04.20
*/

/* This file represents the API Manager class which handles making the 
requests and updating the data of the programme. This class is implemented
using the singleton design template. */

const NUM_OF_POKEMONS = 807;
const NUM_OF_FRIENDS = 6;

class APIManager {

    constructor() {
        if (APIManager.instance instanceof APIManager) {
            return APIManager.instance;
        }
        this.data = {};
        APIManager.instance = this;
    }

    getMainUser = function () {
        $.ajax({
            method: "GET",
            url: 'https://randomuser.me/api/?results=1',
            success: function (data) {
                const mainUser = {
                    firstName: data.results[0].name.first,
                    lastName: data.results[0].name.last,
                    pic: data.results[0].picture.medium,
                    city: data.results[0].location.city,
                    state: data.results[0].location.state
                };
                APImanager.data.mainUser = mainUser;
            },
            error: function () {
                alert('Seems that we have a problem. Try again later');
            }
        })
    }

    getFriends = function () {
        $.ajax({
            method: "GET",
            url: `https://randomuser.me/api/?results=${NUM_OF_FRIENDS}`,
            success: function (data) {
                const friends = [];
                for (let i = 0; i < data.results.length; i++) {
                    const friend = {
                        firstName: data.results[i].name.first,
                        lastName: data.results[i].name.last
                    };
                    friends.push(friend);
                }
                APImanager.data.friends = friends;
            },
            error: function () {
                alert('Seems that we have a problem. Try again later');
            }
        })
    }

    getQuote = function () {
        $.ajax({
            method: "GET",
            url: 'https://api.kanye.rest',
            success: function (data) {
                const quote = data.quote;
                APImanager.data.quote = quote;
            },
            error: function () {
                alert('Seems that we have a problem. Try again later');
            }
        })
    }

    getPokemon = function () {
        const pokeNumber = Math.floor(Math.random() * NUM_OF_POKEMONS) + 1;
        $.ajax({
            method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${pokeNumber}/`,
            success: function (data) {
                const imageURL = data.sprites.front_default;
                const pokeName = data.name;
                const pokemon = {
                    name: pokeName,
                    imageURL: imageURL
                };
                APImanager.data.pokemon = pokemon;
            },
            error: function () {
                alert('Seems that we have a problem. Try again later');
            }
        })
    }

    getMeatText = function () {
        $.ajax({
            method: "GET",
            url: 'https://baconipsum.com/api/?type=all-meat&paras=1&start-with-lorem=0',
            success: function (data) {
                const meatText = data[0];
                APImanager.data.meatText = meatText;
            },
            error: function () {
                alert('Seems that we have a problem. Try again later');
            }
        })
    }

    loadData = function () {
        this.getMainUser();
        this.getFriends();
        this.getQuote();
        this.getPokemon();
        this.getMeatText();
    }
}
