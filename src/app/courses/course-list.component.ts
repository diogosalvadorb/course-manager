import{ Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit{

    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '',
                price: 99.99,
                code: 'XPS-8706',
                duration:120,
                rating: 4.9,
                releaseDate: 'Outubro, 30, 2020'
            },
            {
                id: 2,
                name: 'Angular: HTTP',
                imageUrl: '',
                price: 45.85,
                code: 'LKL-1095',
                duration:80,
                rating: 4,
                releaseDate: 'Novembro, 2, 2020'
            }
        ]
    }
}