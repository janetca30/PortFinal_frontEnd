import { Component, OnInit } from '@angular/core';
import { persona } from '../../../model/persona';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from 'src/app/service/persona.service';
import { ImageService } from 'src/app/service/image.service';
import { Storage, getDownloadURL, listAll, ref, uploadBytes} from '@angular/fire/storage'



@Component({
  selector: 'app-edit-acercade',
  templateUrl: './edit-acercade.component.html',
  styleUrls: ['./edit-acercade.component.css']
})
export class EditAcercadeComponent implements OnInit {
  persona: persona = null;
  imageUrl: string;
  name: string;
  
  constructor(private activatedRouter: ActivatedRoute,
    private personaService: PersonaService, 
    private router: Router,
    public imageService: ImageService,
    private storage: Storage) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data =>{
        this.persona = data;
      }, err =>{
        alert("Error al modificar persona");
        this.router.navigate(['']);
      }
    ),
    this.getImages('')  
  }
  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.persona.img = this.imageService.url
    this.personaService.update(id, this.persona).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar persona");
        this.router.navigate(['']);
      }
    )  
  }
  uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "perfil_"+ id;
    this.imageService.uploadImage($event, name)
    }
    
    getImages(name: string) {
      const imagesRef = ref(this.storage, `imagen/`);
      listAll(imagesRef)
        .then(async response => {
          for(let item of response.items){
            this.imageUrl = await getDownloadURL(item);
          }
        })    
        .catch(error => console.log(error))      
    }
    
  }
