import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../../controller/service/client.service';

@Component({
  selector: 'app-client-creat',
  templateUrl: './client-creat.component.html',
  styleUrls: ['./client-creat.component.css']
})
export class ClientCreatComponent implements OnInit {
  click: boolean = false;


  constructor(private clientService: ClientService) { }
  get client() {
    return this.clientService.client;
  }

  ngOnInit() {
  }

  saveClient() {
    this.clientService.saveClient();
    this.click = true;
  }
}
