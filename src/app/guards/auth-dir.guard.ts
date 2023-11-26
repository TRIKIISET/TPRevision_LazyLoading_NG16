import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authDirGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  let role = localStorage.getItem('role');
  if(role =="Other")
    return true;
  else {
    router.navigate(['/login']);
    return false;
  }
};
