import { DOCUMENT } from '@angular/common';
import * as i0 from '@angular/core';
import { InjectionToken, SecurityContext, Injectable, Inject, Pipe, NgModule } from '@angular/core';
import dompurify from 'dompurify';
import * as i2 from '@angular/platform-browser';

/**
 * Token for {@link NgDompurifyConfig}
 */
const DOMPURIFY_CONFIG = new InjectionToken('Config for DOMPurify', {
    factory: () => ({}),
    providedIn: 'root',
});

/**
 * Token for adding hooks to DOMPurify, see {@link addHook}
 */
const DOMPURIFY_HOOKS = new InjectionToken('Hooks for DOMPurify', {
    factory: () => [],
    providedIn: 'root',
});

/**
 * A function that takes style rule value as input and returns a sanitized string
 *
 * NOTE: Angular 10 removed CSS sanitation so by default this method does nothing
 */
const SANITIZE_STYLE = new InjectionToken('A function that sanitizes value for a CSS rule', {
    factory: () => value => value,
    providedIn: 'root',
});

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
class NgDompurifySanitizer {
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
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgDompurifySanitizer, [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], function () {
        return [{ type: undefined, decorators: [{
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
                    }] }];
    }, null);
})();

/**
 * Pipe that transforms dirty content to clean via {@link NgDompurifySanitizer}
 */
class NgDompurifyPipe {
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
NgDompurifyPipe.ɵfac = function NgDompurifyPipe_Factory(t) { return new (t || NgDompurifyPipe)(i0.ɵɵdirectiveInject(NgDompurifySanitizer, 16), i0.ɵɵdirectiveInject(i2.DomSanitizer, 16)); };
NgDompurifyPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "dompurify", type: NgDompurifyPipe, pure: true });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgDompurifyPipe, [{
            type: Pipe,
            args: [{ name: 'dompurify' }]
        }], function () { return [{ type: NgDompurifySanitizer }, { type: i2.DomSanitizer }]; }, null);
})();

class NgDompurifyModule {
}
NgDompurifyModule.ɵfac = function NgDompurifyModule_Factory(t) { return new (t || NgDompurifyModule)(); };
NgDompurifyModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: NgDompurifyModule });
NgDompurifyModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({});
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgDompurifyModule, [{
            type: NgModule,
            args: [{
                    declarations: [NgDompurifyPipe],
                    exports: [NgDompurifyPipe],
                }]
        }], null, null);
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgDompurifyModule, { declarations: [NgDompurifyPipe], exports: [NgDompurifyPipe] }); })();

/**
 * Public API Surface of @tinkoff/ng-dompurify
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DOMPURIFY_CONFIG, DOMPURIFY_HOOKS, NgDompurifyModule, NgDompurifyPipe, NgDompurifySanitizer, SANITIZE_STYLE };
//# sourceMappingURL=tinkoff-ng-dompurify.mjs.map
