import { Component } from '@angular/core';
import { ApiService } from './service/api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PrintJasperReportFront';

  constructor(private api: ApiService) {

  }

  onDownload() {
    this.api.download().subscribe(
      response => {

        if (window.navigator.msSaveOrOpenBlob) {
          // IE specific download.
          navigator.msSaveBlob(response, 'reporte2.pdf');
        } else {

          const file = new Blob([response], { type: 'application/pdf' });
          const fileURL = URL.createObjectURL(file);

          const downloadLink = document.createElement('a');
          downloadLink.style.display = 'none';
          document.body.appendChild(downloadLink);
          downloadLink.setAttribute('href', fileURL);
          downloadLink.setAttribute('download', 'reporte2.pdf');
          downloadLink.click();
          document.body.removeChild(downloadLink);
        }

    /** para mostrarlo en una tab diferente */
        // const file = new Blob([response], { type: 'application/pdf' });
        // const fileURL = URL.createObjectURL(file);
        // window.open(fileURL, 'reporte.pdf');
      },
      error => {
        console.error(`Error: ${error.message}`);
      }
    );
  }
}
