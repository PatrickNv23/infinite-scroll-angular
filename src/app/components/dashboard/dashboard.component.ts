import { Component, OnInit, inject, TrackByFunction } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from 'src/app/services/api.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-dashboard',
  standalone: true,

  //importamos el infinite scroll module
  imports: [CommonModule, InfiniteScrollModule],

  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  characters: Array<any> = []
  nextUrl: string = '';
  private apiService = inject(ApiService)

  ngOnInit(): void {
    this.apiService.getCharacters().subscribe({
      next: (response) => {
        this.characters = response.results
        this.nextUrl = response.info.next
      }
    })
  }

  onScroll() {
    this.apiService.getCharacters(this.nextUrl).subscribe({
      next: (response) => {

        if (response.info.next && response.info.next !== null) {
          this.nextUrl = response.info.next
          Array.from(response.results).forEach((element) => {
            this.characters = [...this.characters, element]
          })
        }

      }
    })
  }

  onScrollUp() {
    alert('Llegaste al inicio')
  }

  trackByCharacterId: TrackByFunction<any> = (index: number, character: any) => character.id
}
