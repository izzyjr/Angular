import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  serverName2 = '';
  servers = ['one', 'two', 'three', 'four'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server ' + this.serverName + ' was created!';
    this.onUpdateServerName(event);
  }

  onUpdateServerName(event: Event) {
    this.serverName2 = (event.target as HTMLInputElement).value;
  }

}















