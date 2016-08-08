(function () {

  'use strict';

  angular
    .module('surveyApp')
    .constant('surveyConfig',
      {
        createEndpoint: '@@createEndpoint',
        fields: [
          {
            key: 'name',
            type: 'input',
            templateOptions: {
              type: 'text',
              label: 'Name',
              placeholder: '',
              options: [
                { name: 'Yes', value: 'yes' },
                { name: 'No', value: 'no' }
              ],
              required: true
            }
          },
          {
            key: 'rating',
            type: 'radio',
            templateOptions: {
              label: 'What is your rating',
              required: true,
              options: [
                {
                  "name": "Low",
                  "value": "low"
                },
                {
                  "name": "Medium",
                  "value": "medium"
                },
                {
                  "name": "High",
                  "value": "high"
                },
              ]
            }
          }
        ]
      }
    );
})();
