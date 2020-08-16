import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Activity, ActivityOption, ActivityRegistration } from 'src/app/core/models/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  baseUrl = '/api/v1/activities';

  constructor(private http: HttpClient) { }

  getActivities(commId?: number) {
    const params = commId ? new HttpParams().set('committee_id', commId.toString()) : null;
    return this.http.get<Activity[]>(this.baseUrl, { params });
  }

  getRecentActivities(limit?: number) {
    let params = new HttpParams().append('upcoming_only', 'true');
    if (limit) {
      params = params.append('limit', limit.toString());
    }
    return this.http.get<Activity[]>(this.baseUrl, { params });
  }

  createActivity(activity: FormData) {
    return this.http.post(this.baseUrl, activity);
  }

  getActivity(id: number) {
    return this.http.get<Activity>(this.baseUrl + `/${id}`);
  }

  editActivity(activity: FormData, id: number) {
    activity.append('_method', 'put'); // Fake put needed for file upload
    return this.http.post<Activity>(this.baseUrl + `/${id}`, activity);
  }

  deleteActivity(id: number) {
    return this.http.delete(this.baseUrl + `/${id}`);
  }

  addOption(activityId: number, option: ActivityOption) {
    return this.http.post<ActivityOption>(this.baseUrl + `/${activityId}/options`, option);
  }

  getOptions(acId: number) {
    return this.http.get<ActivityOption[]>(this.baseUrl + `/${acId}/options`);
  }

  deleteOption(acId: number, option) {
    return this.http.delete(this.baseUrl + `/${acId}/options/${option.id}`);
  }

  getRegistrations(activityId: number, memberId?: number) {
    const params = memberId ? new HttpParams().set('member_id', memberId.toString()) : null;
    return this.http.get<ActivityRegistration[]>(this.baseUrl + `/${activityId}/registrations`, { params });
  }

  getRegistration(activityId: number, registrationId: number) {
    return this.http.get<ActivityRegistration>(this.baseUrl + `/${activityId}/registrations/${registrationId}`);
  }

  deleteRegistration(acId: number, regId: number) {
    return this.http.delete(this.baseUrl + `/${acId}/registrations/${regId}`);
  }

  editRegistration(acId: number, reg: ActivityRegistration) {
    return this.http.put(this.baseUrl + `/${acId}/registrations/${reg.id}`, reg);
  }

  registerMember(data: any) {
    return this.http.post<ActivityRegistration>(this.baseUrl + `/${data.activity_id}/registrations`, data);
  }
}
