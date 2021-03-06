import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newKeg = false;
  title = 'Bottle Shop';
  currentKeg = null;

  kegs: Keg[] = [
    new Keg('Fck U Up', 'Deschutes', 6.5, 12),
    new Keg('Pretty OK', 'PBR Equivalent', 2.5, 3.75),
    new Keg('Cat\'s Piss', 'Second Door Over', 7.50, 7)
  ];

  showNewKeg() {
    this.newKeg = true;
  }

  tapNewKeg(params) {
    var newKeg = new Keg(params.name, params.brand, params.price, params.abv);
    this.kegs.push(newKeg);
  }

  editKeg(keg) {
    this.currentKeg = keg;
  }

  doneEditing() {
    this.currentKeg = null;
  }

  subtractPint(keg) {
    console.log(keg);
    keg.pints --;
  }
}
