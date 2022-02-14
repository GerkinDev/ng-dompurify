import { Sanitizer, SecurityContext } from '@angular/core';
import { NgDompurifyConfig } from './types/ng-dompurify-config';
import { NgDompurifyHook } from './types/ng-dompurify-hook';
import { SanitizeStyle } from './types/sanitize-style';
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
export declare class NgDompurifySanitizer implements Sanitizer {
    private readonly config;
    private readonly sanitizeStyle;
    private readonly domPurify;
    constructor(config: NgDompurifyConfig, sanitizeStyle: SanitizeStyle, { defaultView }: Document, hooks: ReadonlyArray<NgDompurifyHook>);
    sanitize(context: SecurityContext, value: {} | string | null, config?: NgDompurifyConfig): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgDompurifySanitizer, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgDompurifySanitizer>;
}
//# sourceMappingURL=ng-dompurify.service.d.ts.map