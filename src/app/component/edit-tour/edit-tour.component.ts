import { Component, OnInit } from '@angular/core';
import {TourService} from "../../tour.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Tour} from "../../model/tour";

@Component({
  selector: 'app-edit-tour',
  templateUrl: './edit-tour.component.html',
  styleUrls: ['./edit-tour.component.css']
})
export class EditTourComponent implements OnInit {
  // @ts-ignore
  tour:Tour;
  id:any;
  constructor(private tourService: TourService,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder,
              private router:Router) {
    this.activatedRoute.paramMap.subscribe((paraMap:ParamMap)=>{
      // @ts-ignore
      this.id = +paraMap.get('id');
      // this.getHouse(this.id);
    })
  }
  tourForm: FormGroup = this.fb.group({

    title: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl('')
  })
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramap => {
      const id = paramap.get('id');
      console.log(id);

      // @ts-ignore
      this.tourService.getById(id).subscribe(result => {
        // @ts-ignore
        this.tour = result;
        console.log(result);
      }, error => {
        console.log(error);
      })
    })
    // @ts-ignore
    this.tour = {
      title: '',
      price: '',
      description: ''
    }
  }
  editTour() {

    // @ts-ignore
    const tour: Tour={

      title:this.tourForm.value.title,
      price:this.tourForm.value.price,
      description:this.tourForm.value.description
    }
    console.log(tour);
    // @ts-ignore
    this.tourService.editTour(this.tour.id,tour).subscribe(()=>{
      alert("Ok");
      this.router.navigate(['/'])
    },error => {
      console.log(error);
    })
  }
}
