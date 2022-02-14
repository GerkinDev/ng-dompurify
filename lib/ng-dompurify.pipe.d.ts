import { PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeValue } from '@angular/platform-browser';
import { NgDompurifySanitizer } from './ng-dompurify.service';
import { NgDompurifyConfig } from './types/ng-dompurify-config';
import * as i0 from "@angular/core";
/**
 * Pipe that transforms dirty content to clean via {@link NgDompurifySanitizer}
 */
export declare class NgDompurifyPipe implements PipeTransform {
    private readonly sanitizer;
    private readonly domSanitizer;
    constructor(sanitizer: NgDompurifySanitizer, domSanitizer: DomSanitizer);
    transform(value: {} | string | null, context?: SecurityContext, config?: NgDompurifyConfig): SafeValue | null;
    private bypassSecurityTrust;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgDompurifyPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<NgDompurifyPipe, "dompurify">;
}
//# sourceMappingURL=ng-dompurify.pipe.d.ts.map