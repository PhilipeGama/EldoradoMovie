import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class AuthorizationInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jwt: any = JSON.parse(localStorage.getItem('_token'));

    if(jwt){
      const authReq = req.clone({
        headers: req.headers.set('Authorization', jwt.token)
      })
  
      return next.handle(authReq)
    }

    return next.handle(req)
  

  }

}