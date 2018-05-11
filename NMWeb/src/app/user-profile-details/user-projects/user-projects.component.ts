import { Component, OnInit, } from '@angular/core';
import { Project } from "./Model/project";
import { MatDialog, MatDialogRef, } from "@angular/material";
import { DialogCreateProjectComponent } from "./dialog-create-project/dialog-create-project.component";
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-user-projects',
  templateUrl: './user-projects.component.html',
  styleUrls: ['./user-projects.component.scss']
})
export class UserProjectsComponent implements OnInit {

  projects: Project[] =[];
  // currentProject = new Project(null, null);

  dialogCreateProjectRef: MatDialogRef<DialogCreateProjectComponent>;

  constructor( public dialog: MatDialog ) { }

  openDialog(): void {
    this.dialogCreateProjectRef = this.dialog.open(DialogCreateProjectComponent, ); // #.open returns a MatDialogreference to the created dialog

    this.dialogCreateProjectRef.afterClosed()
      .pipe(filter(formInput => formInput))
      .subscribe(formInput => {
        const project = new Project(formInput.value.name, formInput.value.description);
        this.projects.push(project);
        console.log(project)
      });
  };



  ngOnInit() {
  }

}
