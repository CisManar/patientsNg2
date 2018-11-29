import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPatient } from '../models/ipatient';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { IStatus } from './istatus';
import { HttpClient } from '@angular/common/http';
import { PatientsService } from '../services/patients.service';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {

  constructor(private route:ActivatedRoute , 
    private fbuilder:FormBuilder,
    private http:HttpClient,
    private pservice:PatientsService,
    private router : Router
  ) { 
    this.getId()
  }

  id:string;
  patient:IPatient;
  patientsForm: FormGroup;
  BirthDate:Date=null;
  lastCheck:Date=null;
  creationDate:Date=null;
  statusItems : IStatus[];
  submitted = false;
  selectedStatus=0;
  isActive: boolean = false;

  readonly url = "http://localhost/patientsApi/api/myApi/";

  ngOnInit() {
    this.initFormComponents();
    this.generateStatusItems();

    if(this.id !== "null"){
      this.fillForm();
    }
  }
  
  getId(){
    this.route.params.subscribe(params=>{
      this.id = params.id;

    })
  }
  initFormComponents(){
    this.patientsForm = this.fbuilder.group({
      fname:['',[
        Validators.required,
        Validators.minLength(5)
      ]],
      mname:['',[
        Validators.required,
      ]],
      lname:['',[
        Validators.required,
        Validators.minLength(5)
      ]],
      email:['',[Validators.required,Validators.email]],
      DOB:[''],
      gender:['',Validators.required],
      lastCheck:['',Validators.required],
      status:['',Validators.required],
      Active:[''],
      creationDate:['',Validators.required],
    })
  }

  generateStatusItems(){
    this.statusItems =  [
      { val: 0, name: 'Draft' },
      { val: 1, name: 'Saved' },
      { val: 2, name: 'Deleted' },
      { val: 3, name: 'Canceled' }
    ]
  }
  fillForm(){

    this.pservice.getPatient(this.id).subscribe(data=>{
      this.patient = data;
      this.creationDate=this.patient.creationDate;
      this.BirthDate = new Date(this.patient.DOB);
      this.lastCheck = new Date(this.patient.lastCheck)
      this.patientsForm.setValue({
        fname:this.patient.fname,
        mname:this.patient.mname,
        lname:this.patient.lname,
        email:this.patient.email,
        DOB:this.BirthDate,
        gender:this.patient.gender,
        lastCheck:this.lastCheck,
        status:this.patient.status,
        Active:this.patient.Active,
        creationDate:this.creationDate
      })
    })
  }

  onSubmit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.patientsForm.invalid) {
        return;
    }

    this.patient = this.patientsForm.value;
    this.patient.status = this.selectedStatus;
    if(this.id !== "null"){
      this.editPatient(this.id,this.patient)
    }
    else{
      this.addPatient(this.patient);
    }
    
    this.router.navigate(['/patients']);
  }

  onChange(){
    this.selectedStatus = this.patientsForm.controls['status'].value.val;
  }
  addPatient(patient){
    this.pservice.addPatient(patient).subscribe(data=>{
      console.log(data);
    })
  }
  editPatient(id,patient){
    this.pservice.updatePatient(id,patient).subscribe(data=>{
      console.log(data);
    })
  }
 }
