import { Component, OnInit } from '@angular/core';
import {TourService} from "../../tour.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {Tour} from "../../model/tour";

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent implements OnInit {

  constructor(private tourService:TourService,
              private router:Router) { }

  ngOnInit(): void {
  }
  tourForm: FormGroup = new FormGroup({

    title: new FormControl(),
    price: new FormControl(),
    description: new FormControl()
  })
  saveTour(){
    // @ts-ignore
    const tour: Tour={
      title:this.tourForm.value.title,
      price:this.tourForm.value.price,
      description:this.tourForm.value.description
    }
    console.log(tour);

    // @ts-ignore
    this.tourService.saveTour(tour).subscribe(()=>{
      alert("Ok");
      this.router.navigate(['/'])
      // @ts-ignore
    },error => {
      console.log(error);
    })
  }
}
