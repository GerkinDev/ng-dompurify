import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, SecurityContext } from '@angular/core';
import dompurify from 'dompurify';
import { DOMPURIFY_CONFIG } from './tokens/dompurify-config';
import { DOMPURIFY_HOOKS } from './tokens/dompurify-hooks';
import { SANITIZE_STYLE } from './tokens/sanitize-style';
import * as i0 from "@angular/core";
/**
 * Implementation of Angular {@link Sanitizer} purifying via DOMPurify
 *
 * use {@link DOMPURIFY_CONFIG} token to provide config ({@link NgDompurifyConfig})
 * use {@link SANITIZE_STYLE} token to provide a style sanitizing method ({@link SanitizeStyle})
 * use {@link DOMPURIFY_HOOKS} token to provide a hooks for DOMPurify ({@link addHook})
 *
 * Ambient type cannot be used without @dynamic https://github.com/angular/angular/issues/23395
 * @dynamic
 */
export class NgDompurifySanitizer {
    constructor(config, sanitizeStyle, { defaultView }, hooks) {
        this.config = config;
        this.sanitizeStyle = sanitizeStyle;
        this.domPurify = dompurify(defaultView);
        hooks.forEach(({ name, hook }) => {
            this.domPurify.addHook(name, hook);
        });
    }
    sanitize(context, value, config = this.config) {
        if (context === SecurityContext.SCRIPT) {
            throw new Error('DOMPurify does not support SCRIPT context');
        }
        return context === SecurityContext.STYLE
            ? this.sanitizeStyle(String(value))
            : this.domPurify.sanitize(String(value || ''), config);
    }
}
NgDompurifySanitizer.ɵfac = function NgDompurifySanitizer_Factory(t) { return new (t || NgDompurifySanitizer)(i0.ɵɵinject(DOMPURIFY_CONFIG), i0.ɵɵinject(SANITIZE_STYLE), i0.ɵɵinject(DOCUMENT), i0.ɵɵinject(DOMPURIFY_HOOKS)); };
NgDompurifySanitizer.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: NgDompurifySanitizer, factory: NgDompurifySanitizer.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgDompurifySanitizer, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [DOMPURIFY_CONFIG]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [SANITIZE_STYLE]
            }] }, { type: Document, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOMPURIFY_HOOKS]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZG9tcHVyaWZ5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1kb21wdXJpZnkvc3JjL2xpYi9uZy1kb21wdXJpZnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQWEsZUFBZSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sU0FBdUIsTUFBTSxXQUFXLENBQUM7QUFDaEQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQzs7QUFLdkQ7Ozs7Ozs7OztHQVNHO0FBSUgsTUFBTSxPQUFPLG9CQUFvQjtJQUc3QixZQUVxQixNQUF5QixFQUV6QixhQUE0QixFQUMzQixFQUFDLFdBQVcsRUFBVyxFQUV6QyxLQUFxQztRQUxwQixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUV6QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUs3QyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxXQUFZLENBQUMsQ0FBQztRQUV6QyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFDLEVBQUUsRUFBRTtZQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsUUFBUSxDQUNKLE9BQXdCLEVBQ3hCLEtBQXlCLEVBQ3pCLFNBQTRCLElBQUksQ0FBQyxNQUFNO1FBRXZDLElBQUksT0FBTyxLQUFLLGVBQWUsQ0FBQyxNQUFNLEVBQUU7WUFDcEMsTUFBTSxJQUFJLEtBQUssQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO1NBQ2hFO1FBRUQsT0FBTyxPQUFPLEtBQUssZUFBZSxDQUFDLEtBQUs7WUFDcEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25DLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQy9ELENBQUM7O3dGQS9CUSxvQkFBb0IsY0FJakIsZ0JBQWdCLGVBRWhCLGNBQWMsZUFFZCxRQUFRLGVBQ1IsZUFBZTswRUFUbEIsb0JBQW9CLFdBQXBCLG9CQUFvQixtQkFGakIsTUFBTTt1RkFFVCxvQkFBb0I7Y0FIaEMsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCOztzQkFLUSxNQUFNO3VCQUFDLGdCQUFnQjs7c0JBRXZCLE1BQU07dUJBQUMsY0FBYzswQkFFVyxRQUFRO3NCQUF4QyxNQUFNO3VCQUFDLFFBQVE7O3NCQUNmLE1BQU07dUJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RE9DVU1FTlR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZSwgU2FuaXRpemVyLCBTZWN1cml0eUNvbnRleHR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IGRvbXB1cmlmeSwge0RPTVB1cmlmeUl9IGZyb20gJ2RvbXB1cmlmeSc7XG5pbXBvcnQge0RPTVBVUklGWV9DT05GSUd9IGZyb20gJy4vdG9rZW5zL2RvbXB1cmlmeS1jb25maWcnO1xuaW1wb3J0IHtET01QVVJJRllfSE9PS1N9IGZyb20gJy4vdG9rZW5zL2RvbXB1cmlmeS1ob29rcyc7XG5pbXBvcnQge1NBTklUSVpFX1NUWUxFfSBmcm9tICcuL3Rva2Vucy9zYW5pdGl6ZS1zdHlsZSc7XG5pbXBvcnQge05nRG9tcHVyaWZ5Q29uZmlnfSBmcm9tICcuL3R5cGVzL25nLWRvbXB1cmlmeS1jb25maWcnO1xuaW1wb3J0IHtOZ0RvbXB1cmlmeUhvb2t9IGZyb20gJy4vdHlwZXMvbmctZG9tcHVyaWZ5LWhvb2snO1xuaW1wb3J0IHtTYW5pdGl6ZVN0eWxlfSBmcm9tICcuL3R5cGVzL3Nhbml0aXplLXN0eWxlJztcblxuLyoqXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiBBbmd1bGFyIHtAbGluayBTYW5pdGl6ZXJ9IHB1cmlmeWluZyB2aWEgRE9NUHVyaWZ5XG4gKlxuICogdXNlIHtAbGluayBET01QVVJJRllfQ09ORklHfSB0b2tlbiB0byBwcm92aWRlIGNvbmZpZyAoe0BsaW5rIE5nRG9tcHVyaWZ5Q29uZmlnfSlcbiAqIHVzZSB7QGxpbmsgU0FOSVRJWkVfU1RZTEV9IHRva2VuIHRvIHByb3ZpZGUgYSBzdHlsZSBzYW5pdGl6aW5nIG1ldGhvZCAoe0BsaW5rIFNhbml0aXplU3R5bGV9KVxuICogdXNlIHtAbGluayBET01QVVJJRllfSE9PS1N9IHRva2VuIHRvIHByb3ZpZGUgYSBob29rcyBmb3IgRE9NUHVyaWZ5ICh7QGxpbmsgYWRkSG9va30pXG4gKlxuICogQW1iaWVudCB0eXBlIGNhbm5vdCBiZSB1c2VkIHdpdGhvdXQgQGR5bmFtaWMgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMjMzOTVcbiAqIEBkeW5hbWljXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE5nRG9tcHVyaWZ5U2FuaXRpemVyIGltcGxlbWVudHMgU2FuaXRpemVyIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRvbVB1cmlmeTogRE9NUHVyaWZ5STtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBASW5qZWN0KERPTVBVUklGWV9DT05GSUcpXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgY29uZmlnOiBOZ0RvbXB1cmlmeUNvbmZpZyxcbiAgICAgICAgQEluamVjdChTQU5JVElaRV9TVFlMRSlcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBzYW5pdGl6ZVN0eWxlOiBTYW5pdGl6ZVN0eWxlLFxuICAgICAgICBASW5qZWN0KERPQ1VNRU5UKSB7ZGVmYXVsdFZpZXd9OiBEb2N1bWVudCxcbiAgICAgICAgQEluamVjdChET01QVVJJRllfSE9PS1MpXG4gICAgICAgIGhvb2tzOiBSZWFkb25seUFycmF5PE5nRG9tcHVyaWZ5SG9vaz4sXG4gICAgKSB7XG4gICAgICAgIHRoaXMuZG9tUHVyaWZ5ID0gZG9tcHVyaWZ5KGRlZmF1bHRWaWV3ISk7XG5cbiAgICAgICAgaG9va3MuZm9yRWFjaCgoe25hbWUsIGhvb2t9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRvbVB1cmlmeS5hZGRIb29rKG5hbWUsIGhvb2spO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzYW5pdGl6ZShcbiAgICAgICAgY29udGV4dDogU2VjdXJpdHlDb250ZXh0LFxuICAgICAgICB2YWx1ZToge30gfCBzdHJpbmcgfCBudWxsLFxuICAgICAgICBjb25maWc6IE5nRG9tcHVyaWZ5Q29uZmlnID0gdGhpcy5jb25maWcsXG4gICAgKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKGNvbnRleHQgPT09IFNlY3VyaXR5Q29udGV4dC5TQ1JJUFQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRE9NUHVyaWZ5IGRvZXMgbm90IHN1cHBvcnQgU0NSSVBUIGNvbnRleHQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb250ZXh0ID09PSBTZWN1cml0eUNvbnRleHQuU1RZTEVcbiAgICAgICAgICAgID8gdGhpcy5zYW5pdGl6ZVN0eWxlKFN0cmluZyh2YWx1ZSkpXG4gICAgICAgICAgICA6IHRoaXMuZG9tUHVyaWZ5LnNhbml0aXplKFN0cmluZyh2YWx1ZSB8fCAnJyksIGNvbmZpZyk7XG4gICAgfVxufVxuIl19