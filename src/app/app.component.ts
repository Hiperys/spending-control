import {Component} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses$;
  coursesList$: AngularFireList<{}>;
  course$;
  author$;

  constructor(db: AngularFireDatabase) {
    this.coursesList$ = db.list('/courses');
    this.courses$ = db.list('/courses').valueChanges();
    this.course$ = db.object('/courses/1').valueChanges();
    this.author$ = db.object('/authors/1').valueChanges();
    console.log(this.coursesList$);
    console.log(this.courses$);
  }

  add(course: HTMLInputElement) {
    this.coursesList$.push(course.value);
    course.value = '';
  }
}
