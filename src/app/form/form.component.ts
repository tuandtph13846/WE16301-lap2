import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onRemove(id:number){
    // console.log(id);
    const confirm= window.confirm("Bạn có muốn xóa không???")
    if(confirm){
      this.users = this.users.filter(item=>item.id!==id)
    }
  }

  onEdit(user:any, id:number){
    this.inputValues= user.find((item:any)=>item.id === id)
  }
  inputValues={
    id:0,
    name:'',
    age:0,
    email:'',
    sdt:0
  }
  
  users=[
    {
      id:1,
      name:'duong',
      age:21,
      email:'duongbktph13295@fpt.edu.vn',
      sdt: 334030301
    },
    {
      id:2,
      name:'duongggggg',
      age:21,
      email:'duongbktph13295@fpt.edu.vn',
      sdt: 334030301
    }
  ]

  onSubmit(userForm:NgForm){
    // console.log(formData);
    const newUsers= this.users
    .map(user=>user.id)
    .sort((a:number, b:number)=>b-a)

    const maxId= newUsers[0]
    if(userForm.value.id===0){
      this.users.push({
        ...userForm.value,
        id:maxId+1
      })
    }else{
      this.inputValues=({
        ...userForm.value,
        id:this.inputValues.id
      })
    }
    userForm.resetForm({
      id:0,
      name:'',
      age:0,
      email:'',
      sdt:0
    })
  }
  
}
