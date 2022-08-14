// import {Country,State,City} from "country-state-city";
// import { getStatesOfCountry } from "country-state-city/dist/lib/state";
// import { SelectedLocationDetail } from "./SelectedLocationDetail";

// export class LocationSelection {
//   public countriesDetails?:any;
//   public countries?:any;
//   public stateNames?:any;
//   public cityNames?:any;

//   constructor() {
//   }

 

//   getCountries() {
//     this.countries = Object.values(Country.getAllCountries());
//   }

//   getCountryCodeByCountryName(countryName:any) {
//     let code:any;
//     for (const key in this.countries) {
//         let countryObj = this.countries[key];
//         if (countryObj.name == countryName) 
//            code = countryObj.isoCode;
//       }
//      return code;
//   }

//   getStateNamesByCountryName(countryName:any) {
//     this.getCountries();
//     let countryCode = this.getCountryCodeByCountryName(countryName);
//     this.stateNames = getStatesOfCountry(countryCode);
//     return this.stateNames;
//   }

//   getStateCodeByStateName(stateName:any){
//     let stateCode:any;
//     this.stateNames.forEach((element: { name: any; isoCode: any; }) => {
//       if (element.name == ss)
//          stateCode = element.isoCode;
//     });
//   }

//   getCityNames() {

//   }
// }