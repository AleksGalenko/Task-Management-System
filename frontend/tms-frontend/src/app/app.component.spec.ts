import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Task Management System';  

  backendMessage: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.testBackend().subscribe((response: string) => {
      this.backendMessage = response;
    });
  }
}
