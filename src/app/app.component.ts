import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-app';
  students= [
    {
      name:'duongbkt',
      id:'PH13295',
      age:21,
      status:0
    },
    {
      name:'duongbkt2',
      id:'PH13296',
      age: 20,
      status:1
    },
    {
      name:'duongbkt3',
      id:'PH13297',
      age: 18,
      status:1
    }
  ];
  champs=[
    {
      name:"yasuo",
      dame:1000,
      defend:30,
      speed:50,
      price:6300,
      avatar:"https://cdn.bongdaplus.vn/Assets/Media/2020/07/08/66/yasuo0.jpg"
    },
    {
      name:"zed",
      dame:400,
      defend:30,
      speed:50,
      price:6300,
      avatar:"https://cdn.bongdaplus.vn/Assets/Media/2020/07/08/66/yasuo0.jpg"
    },
    {
      name:"zig",
      dame:700,
      defend:20,
      speed:50,
      price:6300,
      avatar:"https://cdn.bongdaplus.vn/Assets/Media/2020/07/08/66/yasuo0.jpg"
    }
  ]

  //Sự kiện

  showStatus= true;

  inputValue={
    name:'',
    dame:'',
    defend:'',
    speed:'',
    price:'',
    avatar:''
  }
  
  onClick(){
    // console.log(1);
    this.showStatus= !this.showStatus;
  }

  onInput(event:any, key:'name'|'avatar'|'dame'|'defend'|'speed'|'price'){
    this.inputValue[key] = event.target.value
  }
  // onInputName(event:any ){
  //   this.inputValue['name'] = event.target.value
  // }
  // onInputAvatar(event:any){
  //   this.inputValue['avatar'] = event.target.value
  // }

  onSubmit(){
    console.log(this.inputValue);
    this.champs.push({
      ...this.inputValue,
      dame:+this.inputValue.dame,
      defend:+this.inputValue.defend,
      speed:+this.inputValue.speed,
      price:+this.inputValue.price,
    });

    this.inputValue={
      name:'',
      dame:'',
      defend:'',
      speed:'',
      price:'',
      avatar:''
    }
  }
  
  
}
