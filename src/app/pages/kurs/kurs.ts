import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-kurs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kurs.html',
  styleUrls: ['./kurs.scss'],
})
export class Kurs {
   isCertificateOpen = false;

  openCertificate() {
    this.isCertificateOpen = true;
  }

  closeCertificate() {
    this.isCertificateOpen = false;
  }
}
