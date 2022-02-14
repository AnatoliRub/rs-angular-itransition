import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

enum Control {
  Title = 'title',
  Discription = 'discription',
  Image = 'image',
  VideoLink = 'videoLink',
}

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent {
  form: FormGroup = new FormGroup({
    title: this.getTitleController(),
    discription: this.getDiscriptionController(),
    image: this.getImageController(),
    videoLink: this.getVideoLinkController(),
  });

  constructor(private readonly router: Router) {}

  getTitleController(): FormControl {
    return new FormControl('', [Validators.required]);
  }

  getDiscriptionController(): FormControl {
    return new FormControl('', [Validators.required]);
  }

  getImageController(): FormControl {
    return new FormControl('', [Validators.required]);
  }

  getVideoLinkController(): FormControl {
    return new FormControl('', [Validators.required]);
  }

  get title(): AbstractControl | null {
    return this.form.get(Control.Title);
  }

  get discription(): AbstractControl | null {
    return this.form.get(Control.Discription);
  }

  get image(): AbstractControl | null {
    return this.form.get(Control.Image);
  }

  get videoLink(): AbstractControl | null {
    return this.form.get(Control.VideoLink);
  }
}
