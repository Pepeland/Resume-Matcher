import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchServiceService {
  resumeText: string = '';
  jobDescriptionText: string = '';

  matchedKeywords = signal(new Map());
  unmatchedKeywords = signal(new Map());

  resumeKeywords: string[] = [];
  keywords: string[] = [];

  constructor() {     
  }

  extractResumeKeywords() {
    this.resumeKeywords = [];
    const txt = this.resumeText.toLocaleLowerCase();

    this.keywords.forEach((keyword) => {
      const regex = new RegExp(keyword.toLowerCase(), "g");
      const matches = txt.match(regex);
      const count = matches ? matches.length : 0;
  
      if (count)               
        this.resumeKeywords.push(keyword.trim().replace(/\\/g, "").replace(/,$/, ''));      
    });
  }

  match() {
    this.extractResumeKeywords();
    this.matchedKeywords.set(this.matchAndCount(this.jobDescriptionText, this.resumeKeywords));
    this.unmatchedKeywords.set(this.matchAndCount(this.jobDescriptionText, this.keywords.filter(k => !this.resumeKeywords.includes(k))));
  }

  matchAndCount(text: string, keywords: string[]) {
    const map = new Map();
    const txt = text.toLocaleLowerCase();
  
    keywords.forEach((keyword) => {
      const regex = new RegExp(keyword.toLowerCase(), "g");
      const matches = txt.match(regex);
      const count = matches ? matches.length : 0;
  
      if (count)
       map.set(keyword.trim().replace(/\\/g, "").replace(/,$/, ''), count);
    });
  
    return map;
  }

}
