import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment'
import {PostModel} from 'src/app/components/models/postModel'

@Injectable({
  providedIn: 'root'
})
export class PostsUtilsService {

constructor(private http: HttpClient) { }
  
  getPostByUserId(userid: number): Promise<PostModel[]> {
    return new Promise<PostModel[]>((resolve) => {
      this.http.get<PostModel[]>(`${environment.urlApi}/posts`).subscribe((resp: PostModel[]) => {
        resolve(resp.filter(x => x.userId === userid))
    })
  })
  }
  
  addNewPost(post: PostModel): Promise<PostModel>{
    return this.http.post<PostModel>(`${environment.urlApi}/posts/${post.userId}`, post).toPromise()
  }
  

}
  

