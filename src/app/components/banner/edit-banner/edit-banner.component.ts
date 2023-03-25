import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/persona.service';
import { Storage, getDownloadURL, listAll, ref, uploadBytes} from '@angular/fire/storage'


@Component({
  selector: 'app-edit-banner',
  templateUrl: './edit-banner.component.html',
  styleUrls: ['./edit-banner.component.css']
})
export class EditBannerComponent implements OnInit {
  persona: persona = null;
  url: string = "";
  imageName: string = "";
  imageUrl: string;
  

  constructor(private activatedRouter: ActivatedRoute, 
    private personaService: PersonaService, 
    private router: Router, 
    private storage: Storage) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data =>{
        this.persona = data;
        this.getImages(this.persona.img);
      }, err =>{
        alert("Error al modificar persona");
        this.router.navigate(['']);
      }
    )  
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data =>{
        this.persona = data;
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar persona");
        this.router.navigate(['']);
      }
    )  
  }

  uploadImage($event: any, name: string){
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, `banner/` + name);
    uploadBytes(imgRef, file)
      .then(response => {
        this.imageName = name;
        this.getImages(this.imageName);
      })
      .catch(error => console.log(error));
  }

  async getImages(imageName: string): Promise<string[]> {
    const imagesRef = ref(this.storage, imageName);
    const response = await listAll(imagesRef);
    const urls: string[] = [];
    await Promise.all(response.items.map(async (itemRef) => {
      const url = await getDownloadURL(itemRef);
      urls.push(url);
    }));
    return urls;
  }
}