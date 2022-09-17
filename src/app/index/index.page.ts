import { Component, OnInit, ViewChild  } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { IndexService } from './index.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  constructor(private indexService: IndexService) { }
  MFGFCY_0: string = null;
  Grouping:string = null;
  FRCSTRDAT_0:string = null;
  workCentre: string = null;
  ngOnInit() {
  }

  MFGFCY_0_array : any = [];
  FRCSTRDAT_0_array : any = [];
  WorkCentre_array:any = [];

  isMFGFCY_0ModalOpen = false;
  isGroupingModalOpen = false;
  isFRCSTRDAT_0ModalOpen = false;
  isWorkCentreModalOpen = false;
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

  getGroupingData(event:any) {
      this.indexService.getData(this.MFGFCY_0, this.Grouping, this.FRCSTRDAT_0, this.workCentre).subscribe((res:any) =>  {
        this.MFGFCY_0_array = res.options;
        this.dataSource = res.data;
        console.log(this.MFGFCY_0_array)
      }, (err:any) => {
        console.log(err)
      })
  }

  getFRCSTRDAT_0Data(event:any) {
    this.Grouping = event;
      this.indexService.getData(this.MFGFCY_0, this.Grouping, this.FRCSTRDAT_0, this.workCentre).subscribe((res:any) =>  {
        this.FRCSTRDAT_0_array = res.options;
        this.dataSource = res.data;
        console.log(this.FRCSTRDAT_0_array)
      }, (err:any) => {
        console.log(err)
      })
  }

  getWorkCentreData(event:any) {
    this.FRCSTRDAT_0 = event;
      this.indexService.getData(this.MFGFCY_0, this.Grouping, this.FRCSTRDAT_0, this.workCentre).subscribe((res:any) =>  {
        this.dataSource = res.data;
        console.log(this.WorkCentre_array)
      }, (err:any) => {
        console.log(err)
      })
  }

}
