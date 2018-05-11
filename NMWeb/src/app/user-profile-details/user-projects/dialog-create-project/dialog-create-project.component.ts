import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-dialog-create-project',
  templateUrl: './dialog-create-project.component.html',
  styleUrls: ['./dialog-create-project.component.scss']
})
export class DialogCreateProjectComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    public dialogRef: MatDialogRef<DialogCreateProjectComponent>,

  ) { }

  ngOnInit() {
    this.form = this.formbuilder.group({
      name:"",
      description:"",
      // isPublic: boolean

    });

  }

  submit(form){
    this.dialogRef.close(form); // Any data that is passed to this method call will be emitted in its afterClosed() stream
  }

}
