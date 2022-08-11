import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Attraction } from 'src/app/core/models/attraction';
import { AttractionService } from 'src/app/core/services/attraction.service';

@Component({
  selector: 'app-attraction-list',
  templateUrl: './attraction-list.component.html',
  styleUrls: ['./attraction-list.component.css']
})
export class AttractionListComponent implements OnInit {
  attractions?:any;
  constructor(private service:AttractionService,private route:ActivatedRoute ) {}

  ngOnInit(): void {
    console.log("Entering attracionlist component");
    this.route.paramMap.subscribe(()=>{
      this.service.listAll().subscribe(
        data=>this.attractions=data
      );
    });
    console.log(this.attractions);
  }

}
