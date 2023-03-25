import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RedSocial } from 'src/app/model/redsocial';
import { RedsocialService } from 'src/app/service/redsocial.service';
import { ImageService } from 'src/app/service/image.service';
import { Storage, getDownloadURL, list, ref} from '@angular/fire/storage';

@Component({
  selector: 'app-edit-red',
  templateUrl: './edit-red.component.html',
  styleUrls: ['./edit-red.component.css']
})
export class EditRedComponent implements OnInit{
  redsocial : RedSocial = null;
  imageUrl: string;
  name: string;

  constructor(private redsocialService: RedsocialService, 
    private activatedRouter: ActivatedRoute, 
    private router: Router,
    public imageService: ImageService,
    private storage: Storage
    ){}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.redsocialService.detail(id).subscribe(
      data =>{
        this.redsocial = data;
        this.getImages(this.redsocial.icono);
      }, err =>{
        alert("Error al modificar red social");
        this.router.navigate(['']);
      }
    )
  }


  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.redsocial.icono = this.imageService.url;
    this.redsocialService.update(id, this.redsocial).subscribe(
      data => {
        this.router.navigate(['']);
      },err =>{
        alert("Error al modificar red social");
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
