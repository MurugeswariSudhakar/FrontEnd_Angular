import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { City, Country, State } from 'country-state-city';
import { SelectedLocationDetail } from '../core/models/SelectedLocationDetail';
import { UserService } from '../core/services/user.service';


@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.component.html',
  styleUrls: ['./search-location.component.css']
})
export class SearchLocationComponent implements OnInit {

form : FormGroup;
loading = false;
submitted=false;

  public countriesDetails?:any;
public countryNames?:any;
public countries?:any;
public stateNames?:any;
public cityNames?:any;
selectedLocation: SelectedLocationDetail = new SelectedLocationDetail;

constructor(private formBuilder:FormBuilder,
  private route:ActivatedRoute,
  private router:Router,
  private service:UserService) {
    this.countriesDetails = Country.getAllCountries();
    this.countryNames=Object.values(Country.getAllCountries());
    this.countries=this.countryNames;

   }


  ngOnInit(): void {
  
  this.form=this.formBuilder.group({
    country:[''],
    state:[''],
    city:['']

  });
  }

  get f() {
    return this.form.controls;
  }

  filterCountries(event:any){
    let str: any=event.target.value;
    if(typeof str=='string'){
  
    }
  }
  
  onChangeListState(event : any) {
  
    let sc :any =event.target.value;
  
    console.log("COUNTRY NAME :"+sc);
    this.selectedLocation.country = sc;
    
    let code:any;
    for (const key in this.countryNames) {
      let countryObj = this.countryNames[key];
      if (countryObj.name == sc) 
         code = countryObj.isoCode;
    }
  
    console.log("COUNTRY CODE : "+code);
    this.selectedLocation.countrycode = code;
    this.stateNames = State.getStatesOfCountry(code);
    console.log(this.stateNames);
  }
  
  onChangeListCity(event:any){
    let ss:any = event.target.value;
    this.selectedLocation.state = ss;
    let stateCode:any;
    this.stateNames.forEach((element: { name: any; isoCode: any; }) => {
      if (element.name == ss)
         stateCode = element.isoCode;
    });
      
    console.log("STATE CODE : "+stateCode);
    this.selectedLocation.statecode = stateCode;
  
    this.cityNames = City.getCitiesOfState(this.selectedLocation.countrycode,stateCode);
    console.log(this.cityNames);
  
  }
  
  onChangeStoreDetails(event:any) {
    this.selectedLocation.city = event.target.value;
  }
  
  OnSubmit(){
    console.log(this.selectedLocation.city,this.selectedLocation.state,this.selectedLocation.country);
  }

}
