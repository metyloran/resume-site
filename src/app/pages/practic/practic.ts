import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-practic',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './practic.html',
  styleUrls: ['./practic.scss'],
})
export class Practic {
isCertificateOpen = false;

  openCertificate() {
    this.isCertificateOpen = true;
  }

  closeCertificate() {
    this.isCertificateOpen = false;
  }
}
