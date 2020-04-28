/*
Author: Anas Nasrallah.
Purpose: Random User Page Generator.
Date: 27.04.20
*/

/* This file represents the Renderer class, which handles rendering
the data. */

class Renderer {

    renderMainUser = function (mainUser) {
        const source = $("#mainUser-temp").html();
        const template = Handlebars.compile(source);
        const mainUserHTML = template(mainUser);
        $(".user-container").empty();
        $(".user-container").append(mainUserHTML);
    }

    renderFriends = function (friends) {
        const source = $("#friends-temp").html();
        const template = Handlebars.compile(source);
        const friendsUserHTML = template({ friends });
        $(".friends").empty();
        $(".friends").append(friendsUserHTML);
    }

    renderQuote = function (quote) {
        const source = $("#quote-temp").html();
        const template = Handlebars.compile(source);
        const quoteHTML = template({ quote });
        $(".quote-container").empty();
        $(".quote-container").append(quoteHTML);
    }

    renderPokemon = function (pokemon) {
        const source = $("#pokemon-temp").html();
        const template = Handlebars.compile(source);
        const pokemonHTML = template(pokemon);
        $(".pokemon-container").empty();
        $(".pokemon-container").append(pokemonHTML);
    }

    renderMeatText = function (meatText) {
        const source = $("#meatText-temp").html();
        const template = Handlebars.compile(source);
        const meatHTML = template({ meatText });
        $(".meat-container").empty();
        $(".meat-container").append(meatHTML);
    }

    renderSaved = function(savedUsers){
        const source = $("#saved-temp").html();
        const template = Handlebars.compile(source);
        const savedHTML = template({savedUsers});
        $(".saved-users").empty();
        $(".saved-users").append(savedHTML);
    }

    render = function (data) {
        this.renderMainUser(data.mainUser);
        this.renderFriends(data.friends);
        this.renderQuote(data.quote);
        this.renderPokemon(data.pokemon);
        this.renderMeatText(data.meatText);
        this.renderSaved(JSON.parse(localStorage.users));
    }

}