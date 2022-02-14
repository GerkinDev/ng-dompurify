import { Pipe, SecurityContext } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./ng-dompurify.service";
import * as i2 from "@angular/platform-browser";
/**
 * Pipe that transforms dirty content to clean via {@link NgDompurifySanitizer}
 */
export class NgDompurifyPipe {
    constructor(sanitizer, domSanitizer) {
        this.sanitizer = sanitizer;
        this.domSanitizer = domSanitizer;
    }
    transform(value, context = SecurityContext.HTML, config) {
        return this.bypassSecurityTrust(context, this.sanitizer.sanitize(context, value, config));
    }
    bypassSecurityTrust(context, purifiedValue) {
        switch (context) {
            case SecurityContext.HTML:
                return this.domSanitizer.bypassSecurityTrustHtml(purifiedValue);
            case SecurityContext.STYLE:
                return this.domSanitizer.bypassSecurityTrustStyle(purifiedValue);
            case SecurityContext.URL:
                return this.domSanitizer.bypassSecurityTrustUrl(purifiedValue);
            case SecurityContext.RESOURCE_URL:
                return this.domSanitizer.bypassSecurityTrustResourceUrl(purifiedValue);
            default:
                return null;
        }
    }
}
NgDompurifyPipe.ɵfac = function NgDompurifyPipe_Factory(t) { return new (t || NgDompurifyPipe)(i0.ɵɵdirectiveInject(i1.NgDompurifySanitizer, 16), i0.ɵɵdirectiveInject(i2.DomSanitizer, 16)); };
NgDompurifyPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "dompurify", type: NgDompurifyPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgDompurifyPipe, [{
        type: Pipe,
        args: [{ name: 'dompurify' }]
    }], function () { return [{ type: i1.NgDompurifySanitizer }, { type: i2.DomSanitizer }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZG9tcHVyaWZ5LnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1kb21wdXJpZnkvc3JjL2xpYi9uZy1kb21wdXJpZnkucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsSUFBSSxFQUFpQixlQUFlLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7QUFLbkU7O0dBRUc7QUFFSCxNQUFNLE9BQU8sZUFBZTtJQUN4QixZQUNxQixTQUErQixFQUMvQixZQUEwQjtRQUQxQixjQUFTLEdBQVQsU0FBUyxDQUFzQjtRQUMvQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUM1QyxDQUFDO0lBRUosU0FBUyxDQUNMLEtBQXlCLEVBQ3pCLFVBQTJCLGVBQWUsQ0FBQyxJQUFJLEVBQy9DLE1BQTBCO1FBRTFCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUMzQixPQUFPLEVBQ1AsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FDbEQsQ0FBQztJQUNOLENBQUM7SUFFTyxtQkFBbUIsQ0FDdkIsT0FBd0IsRUFDeEIsYUFBcUI7UUFFckIsUUFBUSxPQUFPLEVBQUU7WUFDYixLQUFLLGVBQWUsQ0FBQyxJQUFJO2dCQUNyQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsdUJBQXVCLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDcEUsS0FBSyxlQUFlLENBQUMsS0FBSztnQkFDdEIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLHdCQUF3QixDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3JFLEtBQUssZUFBZSxDQUFDLEdBQUc7Z0JBQ3BCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNuRSxLQUFLLGVBQWUsQ0FBQyxZQUFZO2dCQUM3QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsOEJBQThCLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDM0U7Z0JBQ0ksT0FBTyxJQUFJLENBQUM7U0FDbkI7SUFDTCxDQUFDOzs4RUFqQ1EsZUFBZTtpRkFBZixlQUFlO3VGQUFmLGVBQWU7Y0FEM0IsSUFBSTtlQUFDLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybSwgU2VjdXJpdHlDb250ZXh0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RG9tU2FuaXRpemVyLCBTYWZlVmFsdWV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHtOZ0RvbXB1cmlmeVNhbml0aXplcn0gZnJvbSAnLi9uZy1kb21wdXJpZnkuc2VydmljZSc7XG5pbXBvcnQge05nRG9tcHVyaWZ5Q29uZmlnfSBmcm9tICcuL3R5cGVzL25nLWRvbXB1cmlmeS1jb25maWcnO1xuXG4vKipcbiAqIFBpcGUgdGhhdCB0cmFuc2Zvcm1zIGRpcnR5IGNvbnRlbnQgdG8gY2xlYW4gdmlhIHtAbGluayBOZ0RvbXB1cmlmeVNhbml0aXplcn1cbiAqL1xuQFBpcGUoe25hbWU6ICdkb21wdXJpZnknfSlcbmV4cG9ydCBjbGFzcyBOZ0RvbXB1cmlmeVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBzYW5pdGl6ZXI6IE5nRG9tcHVyaWZ5U2FuaXRpemVyLFxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGRvbVNhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICAgICkge31cblxuICAgIHRyYW5zZm9ybShcbiAgICAgICAgdmFsdWU6IHt9IHwgc3RyaW5nIHwgbnVsbCxcbiAgICAgICAgY29udGV4dDogU2VjdXJpdHlDb250ZXh0ID0gU2VjdXJpdHlDb250ZXh0LkhUTUwsXG4gICAgICAgIGNvbmZpZz86IE5nRG9tcHVyaWZ5Q29uZmlnLFxuICAgICk6IFNhZmVWYWx1ZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5ieXBhc3NTZWN1cml0eVRydXN0KFxuICAgICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICAgIHRoaXMuc2FuaXRpemVyLnNhbml0aXplKGNvbnRleHQsIHZhbHVlLCBjb25maWcpLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgYnlwYXNzU2VjdXJpdHlUcnVzdChcbiAgICAgICAgY29udGV4dDogU2VjdXJpdHlDb250ZXh0LFxuICAgICAgICBwdXJpZmllZFZhbHVlOiBzdHJpbmcsXG4gICAgKTogU2FmZVZhbHVlIHwgbnVsbCB7XG4gICAgICAgIHN3aXRjaCAoY29udGV4dCkge1xuICAgICAgICAgICAgY2FzZSBTZWN1cml0eUNvbnRleHQuSFRNTDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kb21TYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwocHVyaWZpZWRWYWx1ZSk7XG4gICAgICAgICAgICBjYXNlIFNlY3VyaXR5Q29udGV4dC5TVFlMRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kb21TYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKHB1cmlmaWVkVmFsdWUpO1xuICAgICAgICAgICAgY2FzZSBTZWN1cml0eUNvbnRleHQuVVJMOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRvbVNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0VXJsKHB1cmlmaWVkVmFsdWUpO1xuICAgICAgICAgICAgY2FzZSBTZWN1cml0eUNvbnRleHQuUkVTT1VSQ0VfVVJMOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRvbVNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwocHVyaWZpZWRWYWx1ZSk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19