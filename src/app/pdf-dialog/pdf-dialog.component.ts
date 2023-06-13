import { Component, Inject, OnChanges, SimpleChanges } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pdf-dialog',
  templateUrl: './pdf-dialog.component.html',
  styleUrls: ['./pdf-dialog.component.scss']
})
export class PdfDialogComponent implements OnChanges{
ans!:any;
  constructor(
    public dialogRef: MatDialogRef<PdfDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { pdfUrl: string }
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
  ngOnChanges() {
    setTimeout(()=>{
      this.ans=this.data.pdfUrl;
    },200)
      
  }

}
