(function () {

  'use strict';

  angular
    .module('surveyApp')
    .controller('MainController', MainController);

  function MainController($http, surveyConfig) {
    var vm = this;

    vm.save = function () {
      console.log(vm.survey);
      $http.post(surveyConfig.createEndpoint, vm.survey)
        .then(function () {
          vm.survey = {};
          vm.message = 'Thanks for submitting your feedback'
        })

    };

    // The model object that we reference
    // on the  element in index.html
    vm.survey = {};

    // An array of our form fields with configuration
    // and options set. We make reference to this in
    // the 'fields' attribute on the  element
    vm.surveyFields = surveyConfig.fields;
  }

})();
