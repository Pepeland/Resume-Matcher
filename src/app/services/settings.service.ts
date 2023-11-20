import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor() { }

  setLatestResume(resume: string) {
    localStorage.setItem('resume', resume);
  }

  getLatestResume(): string {
    return localStorage.getItem('resume') || '';
  }

  setLatestJobDescription(JobDescription: string) {
    localStorage.setItem('JobDescription', JobDescription);
  }

  getLatestJobDescription(): string {
    return localStorage.getItem('JobDescription') || '';
  }
}
