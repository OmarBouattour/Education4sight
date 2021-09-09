import { Component ,OnInit } from '@angular/core';
import { EmployeesService } from './employees.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'employee';
  Employees:any = {}
  constructor(private EmployeesService: EmployeesService) { }
  ngOnInit(): void  {
    this.EmployeesService.getEmployees()
      .subscribe(
        res => this.Employees = res,
        err => console.log(err)
      )
  }
  settings = {
    pager: {
      display: true,
      perPage: 10,
    },
  
    delete: {
      confirmDelete: true,
      deleteButtonContent: '<i class="nb-trash">Delete</i>',

      saveButtonContent: 'save',
      cancelButtonContent: 'cancel'
    },
    add: {
      addButtonContent: '<i class="nb-plus">Add</i>',
      createButtonContent: '<i class="nb-checkmark">Create</i>',
      cancelButtonContent: '<i class="nb-close">Cancel</i>',

      confirmCreate: true,
      },
    edit: {
      editButtonContent: '<i class="nb-edit">Edit</i>',
      saveButtonContent: '<i class="nb-checkmark">Save</i>',
      cancelButtonContent: '<i class="nb-close">Cancel</i>',
    
      confirmSave: true,
    },
    columns: {
      id: {
        title: 'ID',
      },
      employee_name: {
        title: 'Employee Name',
      },
      employee_salary: {
        title: 'Employee Salary',
      },
      employee_age: {
        title: 'Employee Age',
      },
      profile_image: {
        title: 'Profile Image',
      },
    },
  };

  data = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz"
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv"
    },

    // ... list of items

    {
      id: 11,
      name: "Nicholas DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz"
    }
  ];

  onDeleteConfirm(event) {
    console.log("Delete Event In Console")
    console.log(event);
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event) {
    event.confirm.resolve(event.newData);


  }

  onSaveConfirm(event):void {
    if (window.confirm('Are you sure you want to save?')) {
   event.newData['name'] += ' + added in code'; 
   event.confirm.resolve(event.newData);
   } else {
   event.confirm.reject();
  }
  }
}
