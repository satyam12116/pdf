import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PdfDialogComponent } from './pdf-dialog/pdf-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pdf';
  constructor(private dialog: MatDialog) {}

  openPdfDialog(): void {
    const dialogRef = this.dialog.open(PdfDialogComponent, {
      width: '610px',
      height:'610px',
      data: { pdfUrl: 'https://www.orimi.com/pdf-test.pdf' }
    });
  }
  downloadPDF() {
    const pdfUrl = 'https://www.orimi.com/pdf-test.pdf';
    const link = document.createElement('a');
    link. href = pdfUrl;
    link.download = 'document pdf';
    link.target = '_self';
    document.body. appendChild (link);
    link.click();
    document.body.removeChild(link);
  }
 
 

}
