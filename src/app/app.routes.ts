import { Routes } from '@angular/router';
import { UserManagementComponent } from './user-management/user-management.component';
import { SearchComponent } from './search/search.component';

export const routes: Routes = [
    { path: 'search', component: SearchComponent },
    { path: 'user', component: UserManagementComponent },
    { path: '', component: SearchComponent },
    { path: '**', redirectTo: '' }
];
