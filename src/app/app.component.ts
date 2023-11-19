import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatchServiceService } from './services/match-service.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { KeywordsComponent } from './components/keywords/keywords.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule,
     TextAreaComponent, KeywordsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  keywordsUrl: string = '/assets/keywords.json';
  title = signal<string>('Resume Matcher');  

  constructor(public matchService: MatchServiceService, private http: HttpClient) {   
    this.http.get<string[]>(this.keywordsUrl).subscribe(res => {      
      this.matchService.keywords = res;      
    });
  }

  ngOnInit(): void {    
  }

  resumeChange(resume: any) {    
    this.matchService.resumeText = resume;
    this.matchService.match();
  }

  jobDescriptionChange(jobDescription: any) {    
    this.matchService.jobDescriptionText = jobDescription;    
    this.matchService.match();
  }
}
