import { Component, OnInit } from '@angular/core';
import { MasterDataService } from 'src/app/core/services/master-data/master-data.service';
import { ProcedureMaster } from 'src/app/shared/models/proceduremaster.model';

@Component({
  selector: 'app-procedure',
  templateUrl: './procedure.component.html',
  styleUrls: ['./procedure.component.css'],
})
export class ProcedureComponent implements OnInit {
  procedure: ProcedureMaster[] = []; 
  search:string='';

  constructor(private masterService: MasterDataService) {}

  OnSearch() {
    debugger;
    this.masterService.getAllProcedurebyDesc(this.search).subscribe(
    (procedures) => {
    this.procedure.splice(0,this.procedure.length); //clear array
        // this.procedure.push(...procedures); //add new element
      }
    );
  }
  AddProcedure(){
    this.masterService.createProcedure().subscribe(
      (procedures) => {
           this.procedure.push(...procedures); //add new element
        }
      );
  }
  ngOnInit(): void {
    
  }
}
