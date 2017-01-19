import {
  TestBed,
  getTestBed,
  async,
  inject
} from '@angular/core/testing';
import {
  Headers, BaseRequestOptions,
  Response, HttpModule, Http, XHRBackend, RequestMethod
} from '@angular/http';

import {ResponseOptions} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { makeAndModelsService }  from './app.service';
describe('Component: DropDownApp', () => {

  var fixture: any, compiled: any, componentInstance: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule],
      declarations: [AppComponent],
      providers: [
        makeAndModelsService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory:
            (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
                return new Http(backend, defaultOptions);
            }
         }
      ],
    });


    fixture = TestBed.createComponent(AppComponent);
    compiled = fixture.debugElement.nativeElement;
    componentInstance = fixture.debugElement.componentInstance;
    var data = [
      {
         maker: { lable:"Ford" },
         models: [
                {
                   lable: "Edge",
                   imgSource: "http://static.usnews.rankingsandreviews.com/images/Auto/izmo/i6336198/2017_ford_edge_angularfront.jpg"
                },

                {
                   lable: "Escape",
                   imgSource: "http://static.usnews.rankingsandreviews.com/images/Auto/izmo/i5468/2016_ford_escape_angularfront.jpg"
                }
             ]
          },

          {
             maker: { lable:"Acura" },
             models: [
                {
                   lable: "ILX",
                   imgSource: "https://file.kbb.com/kbb/vehicleimage/evoxseo/cp/l/10421/2016-acura-ilx-front_10421_032_640x480_wv.png"
                },
                {
                   lable: "MDX",
                   imgSource: "https://file.kbb.com/kbb/vehicleimage/evoxseo/cp/l/10476/2016-acura-mdx-front_10476_032_640x480_wb.png"
                }
             ]
          }
          
       ];

    componentInstance.carMakeCompanies = data;
    fixture.detectChanges();
  });

  it('should create the AppComponent', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`'should have title 'Car Makers and their Model'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Car Makers and their Model');
  }));


  it("should not have a model dropdown and model image once deselect the car make", async(() => {
      componentInstance.makeList =componentInstance.carMakeCompanies[0].maker.lable;
      componentInstance.getCarMake(componentInstance.makeList);
      fixture.detectChanges();
       componentInstance.makeList =0;
      componentInstance.getCarMake(componentInstance.makeList);
      fixture.detectChanges();
      expect(componentInstance.modelList).toEqual(0);

    }));

  it("should open model dropdown once make dropdown selected", async(() => {
      componentInstance.makeList =componentInstance.carMakeCompanies[0].maker.lable;
      componentInstance.getCarMake(componentInstance.makeList);
      fixture.detectChanges();
      componentInstance.makeList =0;
      fixture.detectChanges();
      expect(componentInstance.carMakeCompanies).not.toEqual(0);
  }));
});