import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import * as XLSX from 'xlsx';
import { TestService } from './test.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
  tableHeaders: any[] = [];
  dataList: any[] = [];

  showData = false;

  loadDataSubscription;
  submitSubscription;
  constructor(private testService: TestService,private alertController: AlertController) { }

  ngOnInit() { }

  loadData(value:any) {
    this.loadDataSubscription?.unsubscribe();
    this.showData = false;
    this.dataList = [];
    this.loadDataSubscription = this.testService.loadData(value).subscribe(res => {
      this.dataList = res.data || [];
      this.tableHeaders = [];
      if (this.dataList.length) {
        let tableheader:any = Object.keys(this.dataList[0])
        console.log('tableheader', tableheader)
        this.tableHeaders = ['OPENUM_0', 'ROODES_0', 'PRODUCTION_MFGOPE_EXTQTY_0', '', '', '', '', ''];
      }
      this.dataList.forEach(el => el.TRKFIRST_0 = !!el.TRKFIRST_0);
    });
  }
  update() {
    this.submitSubscription = this.testService.update(this.dataList).subscribe(res => {
      this.presentAlert('Records Updated Successfully!')
    }, (err => {
      this.presentAlert('Error Occured')
    }));
  }

  async presentAlert(event) {
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
}
