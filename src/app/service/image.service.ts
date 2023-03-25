/*import { Injectable } from '@angular/core';
import { Storage, getDownloadURL, list, ref, uploadBytes} from '@angular/fire/storage'

@Injectable({
  providedIn: 'root'
})

export class ImageService {
  url: string = "";

  constructor(private storage: Storage) { }

  public uploadImage($event: any, name: string){
    const file = $event.target.files[0]
    const imgRef = ref(this.storage, `imagen/`+ name)
    uploadBytes(imgRef, file)
    .then(response => {this.getImages()})
    .catch(error => console.log(error))
  }

  getImages(){
    const imagesRef = ref(this.storage, `imagen/`+ name)
    list(imagesRef)
    .then(async response => {
      for(let item of response.items){
        this.url = await getDownloadURL(item);
        console.log("La URL es: " + this.url);
      }
    })    
    .catch(error => console.log(error))      
  }
}*/

import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string = "";

  constructor(private storage: AngularFireStorage) { }

  public uploadImage($event: any, name: string){
    const file = $event.target.files[0];
    const imgRef = this.storage.ref(`imagen/${name}`);
    this.storage.upload(`imagen/${name}`, file)
    .catch(error => console.log(error));
  }

  getImages(path: string){
    const imagesRef = this.storage.ref(path);
    imagesRef.listAll()
    .then(async response => {
      for(let item of response.items){
        this.url = await item.getDownloadURL();
        console.log("La URL es: " + this.url);
      }
    })    
    .catch(error => console.log


