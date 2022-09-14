import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  triggerError() {
    try {
      (({} as any).someMethod()); //intentional error
    } catch (error) {
      if (error instanceof Error) {
        error = error;
        throw error;
      }
    }
  }

  triggerModal() {
    throw new HttpErrorResponse({
      error: 'Internal server error',
      status: 500,
    });
  }

  triggerPage() {
    throw new HttpErrorResponse({ error: 'Error 404', status: 404 });
  }
}
