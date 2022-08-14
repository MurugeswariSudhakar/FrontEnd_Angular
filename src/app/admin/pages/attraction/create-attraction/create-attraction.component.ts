import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Attraction } from 'src/app/core/models/attraction';
import { Country,State,City} from 'country-state-city';

import { AttractionService } from 'src/app/core/services/attraction.service';
import { getStatesOfCountry } from 'country-state-city/dist/lib/state';
import { SelectedLocationDetail } from 'src/app/core/models/SelectedLocationDetail';



@Component({
  selector: 'app-create-attraction',
  templateUrl: './create-attraction.component.html',
  styleUrls: ['./create-attraction.component.css']
})
export class CreateAttractionComponent implements OnInit {
  
  public countriesDetails?:any;
  public countryNames?:any;
  public countries?:any;
  public stateNames?:any;
  public cityNames?:any;
 
  selectedLocation: SelectedLocationDetail = new SelectedLocationDetail;

  attractionForm = new FormGroup(
    {
      name: new FormControl('', [Validators.required]),
      description:  new FormControl(),
      address1: new FormControl(),
      address2: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      country: new FormControl(),
      zipcode: new FormControl(),
      website: new FormControl('', [Validators.required]),
      image: new FormControl(),
      user:new FormGroup(
        {
          id:new FormControl()
        }
      )
    }
  );
  constructor(public service:AttractionService,
              private router: Router) { 
      // console.log(Country.getAllCountries());
      this.countriesDetails = Country.getAllCountries();
      this.countryNames = Object.values(Country.getAllCountries());
      this.countries=this.countryNames;
    }

  ngOnInit(): void {
  }

  get fc() {
    return this.attractionForm.controls;
  }

  filterCountries(event:any) {
    let str : any =event.target.value;
    if (typeof str == 'string') {
      this.countryNames = this.countries.filter((a: string)=>a.toLowerCase().startsWith(str.toLowerCase()));
    //  this.countryNames = this.countries.filter((a: string)=>a.toLowerCase().match(str.toLowerCase()));
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
    this.stateNames = getStatesOfCountry(code);
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
  
  onSubmit(){
    const att = JSON.stringify(this.attractionForm.value);
    this.service.addAttraction(att).subscribe((data: any)=>{ 
      console.log(data);
      this.router.navigateByUrl('/admin')
    })
  }

}
