import { Component } from '@angular/core';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import {
  faAngleDown,
  faAngleUp,
  faBorderAll,
  faBox,
  faClock,
  faGear,
  faHeart,
  faUsers,
  faWaveSquare,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
})
export class BoardsComponent {
  faBox = faBox;
  faWaveSquare = faWaveSquare;
  faTrello = faTrello;
  faClock = faClock;
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faHeart = faHeart;
  faBorderAll = faBorderAll;
  faUsers = faUsers;
  faGear = faGear;

  items = [
    {
      label: 'Boards',
      items: [
        {
          label: 'My Boards',
        },
        {
          label: 'My Boards',
        },
      ],
    },
    {
      label: 'Boards 2 ',
      items: [
        {
          label: 'My Boards2 ',
        },
      ],
    },
    {
      label: 'Boards 3',
      items: [
        {
          label: 'My Boards 3 ',
        },
        {
          label: 'My Boards 3',
        },
        {
          label: 'My Boards 3',
        },
      ],
    },
  ];

}
