import { Component } from '@angular/core';
import { RoutesPath } from 'src/app/routes';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent {
  pathToMainPage: RoutesPath[] = [RoutesPath.Youtube, RoutesPath.Main];
}
