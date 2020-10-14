import { Component, OnInit } from '@angular/core';
import {PostModel } from 'src/app/components/models/postModel'
import {PostsUtilsService} from 'src/app/services/postsUtils.service'
import { AppStateService } from 'src/app/services/stateService.service';
import { UserModel } from '../../models/userModel';

@Component({
  selector: 'app-Posts',
  templateUrl: './Posts.component.html',
  styleUrls: ['./Posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: PostModel[]= [];
  constructor(private utils: PostsUtilsService, private state: AppStateService) { }
 
  ngOnInit(): void {
   this.state.getCurrentUser().subscribe((user: UserModel) => {
     if (!user) {
       return;
     }
     this.utils.getPostByUserId(user.id).then((posts: PostModel[]) => {
       this.posts = posts;
     });
    })
   
  }
  }


