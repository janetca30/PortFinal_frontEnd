import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';
import { ImageService } from 'src/app/service/image.service';
import { Storage, getDownloadURL, list, ref} from '@angular/fire/storage';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.css']
})
export class EditSkillsComponent implements OnInit{
  skills : Skills = null;
  imageUrl: string;
  name: string;

  constructor(private skillsService: SkillsService, 
    private activatedRouter: ActivatedRoute, 
    private router: Router,
    public imageService: ImageService,
    private storage: Storage
    ){}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillsService.detail(id).subscribe(
      data =>{
        this.skills = data;
        this.getImages(this.skills.imgS);
      }, err =>{
        alert("Error al modificar skills");
        this.router.navigate(['']);
      }
    )
  }


  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skills.imgS = this.imageService.url;
    this.skillsService.update(id, this.skills).subscribe(
      data => {
        this.router.navigate(['']);
      },err =>{
        alert("Error al modificar skills");
        this.router.navigate(['']);
      }
    )
    console.log(id);
  }
  
  uploadImage($event: any) {
    const timestamp = new Date().getTime(); // obtener el timestamp actual
    const name = `educacion_${this.name}_${timestamp}`; // agregar el timestamp al nombre del archivo
    this.imageService.uploadImage($event, name);
  }
  
  

  getImages(name: string) {
    const imagesRef = ref(this.storage, `imagen`);
    list(imagesRef)
      .then(async response => {
        for(let item of response.items){
          this.imageUrl = await getDownloadURL(item);
        }
      })    
      .catch(error => console.log(error))      
  }
}

