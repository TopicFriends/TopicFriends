import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {
  lastUpdate: string = "10 de Abril de 2018";

  columnsToDisplay = ['identificador', 'definicion', 'duracion'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}

export interface Element {
  identificador: string;
  definicion: string;
  duracion: number;

}

const ELEMENT_DATA: Element[] = [
  {identificador: "HotJar 	_hjClosedSurveyInvites",
    definicion: "Hotjar cookie. This cookie is set once a visitor interacts with a Survey " +
    "invitation modal popup. It is used to ensure that the same invite does not re-appear if it " +
    "has already been shown.",
  duracion: 365},
  {identificador: "HotJar _hjDonePolls",
    definicion: "Hotjar cookie. This cookie is set once a visitor completes a poll using the Feedback" +
    " Poll widget. It is used to ensure that the same poll does not re-appear if it has already been filled in.",
    duracion: 365},
  {identificador: "HotJar _hjMinimizedPolls",
    definicion: "Hotjar cookie. This cookie is set once a visitor minimizes a Feedback Poll widget. It is used to " +
    "ensure that the widget stays minimizes when the visitor navigates through your site.",
    duracion: 365},
  {identificador: "HotJar _hjDoneTestersWidgets",
    definicion: "Hotjar cookie. This cookie is set once a visitor submits their information in the Recruit User " +
    "Testers widget. It is used to ensure that the same form does not re-appear if it has already been filled in.",
    duracion: 365},
  {identificador: "HotJar _hjMinimizedTestersWidgets",
    definicion: "Hotjar cookie. This cookie is set once a visitor minimizes a Recruit User Testers widget. It is " +
    "used to ensure that the widget stays minimizes when the visitor navigates through your site.",
    duracion: 365},
  {identificador: "HotJar _hjIncludedInSample",
    definicion: "Hotjar cookie. This cookie is set once a visitor interacts with a Survey " +
    "invitation modal popup. It is used to ensure that the same invite does not re-appear if it " +
    "has already been shown.",
    duracion: 365},
  {identificador: "a18df_firebaseapp",
    definicion: " 	Firebase. Esta cookie se establece unicamente para poder completar el servicio de login" +
    " entre Google y nuestros servidores en firebase, también ofrecido por Google.",
    duracion: 365},
  {identificador: "Hc_user_facebook",
    definicion: "Facebook cookie. Esta cookie se establecerá en caso que hagas click en el botón MeGusta de facebook," +
    "para recordar tu selección.",
    duracion: 365}
]
