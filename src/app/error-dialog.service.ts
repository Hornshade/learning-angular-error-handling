import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class ErrorDialogService {
  opened: boolean = false;

  constructor(private matDialog: MatDialog) {}

  openDialog(message: string, status?: number): void {
    if (!this.opened) {
      this.opened = true;
      const dialogRef = this.matDialog.open(ErrorDialogComponent, {
        data: { message, status },
        maxHeight: '100%',
        maxWidth: '100%',
        width: '300px',
        disableClose: true,
        hasBackdrop: true,
      });

      dialogRef.afterClosed().subscribe(() => {
        this.opened = false;
      });
    }
  }
}
