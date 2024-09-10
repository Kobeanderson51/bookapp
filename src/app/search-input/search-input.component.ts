import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'; 
import { ApiHelperService } from '../api-helper.service';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,  
    FormsModule,
    MatIconModule,  
    CommonModule,
    MatListModule,
    MatDividerModule
  ],
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {
  value: string | undefined;
  apiResponse: any;

  constructor(private apiHelperService: ApiHelperService) {}

  search() {
    if (this.value) {
      this.apiHelperService.searchBook(this.value)
        .subscribe((data: any) => {
          this.apiHelperService.setCachedTitleSearchResponse(data);
          this.apiResponse = data;
          console.log(data);
        });
    }
  }
}
