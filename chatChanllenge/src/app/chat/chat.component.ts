import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  @Input() chatMessages: { user: string, text: string }[] = [];
  mensajes: string[] = []; 

  addMessage(data: {nombreUsuario: string, mensaje: string}) {
    const mensajeTrak =  `${data.nombreUsuario}: ${data.mensaje}`;
    this.mensajes.push(mensajeTrak);
  }
  
}
