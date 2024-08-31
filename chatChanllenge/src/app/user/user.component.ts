import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Output() message = new EventEmitter<{ user: string, text: string }>();
  @Input() user: string | undefined;
  mensajes: string | undefined;


  makeMessage() {
    if (this.mensajes && this.user) {
      this.message.emit({ user: this.user, text: this.mensajes });
      this.mensajes = undefined;
    }
  }
}
