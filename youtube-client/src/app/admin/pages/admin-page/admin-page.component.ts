import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  createCard() {}

  getTitleController() {
    return new FormControl('', [Validators.required]);
  }

  getDiscriptionController() {
    return new FormControl('', [Validators.required]);
  }

  getImageController() {
    return new FormControl('', [Validators.required]);
  }

  getVideoLinkController() {
    return new FormControl('', [Validators.required]);
  }

  get title() {
    return this.form.get(Control.Title);
  }

  get discription() {
    return this.form.get(Control.Discription);
  }

  get image() {
    return this.form.get(Control.Image);
  }

  get videoLink() {
    return this.form.get(Control.VideoLink);
  }
}
