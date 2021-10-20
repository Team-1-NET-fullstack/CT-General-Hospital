import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FAQsComponent } from '../faqs/faqs.component';
import { TermsConditionsComponent } from '../terms-conditions/terms-conditions.component';

@Component({
  selector: 'app-right-sidenav',
  templateUrl: './right-sidenav.component.html',
  styleUrls: ['./right-sidenav.component.css']
})
export class RightSidenavComponent implements OnInit {
  

    constructor(public dialog: MatDialog) {}
  
    TnCClick() {
      const dialogRef = this.dialog.open(TermsConditionsComponent);
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
    FAQClick() {
      const dialogRef = this.dialog.open(FAQsComponent);
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }

  ngOnInit(): void {
  }

}
