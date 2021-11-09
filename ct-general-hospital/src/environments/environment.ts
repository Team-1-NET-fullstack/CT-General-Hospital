// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // appointmentSchedulerApiBaseUrl: 'http://localhost:9032/api/Appointments/', // Aditya Local Prod
  appointmentSchedulerApiBaseUrl: 'https://localhost:44306/api/Appointments/', // Aditya Local Debug
  // allergyApiBaseUrl: 'http://localhost:9001/api/AllergyMasters/', // Bhavya Mongo Master Table
  allergyApiBaseUrl: 'http://localhost:59523/api/Allergies/', // Aparna SQL Allergy table
  medicationApiBaseUrl: 'http://localhost:9001/api/MedicationMasters/', // Bhavya Mongo Master Table
  diagnosisApiBaseUrl: 'http://localhost:9001/api/DiagnosisMasters/', // Bhavya Mongo Master Table
  procedureApiBaseUrl: 'http://localhost:9001/api/ProcedureMasters/', // Bhavya Mongo Master Table
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
