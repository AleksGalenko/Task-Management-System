import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule] 
})
export class AppComponent implements OnInit {
  title: string = 'Task Management System';
  backendMessage: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.testBackend().subscribe((response: string) => {
      this.backendMessage = response;
    });
  }
}
