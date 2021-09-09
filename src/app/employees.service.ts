import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private employees = "http://dummy.restapiexample.com/api/v1/employees";

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get<any>(this.employees)
  }
}
