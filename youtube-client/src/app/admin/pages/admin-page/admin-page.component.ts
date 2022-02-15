import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Control } from '../../models/controls.model';
import { createCard } from '../../ngrx/actions/custom-card.actions';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent {
  form: FormGroup = new FormGroup({
    title: this.getTitleController(),
    description: this.getDescriptionController(),
    image: this.getImageController(),
    videoLink: this.getVideoLinkController(),
  });

  constructor(private readonly router: Router, private readonly store: Store) {}

  createCard(): void {
    this.store.dispatch(
      createCard({
        card: {
          title: this.title?.value,
          description: this.description?.value,
          image: this.image?.value,
          videoLink: this.videoLink?.value,
          publishedAt: Date.now().toString(),
        },
      }),
    );
  }

  getTitleController(): FormControl {
    return new FormControl('Fedor Kotokrad', [Validators.required]);
  }

  getDescriptionController(): FormControl {
    return new FormControl('Murder cat', [Validators.required]);
  }

  getImageController(): FormControl {
    return new FormControl(
      'https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/zjupack6yuikbh4s86fw/cats?fimg-ssr',
      [Validators.required],
    );
  }

  getVideoLinkController(): FormControl {
    return new FormControl('https://www.youtube.com/watch?v=aIdR0Y5g0KY', [Validators.required]);
  }

  get title(): AbstractControl | null {
    return this.form.get(Control.Title);
  }

  get description(): AbstractControl | null {
    return this.form.get(Control.Description);
  }

  get image(): AbstractControl | null {
    return this.form.get(Control.Image);
  }

  get videoLink(): AbstractControl | null {
    return this.form.get(Control.VideoLink);
  }
}
