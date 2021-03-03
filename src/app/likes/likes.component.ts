import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
  numberLikes: number;
  numberDislikes:number
  constructor() { 
    this.numberLikes = 0;
    this.numberDislikes = 0;
  }

  ngOnInit():void {
  }
   likeButtonClick(){
    this.numberLikes++;
  }

  disLikeButton (){
    this.numberDislikes--;
  }

}