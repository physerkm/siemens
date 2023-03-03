import { Component } from '@angular/core';
import { SubjectProviderService } from '../subject-provider.service';

@Component({
  selector: 'app-subscriber2',
  templateUrl: './subscriber2.component.html',
  styleUrls: ['./subscriber2.component.css']
})
export class Subscriber2Component {
  constructor(private subjectProviderService: SubjectProviderService) {
    this.subjectProviderService.mysubject.subscribe({
      next: (data) => console.log("subscriber2", data),
      complete: () => console.log("Data publishing has ended for subscriber2"),
      error: (err) => { console.log(err) }

}