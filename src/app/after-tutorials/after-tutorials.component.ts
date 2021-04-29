
import { Component, OnInit } from '@angular/core';
import{FormControl, FormGroup, FormBuilder, FormArray, Form} from '@angular/forms';
import { RecycleOrder } from 'src/RecycleOrder';

@Component({
  selector: 'tut',
  templateUrl: './after-tutorials.component.html',
  styleUrls: ['./after-tutorials.component.css']
})
export class AfterTutorialsComponent implements OnInit {

  tipEconomic: any = ['Persoana Fizica','Companie'];
  recycleOrderData : RecycleOrder;

  recycleOrder = this.formBuilder.group({
    nume : [''],
    prenume : [''],
    adresa : this.formBuilder.group({
      strada:[''],
      oras:[''],
      judet:[''],
      telefon:['']  
    }),
    tipEconomicControl:['']
  });
  
  
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
  }

  alegeTip(e){

    this.recycleOrder.get('tipEconomicControl').setValue(e.target.value,{
      onlySelf:true
    })
    console.log(this.recycleOrder.get('tipEconomicControl').value)
   }

  onSubmit(){
    this.recycleOrderData = new RecycleOrder(
      this.recycleOrder.get('nume').value,
      this.recycleOrder.get('prenume').value,
      this.recycleOrder.get('adresa').get('strada').value,
      this.recycleOrder.get('adresa').get('oras').value,
      this.recycleOrder.get('adresa').get('judet').value,
      this.recycleOrder.get('adresa').get('telefon').value,
      this.recycleOrder.get('tipEconomicControl').value
      )
      console.log(JSON.stringify(this.recycleOrderData));
    alert("Tip firma "+this.recycleOrder.get('tipEconomicControl').value + "Nume" + this.recycleOrder.get('nume').value );
  }

 
}
