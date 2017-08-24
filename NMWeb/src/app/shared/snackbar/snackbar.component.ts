import { Component, OnInit } from '@angular/core';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';

/** Not really a component but this is legacy code ;-) */
@Component({
  selector: 'snack-bar',
  template: ''
})
export class SnackBarComponent implements OnInit {

  constructor( public snackBar: MdSnackBar ) { }

  public showSnackBar(message) {
    let SnackBarRef = this.snackBar.open(message, "DISMISS");
    setTimeout(SnackBarRef.dismiss.bind(SnackBarRef), 2000);
  }

  ngOnInit() {
  }
}
