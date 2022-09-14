import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorDialogService } from './error-dialog.service';
import { Router } from '@angular/router';

@Injectable()
export class CustomErrorHandlerService implements ErrorHandler {
  constructor(
    private snackbar: MatSnackBar,
    private zone: NgZone,
    private errorDialogService: ErrorDialogService,
    public router: Router
  ) {}

  handleError(error: any) {
    if (!(error instanceof HttpErrorResponse)) {
      error = error.rejection;
    }
    this.zone.run(() => {
      if (error?.status === 404) {
        this.router.navigate(['/error']);
      } else if (error?.status === 500) {
        this.errorDialogService.openDialog(
          error?.message || 'Undefined client error',
          error?.status
        );
      } else
        this.snackbar.open('Error was detected!', 'Close', {
          duration: 2000,
        });
    });

    console.warn('Caught by Custom Error Handler: ', error);
  }
}
