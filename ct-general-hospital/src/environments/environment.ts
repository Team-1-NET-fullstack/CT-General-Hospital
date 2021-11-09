// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  jwtApiBaseUrl: 'http://localhost:2664',
  userManagementApiBaseUrl: 'http://localhost:63212',
  // appointmentSchedulerApiBaseUrl: 'http://localhost:9032/api/Appointments/', // Local Prod
  appointmentSchedulerApiBaseUrl:
    'https://localhost:44306/api/Appointments/', // Local Debug
    allergyApiBaseUrl: 'http://localhost:9001/api/AllergyMasters/',
    medicationApiBaseUrl: 'http://localhost:9001/api/MedicationMasters/',
    diagnosisApiBaseUrl: 'http://localhost:9001/api/DiagnosisMasters/',
    procedureApiBaseUrl: 'http://localhost:9001/api/ProcedureMasters/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
