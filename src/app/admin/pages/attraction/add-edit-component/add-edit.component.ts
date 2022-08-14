import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Country, City, State } from 'country-state-city';
import { getStatesOfCountry } from 'country-state-city/dist/lib/state';
import { first } from 'rxjs';
import { SelectedLocationDetail } from 'src/app/core/models/SelectedLocationDetail';
import { AttractionService } from 'src/app/core/services/attraction.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  form!: FormGroup;
  id!: string;
  isAddMode!: boolean;
  loading = false;
  submitted = false;
  
  public countriesDetails?:any;
  public countryNames?:any;
  public countries?:any;
  public stateNames?:any;
  public cityNames?:any;
  selectedLocation: SelectedLocationDetail = new SelectedLocationDetail;
 

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service:AttractionService
  ) { 
    this.countriesDetails = Country.getAllCountries();
       console.log(Country.getAllCountries());
      this.countryNames = Object.values(Country.getAllCountries());
      this.countries=this.countryNames;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],

      address1: [''],
      address2: [''],
      city: [''],
      state: [''],
      country: [''],
      zipcode: [''],
      website: ['', Validators.required],
      image: [''],
      user:new FormGroup(
        {
          id:new FormControl('', [Validators.required])
        }
      )
      });

    

   if (!this.isAddMode) {
      this.service.getById(this.id)
          .pipe(first())
          .subscribe(x => this.form.patchValue(x));
   }
  }

   // convenience getter for easy access to form fields
   get f() { return this.form.controls; }

   onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }

    this.loading = true;
    if (this.isAddMode) {
        this.createAttraction();
    } else {
        this.updateAttraction();
    }
  }

  private createAttraction() {
    this.service.addAttraction(this.form.value)
        .pipe(first())
        .subscribe(() => {
            this.router.navigate(['../'], { relativeTo: this.route });
        })
        .add(() => this.loading = false);
 }

  private updateAttraction() {
    this.service.update(this.id, this.form.value)
        .pipe(first())
        .subscribe(() => {
          this.router.navigateByUrl('/admin');
          //this.router.navigate(['../../'], { relativeTo: this.route });
        })
        .add(() => this.loading = false);
  }

  

  filterCountries(event:any) {
    let str : any =event.target.value;
    if (typeof str == 'string') {
     // this.countryNames = this.countries.filter((a: string)=>a.toLowerCase().startsWith(str.toLowerCase()));
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
  
}
