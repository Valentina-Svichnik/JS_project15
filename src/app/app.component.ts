import { Component, OnInit } from '@angular/core';
import { HttpWorkersService } from './shared/services/http-workers.service';
import { MyWorker, MyWorkerType } from './shared/worker.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Список сотрудников';
  workers: MyWorker[] = [];
  MyWorkerType = MyWorkerType;
  searchStr = '';
  

  constructor(private HttpWorkersService: HttpWorkersService) { }

  ngOnInit() {
    this.getData();
  }
  
  async getData() {
    try{
      this.workers = await this.HttpWorkersService.getWorkers();
    } catch(err) {
      console.error(err);
    }
  }

  getByType(type: number) {
    return this.workers.filter((worker) => 
    worker.type === type);
  }

  async onDeleteWorker(id: number) {
      try{
          await this.HttpWorkersService.deleteWorker(id);
      } catch(err) {
        console.error(err);
      } finally {
        this.getData();
      }
  }

  async save(worker) {
    try{
      await this.HttpWorkersService.saveWorker(worker);
    } catch(err) {
      console.error(err);
    } finally {
      this.getData();
    }
  }

    async onAddWorker(worker: MyWorker) {
      try {
        const id =
          this.workers.length > 0
            ? this.workers[this.workers.length - 1].id + 1
            : 0;
        worker.id = id;
        if (worker.name !== undefined && worker.surname !== undefined && worker.phone !== undefined && worker.name && worker.surname && worker.phone) {
          await this.HttpWorkersService.postWorkers(worker);
        } else {
          alert('Пожалуйста, введите имя, фамилию и телефон работника');
        }
      } catch (err) {
        console.error(err);
      } finally {
        this.getData();
      }
  }

  onSearchWorker(search: string) {
    this.searchStr = search;
  }
}