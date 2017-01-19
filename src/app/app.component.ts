import { Component } from '@angular/core';
import { makeAndModelsService }  from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Car Makers and their Model';
  constructor(private makeModelServiceList: makeAndModelsService) { 
	
  	}
  	public carMakeCompanies: any;
  	public modelsByCompany: any ={
  	};
  	public modelImgUrl:any;
  	public makeList = 0;
  	public modelList = 0;
  	
  	ngOnInit() {
	  	
	  	this.makeModelServiceList.getList().then((response) => {
	  	   this.carMakeCompanies = response[0].data;
	  	});
	}

	getCarMake(data){
		console.log(data);
		for(let i =0; i < this.carMakeCompanies.length; i++){
			if(this.carMakeCompanies[i].maker.lable == data){
				this.modelsByCompany.models = this.carMakeCompanies[i].models;
				break;
			}
		}
		this.modelList = 0;	
	}

	getModel(model){
		if(model == 0){
			this.modelImgUrl= undefined;
		}

		for(let i =0; i < this.modelsByCompany.models.length; i++ ){
			if(this.modelsByCompany.models[i].lable === model){
				this.modelImgUrl= this.modelsByCompany.models[i].imgSource;
				break;
			}
		}
	}

}
