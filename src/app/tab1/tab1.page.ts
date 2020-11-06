import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
//title of the Grocery tab's heading
  title = "Grocery List"
//array of grocery items
  items = [
    {
      name: "Milk",
      quantity: 2
    },
    {
      name: "Bread",
      quantity: 1
    },
    {
      name: "Banana",
      quantity: 3
    },
    {
      name: "Sugar",
      quantity: 1
    },
  ]
  constructor(public toastController: ToastController, public alertController: AlertController) {}


  async removeItem(item, index){
    console.log("Removing Item - ", item, index);
    //toast pop up notifying item removal
    const toast = await this.toastController.create({
      message: 'Removing ' + item.name + " at index " +index,
      duration: 2000
    });
    toast.present();

    this.items.splice(index, 1);
  }

  async addItem(){
    console.log("adding item");
    //prompt for adding items
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Add Item',
      message: 'Please add grocery item...',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Name'
        },
        {
          name: 'quantity',
          type: 'number',
          placeholder: 'Quantity'
        },
        //***extra input options below
        // {
        //   name: 'name2',
        //   type: 'text',
        //   id: 'name2-id',
        //   value: 'hello',
        //   placeholder: 'Placeholder 2'
        // },
        // // multiline input.
        // {
        //   name: 'paragraph',
        //   id: 'paragraph',
        //   type: 'textarea',
        //   placeholder: 'Placeholder 3'
        // },
        // {
        //   name: 'name3',
        //   value: 'http://ionicframework.com',
        //   type: 'url',
        //   placeholder: 'Favorite site ever'
        // },
        // // input date with min & max
        // {
        //   name: 'name4',
        //   type: 'date',
        //   min: '2017-03-01',
        //   max: '2018-01-12'
        // },
        // // input date without min nor max
        // {
        //   name: 'name5',
        //   type: 'date'
        // },
        // {
        //   name: 'name6',
        //   type: 'number',
        //   min: -5,
        //   max: 10
        // },
        // {
        //   name: 'name7',
        //   type: 'number'
        // },
        // {
        //   name: 'name8',
        //   type: 'password',
        //   placeholder: 'Advanced Attributes',
        //   cssClass: 'specialClass',
        //   attributes: {
        //     maxlength: 4,
        //     inputmode: 'decimal'
        //   }
        // }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: item => {
            console.log('Confirm Ok', item);
            this.items.push(item);
          }
        }
      ]
    });

    await alert.present(); 
      
  }
}
