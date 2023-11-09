import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/account/auth.service';
import { AddreviewService } from 'src/app/services/Reviews/addreview.service';

@Component({
  selector: 'app-addreviews',
  templateUrl: './addreviews.component.html',
  styleUrls: ['./addreviews.component.scss'],
})
export class AddreviewsComponent {
  reviewgroup: FormGroup;
  now = new Date().toISOString().slice(0, 19);

  constructor(
    private formBuilder: FormBuilder,
    private reviewservice: AddreviewService,
    private authservice: AuthService
  ) {
    this.reviewgroup = this.formBuilder.group({
      rating: ['', Validators.required],
      reviewText: ['', Validators.required],
      datePosted: [this.now, Validators.required],
    });
  }
  AddnewReview() {
    const reviewdata = new FormData();
    for (const key in this.reviewgroup.value) {
      reviewdata.append(key, this.reviewgroup.value[key]);
    }
    const userid = this.authservice.getUserId();
    const username = this.authservice.getUserName();
    reviewdata.append('userId020', userid);
    reviewdata.append('userName', username);

    this.reviewservice.addreviews(reviewdata).subscribe(
      (response) => {
        console.log('review created:', response);
      },
      (error) => {
        console.error('Error creating review:', error);
      }
    );
  }
}
