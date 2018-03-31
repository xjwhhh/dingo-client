import {Component, OnInit} from '@angular/core';
import {TicketManagerStatisticsInfoService} from '../statisticsInfo.service';
import {User} from '../../../entity/user';


@Component({
  selector: 'app-ticket-manager-ticket-user',
  templateUrl: './userTicket.component.html',
  styleUrls: ['./userTicket.component.css'],
})
export class TicketManagerUserTicketComponent implements OnInit {

  commonNumber = 0;
  bronzeNumber = 0;
  silverNumber = 0;
  goldenNumber = 0;
  platinumNumber = 0;
  diamondNumber = 0;

  data: any[] = [];

  echartsInstance: any;
  updateOptions: any;
  options: any;


  userList: User[] = [];
  showUserList: User[] = [];

  ngOnInit() {
    this.getUserList();
  }

  constructor(private statisticsService: TicketManagerStatisticsInfoService) {
  }

  getUserList() {
    this.statisticsService.getUserList().then(list => this.initList(list));
  }

  initList(userList: User[]) {
    this.userList = userList;
    this.showUserList = userList;
    for (let i = 0; i < this.userList.length; i++) {
      const level = this.userList[i].level;
      console.log(level);
      switch (level) {
        case 'COMMON':
          this.commonNumber++;
          break;
        case 'BRONZE':
          this.bronzeNumber++;
          break;
        case 'SILVER':
          this.silverNumber++;
          break;
        case 'GOLDEN':
          this.goldenNumber++;
          break;
        case 'PLATINUM':
          this.platinumNumber++;
          break;
        case 'DIAMOND':
          this.diamondNumber++;
          break;
      }
    }
    console.log(this.commonNumber);
    console.log(this.silverNumber);
    this.data = [
      {value: this.commonNumber, name: '普通'},
      {value: this.bronzeNumber, name: '青铜'},
      {value: this.silverNumber, name: '白银'},
      {value: this.goldenNumber, name: '黄金'},
      {value: this.platinumNumber, name: '白金'},
      {value: this.diamondNumber, name: '钻石'},
    ].sort(function (a, b) {
      return a.value - b.value;
    });

    this.options = {
      backgroundColor: '#2c343c',

      title: {
        text: '用户等级分布图',
        left: 'center',
        top: 20,
        textStyle: {
          color: '#ccc'
        }
      },

      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },

      visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
          colorLightness: [0, 1]
        }
      },
      series: [
        {
          name: 'Counters',
          type: 'pie',
          radius: '55%',
          center: ['50%', '50%'],
          data: this.data,
          roseType: 'radius',
          label: {
            normal: {
              textStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
              }
            }
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
              },
              smooth: 0.2,
              length: 10,
              length2: 20
            }
          },
          itemStyle: {
            normal: {
              color: '#c23531',
              shadowBlur: 200,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },

          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDelay: function (idx) {
            return Math.random() * 200;
          }
        }
      ]
    };

  }

  searchUser(text: string) {
    this.showUserList.splice(0, this.showUserList.length);
    for (let i = 0; i < this.userList.length; i++) {
      if ((this.userList[i].id === parseInt(text, 10)) || (this.userList[i].name.indexOf(text) !== -1)) {
        this.showUserList.push(this.userList[i]);
      }
    }
  }

}
