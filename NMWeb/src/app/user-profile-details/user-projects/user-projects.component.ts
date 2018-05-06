import { Component, OnInit, } from '@angular/core';
import { Project } from "./Model/project";
import { MatDialog, MatDialogRef, } from "@angular/material";
import { DialogCreateProjectComponent } from "./dialog-create-project/dialog-create-project.component";

@Component({
  selector: 'app-user-projects',
  templateUrl: './user-projects.component.html',
  styleUrls: ['./user-projects.component.scss']
})
export class UserProjectsComponent implements OnInit {

  projects: Project[] =[];

  constructor( public dialog: MatDialog ) { }

  openDialog(): void {
    this.dialog.open(DialogCreateProjectComponent, );

  };

  ngOnInit() {
  }

}
