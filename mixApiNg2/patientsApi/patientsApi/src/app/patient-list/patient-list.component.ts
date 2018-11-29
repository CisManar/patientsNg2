import { Component, OnInit } from '@angular/core';
import { IPatient } from '../models/ipatient';
import { PatientsService } from '../services/patients.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  patients : IPatient[] =[] ;
  cols : any[];
  readonly url = "http://localhost/patientsApi/api/myApi/";
  patientToDelete : IPatient;

  constructor(private pservice:PatientsService,
  private router:Router,
  private http:HttpClient) { }
  
  i:number;
  d:Date;
  da:string;
  ngOnInit() {
   
    this.getAll();
    this.renderTable();

    

  }
  getAll(){
    this.pservice.getPatients().subscribe(data =>{      
      this.patients = data;
      console.log(this.patients)
    },
    error=>{
      console.log("error",error)
    });


  }
  renderTable() {
    this.cols = [
      {field:"fname",header:"First Name"},
      {field:"mname",header:"Middle Name"},
      {field:"lname",header:"last Name"},
      {field:"email",header:"Email"},
      {field:"DOB",header:"Birth Date "},
      {field:"gender",header:"Gender"},
      {field:"lastCheck",header:"Last Check"},
      {field:"status",header:"Status"},
      {field:"Active",header:"Active"},
      {field:"CreatedBy",header:"Created By"},
      {field:"creationDate",header:"Creation Date"},
    ]
  }
  goToForm(id){
    this.router.navigate(['/patient/'+id]);
  }
  Delete(id){
    //delete from api

    this.pservice.deletePatient(id).subscribe(data=>{
      console.log("data:",data)

      },
      error=>{
        console.log("error:",error)
      }    
    );

     //delete from table or patients array
     this.pservice.getPatient(id).subscribe(deleted=>{
      this.patientToDelete = deleted;
      this.patients.splice(this.patients.indexOf(this.patientToDelete));
    })

  }
}
/**
    for( this.i=0;this.i<this.patients.length;this.i++){
      this.d = this.patients[this.i].DOB
      this.da = moment(this.d).format('MM/DD/YYYY');
    }
    console.log(this.patients)
 */