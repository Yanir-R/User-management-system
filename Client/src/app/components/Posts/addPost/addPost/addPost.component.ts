import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PostModel } from 'src/app/components/models/postModel';
import { UserModel } from 'src/app/components/models/userModel';
import { PostsUtilsService } from 'src/app/services/postsUtils.service';
import { AppStateService } from 'src/app/services/stateService.service';

@Component({
  selector: 'app-addPost',
  templateUrl: './addPost.component.html',
  styleUrls: ['./addPost.component.css']
})
export class AddPostComponent implements OnInit {
  @Output() cancel: EventEmitter<null> = new EventEmitter();
  
  user: UserModel = null;
  constructor(private state: AppStateService, private postUtils: PostsUtilsService) { }
  ngOnInit(): void {
    this.state.getCurrentUser().subscribe((user) => {
      this.user = user;
    });

  }
  submitPost(value: { title: string, body: string }) {

    const post: PostModel = {
      userId: this.user.id,
      title: value.title,
      body: value.body
    };

    this.postUtils.addNewPost(post).then((resp) => {
      this.cancel.emit();
    });
  }
  cancelEvent() {
    this.cancel.emit();
  }

}
