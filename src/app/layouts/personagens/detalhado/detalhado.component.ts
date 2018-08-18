import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '../../../../../node_modules/@angular/material';

@Component({
  selector: 'app-detalhado',
  templateUrl: './detalhado.component.html',
  styleUrls: ['./detalhado.component.scss']
})
export class DetalhadoComponent implements OnInit {

  personagem: any;
  constructor(private dialogRef: MatDialogRef<DetalhadoComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.personagem = data.dados;
  }

  ngOnInit() {
  }
  fechar() {
    this.dialogRef.close();
  }
}
