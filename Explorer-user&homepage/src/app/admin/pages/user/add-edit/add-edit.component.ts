import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { Country,City,State } from 'country-state-city';
import { first } from 'rxjs';
import { SelectedLocationDetail } from 'src/app/core/models/SelectedLocationDetail'
@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
form : FormGroup;
id:string;
isAddMode:boolean;
loading = false;
submitted = false;

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
  this.id=this.route.snapshot.params['id'];
  this.isAddMode=!this.id;

  this.form=this.formBuilder.group({
          firstname:['', Validators.required],
           lastname:[''],
           state:[''],
           country:[''],
           hobbies:[''],
           personaldetails:[''],
           profilephoto:[''],
           signup:new FormGroup(
            {
              email:new FormControl('',[Validators.required]),
              password:new FormControl()
            }
           )

  });


  if(!this.isAddMode){
    this.service.getById(this.id)
    .pipe(first())
    .subscribe(x=>this.form.patchValue(x));
  }
  
  }

get f() {
  return this.form.controls;
}

OnSubmit(){
  this.submitted = true;

  if(this.form.invalid){
    return;
  }

  this.loading = true;
  if(this.isAddMode){
    this.updateUser();
      }else{
        this.updateUser();
      }
}
private createUser(){
  this.service.addUser(this.form.value)
  .pipe(first())
  .subscribe(()=>{
    this.router.navigate(['../'],{relativeTo:this.route});
  }) .add(() => this.loading=false);
}

private updateUser(){
  this.service.update(this.id, this.form.value)
  .pipe(first())
  .subscribe(()=>{
    this.router.navigateByUrl('/admin');
  }) .add(()=>this.loading=false);
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

}
