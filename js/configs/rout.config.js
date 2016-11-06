(function () {
    'use strict';
    angular
        .module("ui.router")
        .config(RoutingConfig);

    function RoutingConfig($stateProvider) {
        var parent = {
            name: 'parent',
            url: '',
            template: '',
            abstract: true
        }
        var state = {
            name: 'main',
            url: '',
            template: 'hello'
        }

        var profState = {
            name: 'profile',
            url: '/profile',
            templateUrl: '../../templates/prof.html'
        }

        var messageState = {
            name: 'messages',
            url: '/messages',
            templateUrl: "../../templates/message.html"
        }
        var listState = {
            name: 'list',
            url: '/list',
            templateUrl: "../../templates/list.html"
        }
        $stateProvider.state(state);
        $stateProvider.state(profState);
        $stateProvider.state(messageState);
        $stateProvider.state(listState);
    }

})();
