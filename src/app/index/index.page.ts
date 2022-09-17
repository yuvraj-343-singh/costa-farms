import { Component, OnInit, ViewChild  } from '@angular/core';
import { AlertController, IonModal, LoadingController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { IndexService } from './index.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  constructor(private indexService: IndexService, private loadingCtrl: LoadingController, private alertController: AlertController) { }
  MFGFCY_0: string = '';
  Grouping:string = '';
  FRCSTRDAT_0:any = [];
  workCentre: any = [];
  ngOnInit() {
  }
  loading:any;
  ngAfterViewInit() {
    this.initLoader();
  }

  async initLoader() {
    this.loading = await this.loadingCtrl.create({
      message: 'Loading...'
    });
  }

  async initAlert(event) {
    const alert = await this.alertController.create({
      header: event,
      buttons: [
        {
          text: 'OK',
          role: 'confirm'
        }
      ],
    });
    await alert.present();
  }
  MFGFCY_0_array:any = [];
  Grouping_array  : any = [];
  FRCSTRDAT_0_array : any = [];
  WorkCentre_array:any = [];

  isMFGFCY_0ModalOpen = false;
  isGroupingModalOpen = false;
  isFRCSTRDAT_0ModalOpen = false;
  isWorkCentreModalOpen = false;
  isDataTableModalOpen = false;
  dataSource = [];

  openMFGFCY(isOpen: boolean) {
    this.isMFGFCY_0ModalOpen = isOpen;
  }

  openGrouping(isOpen: boolean) {
    this.isGroupingModalOpen = isOpen;
  }

  openFRCSTRDAT_0(isOpen: boolean) {
    this.isFRCSTRDAT_0ModalOpen = isOpen;
  }

  openWorkCentre(isOpen: boolean) {
    this.isWorkCentreModalOpen = isOpen;
  }

  openDataTable(isOpen: boolean) {
    this.isDataTableModalOpen = isOpen;
  }

  closeAll() {
    this.isMFGFCY_0ModalOpen = false;
    this.isGroupingModalOpen = false;
    this.isFRCSTRDAT_0ModalOpen = false;
    this.isWorkCentreModalOpen = false;
    this.isDataTableModalOpen = false;
    this.MFGFCY_0 = '';
    this.Grouping = '';
    this.FRCSTRDAT_0 = [];
    this.workCentre = [];
    this.MFGFCY_0_array = [];
    this.Grouping_array = [];
    this.FRCSTRDAT_0_array = [];
    this.WorkCentre_array= [];
    this.dataSource = []
  }

  getMFGFCY_0() {
    this.loading.present();
      this.indexService.getMFGFCY_0().subscribe((res:any) =>  {
        this.MFGFCY_0_array = res.options;
        this.loading.dismiss();
        console.log(this.Grouping_array)
      }, (err:any) => {
        console.log(err);
        this.loading.dismiss();
      })
  }

  getGroupingData(event:any) {
    this.loading.present();
    this.MFGFCY_0 = event;
      this.indexService.getData(this.MFGFCY_0, this.Grouping, this.FRCSTRDAT_0, this.workCentre).subscribe((res:any) =>  {
        this.Grouping_array = res.options;
        this.dataSource = res.data;
        this.loading.dismiss();
        console.log(this.Grouping_array)
      }, (err:any) => {
        console.log(err);
        this.loading.dismiss();
      })
  }

  getFRCSTRDAT_0Data(event:any) {
    this.loading.present();
    this.Grouping = event;
      this.indexService.getData(this.MFGFCY_0, this.Grouping, this.FRCSTRDAT_0, this.workCentre).subscribe((res:any) =>  {
        this.FRCSTRDAT_0_array = res.options;
        this.dataSource = res.data;
        this.loading.dismiss();
      }, (err:any) => {
        console.log(err)
        this.loading.dismiss();
      })
  }

  getWorkCentreData(event:any) {
    this.loading.present();
    this.FRCSTRDAT_0 = event;
      this.indexService.getData(this.MFGFCY_0, this.Grouping, this.FRCSTRDAT_0, this.workCentre).subscribe((res:any) =>  {
        this.WorkCentre_array = res.options;
        this.dataSource = res.data;
        this.loading.dismiss();
      }, (err:any) => {
        console.log(err)
        this.loading.dismiss();
      })
  }

  getAllData(event:any) {
    this.loading.present();
    this.workCentre = event;
      this.indexService.getData(this.MFGFCY_0, this.Grouping, this.FRCSTRDAT_0, this.workCentre).subscribe((res:any) =>  {
        this.dataSource = res.data;
        this.loading.dismiss();
      }, (err:any) => {
        console.log(err);
        this.loading.dismiss();
      })
  }

  update() {
    this.loading.present();
    this.indexService.update(this.dataSource).subscribe(res => {
      this.loading.dismiss();
      this.initAlert('Records Updated Successfully!')
    }, (err => {
      this.loading.dismiss();
      this.initAlert('Error Occured')
    }));
  }

 

}
