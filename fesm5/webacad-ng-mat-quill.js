import { __extends } from 'tslib';
import { Component, Input, Self, Optional, ElementRef, NgModule } from '@angular/core';
import { NgControl, NgForm, FormGroupDirective } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { QuillComponent, QuillModule } from '@webacad/ng-quill';
import { Subject } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var nextUniqueId = 0;
var MatQuillComponent = /** @class */ (function (_super) {
    __extends(MatQuillComponent, _super);
    function MatQuillComponent(el, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) {
        var _this = _super.call(this, el) || this;
        _this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        _this._parentForm = _parentForm;
        _this._parentFormGroup = _parentFormGroup;
        _this.ngControl = ngControl;
        _this.required = false;
        _this.errorState = false;
        _this.stateChanges = new Subject();
        _this.shouldLabelFloat = true;
        _this._disabled = false;
        _this._uid = "wa-quill-" + nextUniqueId++;
        if (_this.ngControl !== null) {
            _this.ngControl.valueAccessor = _this;
        }
        return _this;
    }
    Object.defineProperty(MatQuillComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this.getValue();
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this.editor) {
                if (value !== this.value) {
                    this.editor.setContents(value);
                    this.stateChanges.next();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatQuillComponent.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.ngControl && this.ngControl.disabled !== null) {
                return this.ngControl.disabled;
            }
            return this._disabled;
        },
        set: /**
         * @param {?} disabled
         * @return {?}
         */
        function (disabled) {
            this._disabled = disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatQuillComponent.prototype, "id", {
        get: /**
         * @return {?}
         */
        function () {
            return this._id;
        },
        set: /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            this._id = id || this._uid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatQuillComponent.prototype, "empty", {
        get: /**
         * @return {?}
         */
        function () {
            return typeof this.value === 'undefined';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatQuillComponent.prototype, "focused", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.editor) {
                return this.editor.hasFocus();
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    MatQuillComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (typeof changes['value'] !== 'undefined' || typeof changes['required'] !== 'undefined') {
            this.stateChanges.next();
        }
    };
    /**
     * @return {?}
     */
    MatQuillComponent.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this.ngControl) {
            this.updateErrorState();
        }
    };
    /**
     * @return {?}
     */
    MatQuillComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.stateChanges.complete();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MatQuillComponent.prototype.onContainerClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.focused) {
            this.focus();
        }
    };
    /**
     * @return {?}
     */
    MatQuillComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        if (this.editor) {
            this.editor.focus();
            this.stateChanges.next();
        }
    };
    /**
     * @return {?}
     */
    MatQuillComponent.prototype.updateErrorState = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var oldState = this.errorState;
        /** @type {?} */
        var parent = this._parentFormGroup || this._parentForm;
        /** @type {?} */
        var matcher = this.errorStateMatcher || this._defaultErrorStateMatcher;
        /** @type {?} */
        var control = this.ngControl ? /** @type {?} */ (this.ngControl.control) : null;
        /** @type {?} */
        var newState = matcher.isErrorState(control, parent);
        if (newState !== oldState) {
            this.errorState = newState;
            this.stateChanges.next();
        }
    };
    /**
     * @param {?} ids
     * @return {?}
     */
    MatQuillComponent.prototype.setDescribedByIds = /**
     * @param {?} ids
     * @return {?}
     */
    function (ids) {
    };
    MatQuillComponent.decorators = [
        { type: Component, args: [{
                    selector: 'wa-mat-quill',
                    template: '',
                    providers: [
                        {
                            provide: MatFormFieldControl,
                            useExisting: MatQuillComponent,
                        },
                    ]
                }] }
    ];
    /** @nocollapse */
    MatQuillComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ErrorStateMatcher },
        { type: NgForm, decorators: [{ type: Optional }] },
        { type: FormGroupDirective, decorators: [{ type: Optional }] },
        { type: NgControl, decorators: [{ type: Self }, { type: Optional }] }
    ]; };
    MatQuillComponent.propDecorators = {
        placeholder: [{ type: Input }],
        required: [{ type: Input }],
        errorStateMatcher: [{ type: Input }],
        value: [{ type: Input }],
        disabled: [{ type: Input }],
        id: [{ type: Input }]
    };
    return MatQuillComponent;
}(QuillComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MatQuillModule = /** @class */ (function () {
    function MatQuillModule() {
    }
    MatQuillModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        QuillModule,
                    ],
                    declarations: [
                        MatQuillComponent,
                    ],
                    exports: [
                        QuillModule,
                        MatQuillComponent,
                    ],
                },] }
    ];
    return MatQuillModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { MatQuillComponent, MatQuillModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViYWNhZC1uZy1tYXQtcXVpbGwuanMubWFwIiwic291cmNlcyI6WyJuZzovL0B3ZWJhY2FkL25nLW1hdC1xdWlsbC9tYXQtcXVpbGwuY29tcG9uZW50LnRzIiwibmc6Ly9Ad2ViYWNhZC9uZy1tYXQtcXVpbGwvbWF0LXF1aWxsLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIFNlbGYsIE9wdGlvbmFsLCBFbGVtZW50UmVmLCBTaW1wbGVDaGFuZ2VzLCBPbkNoYW5nZXMsIERvQ2hlY2ssIE9uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05nQ29udHJvbCwgTmdGb3JtLCBGb3JtR3JvdXBEaXJlY3RpdmUsIEZvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0Vycm9yU3RhdGVNYXRjaGVyLCBDYW5VcGRhdGVFcnJvclN0YXRlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7TWF0Rm9ybUZpZWxkQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQge1F1aWxsQ29tcG9uZW50fSBmcm9tICdAd2ViYWNhZC9uZy1xdWlsbCc7XG5pbXBvcnQge1N1YmplY3R9IGZyb20gJ3J4anMnO1xuXG5cbmxldCBuZXh0VW5pcXVlSWQ6IG51bWJlciA9IDA7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnd2EtbWF0LXF1aWxsJyxcblx0dGVtcGxhdGU6ICcnLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBNYXRGb3JtRmllbGRDb250cm9sLFxuXHRcdFx0dXNlRXhpc3Rpbmc6IE1hdFF1aWxsQ29tcG9uZW50LFxuXHRcdH0sXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIE1hdFF1aWxsQ29tcG9uZW50IGV4dGVuZHMgUXVpbGxDb21wb25lbnQgaW1wbGVtZW50c1xuXHRPbkNoYW5nZXMsXG5cdERvQ2hlY2ssXG5cdE9uRGVzdHJveSxcblx0TWF0Rm9ybUZpZWxkQ29udHJvbDxzdHJpbmc+LFxuXHRDYW5VcGRhdGVFcnJvclN0YXRlXG57XG5cblxuXHRASW5wdXQoKVxuXHRwdWJsaWMgcGxhY2Vob2xkZXI6IHN0cmluZztcblxuXHRASW5wdXQoKVxuXHRwdWJsaWMgcmVxdWlyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRASW5wdXQoKVxuXHRwdWJsaWMgZXJyb3JTdGF0ZU1hdGNoZXI6IEVycm9yU3RhdGVNYXRjaGVyO1xuXG5cdHB1YmxpYyBlcnJvclN0YXRlOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHVibGljIHJlYWRvbmx5IHN0YXRlQ2hhbmdlczogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cblx0cHVibGljIHJlYWRvbmx5IHNob3VsZExhYmVsRmxvYXQ6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSBfaWQ6IHN0cmluZztcblxuXHRwcml2YXRlIF91aWQ6IHN0cmluZyA9IGB3YS1xdWlsbC0ke25leHRVbmlxdWVJZCsrfWA7XG5cblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRlbDogRWxlbWVudFJlZixcblx0XHRwcml2YXRlIF9kZWZhdWx0RXJyb3JTdGF0ZU1hdGNoZXI6IEVycm9yU3RhdGVNYXRjaGVyLFxuXHRcdEBPcHRpb25hbCgpIHByaXZhdGUgX3BhcmVudEZvcm06IE5nRm9ybSxcblx0XHRAT3B0aW9uYWwoKSBwcml2YXRlIF9wYXJlbnRGb3JtR3JvdXA6IEZvcm1Hcm91cERpcmVjdGl2ZSxcblx0XHRAU2VsZigpIEBPcHRpb25hbCgpIHB1YmxpYyByZWFkb25seSBuZ0NvbnRyb2w6IE5nQ29udHJvbCxcblx0KSB7XG5cdFx0c3VwZXIoZWwpO1xuXG5cdFx0aWYgKHRoaXMubmdDb250cm9sICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLm5nQ29udHJvbC52YWx1ZUFjY2Vzc29yID0gdGhpcztcblx0XHR9XG5cdH1cblxuXG5cdEBJbnB1dCgpXG5cdGdldCB2YWx1ZSgpOiBhbnlcblx0e1xuXHRcdHJldHVybiB0aGlzLmdldFZhbHVlKCk7XG5cdH1cblxuXHRzZXQgdmFsdWUodmFsdWU6IGFueSlcblx0e1xuXHRcdGlmICh0aGlzLmVkaXRvcikge1xuXHRcdFx0aWYgKHZhbHVlICE9PSB0aGlzLnZhbHVlKSB7XG5cdFx0XHRcdHRoaXMuZWRpdG9yLnNldENvbnRlbnRzKHZhbHVlKTtcblx0XHRcdFx0dGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cblx0QElucHV0KClcblx0Z2V0IGRpc2FibGVkKCk6IGJvb2xlYW5cblx0e1xuXHRcdGlmICh0aGlzLm5nQ29udHJvbCAmJiB0aGlzLm5nQ29udHJvbC5kaXNhYmxlZCAhPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIHRoaXMubmdDb250cm9sLmRpc2FibGVkO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLl9kaXNhYmxlZDtcblx0fVxuXG5cdHNldCBkaXNhYmxlZChkaXNhYmxlZDogYm9vbGVhbilcblx0e1xuXHRcdHRoaXMuX2Rpc2FibGVkID0gZGlzYWJsZWQ7XG5cdH1cblxuXG5cdEBJbnB1dCgpXG5cdGdldCBpZCgpOiBzdHJpbmdcblx0e1xuXHRcdHJldHVybiB0aGlzLl9pZDtcblx0fVxuXG5cdHNldCBpZChpZDogc3RyaW5nKVxuXHR7XG5cdFx0dGhpcy5faWQgPSBpZCB8fCB0aGlzLl91aWQ7XG5cdH1cblxuXG5cdGdldCBlbXB0eSgpOiBib29sZWFuXG5cdHtcblx0XHRyZXR1cm4gdHlwZW9mIHRoaXMudmFsdWUgPT09ICd1bmRlZmluZWQnO1xuXHR9XG5cblxuXHRnZXQgZm9jdXNlZCgpOiBib29sZWFuXG5cdHtcblx0XHRpZiAodGhpcy5lZGl0b3IpIHtcblx0XHRcdHJldHVybiB0aGlzLmVkaXRvci5oYXNGb2N1cygpO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cblx0cHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkXG5cdHtcblx0XHRpZiAodHlwZW9mIGNoYW5nZXNbJ3ZhbHVlJ10gIT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBjaGFuZ2VzWydyZXF1aXJlZCddICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0dGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuXHRcdH1cblx0fVxuXG5cblx0cHVibGljIG5nRG9DaGVjaygpOiB2b2lkXG5cdHtcblx0XHRpZiAodGhpcy5uZ0NvbnRyb2wpIHtcblx0XHRcdHRoaXMudXBkYXRlRXJyb3JTdGF0ZSgpO1xuXHRcdH1cblx0fVxuXG5cblx0cHVibGljIG5nT25EZXN0cm95KCk6IHZvaWRcblx0e1xuXHRcdHRoaXMuc3RhdGVDaGFuZ2VzLmNvbXBsZXRlKCk7XG5cdH1cblxuXG5cdHB1YmxpYyBvbkNvbnRhaW5lckNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZFxuXHR7XG5cdFx0aWYgKCF0aGlzLmZvY3VzZWQpIHtcblx0XHRcdHRoaXMuZm9jdXMoKTtcblx0XHR9XG5cdH1cblxuXG5cdHB1YmxpYyBmb2N1cygpOiB2b2lkXG5cdHtcblx0XHRpZiAodGhpcy5lZGl0b3IpIHtcblx0XHRcdHRoaXMuZWRpdG9yLmZvY3VzKCk7XG5cdFx0XHR0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG5cdFx0fVxuXHR9XG5cblxuXHRwdWJsaWMgdXBkYXRlRXJyb3JTdGF0ZSgpOiB2b2lkXG5cdHtcblx0XHRjb25zdCBvbGRTdGF0ZSA9IHRoaXMuZXJyb3JTdGF0ZTtcblx0XHRjb25zdCBwYXJlbnQgPSB0aGlzLl9wYXJlbnRGb3JtR3JvdXAgfHwgdGhpcy5fcGFyZW50Rm9ybTtcblx0XHRjb25zdCBtYXRjaGVyID0gdGhpcy5lcnJvclN0YXRlTWF0Y2hlciB8fCB0aGlzLl9kZWZhdWx0RXJyb3JTdGF0ZU1hdGNoZXI7XG5cdFx0Y29uc3QgY29udHJvbCA9IHRoaXMubmdDb250cm9sID8gPEZvcm1Db250cm9sPnRoaXMubmdDb250cm9sLmNvbnRyb2wgOiBudWxsO1xuXHRcdGNvbnN0IG5ld1N0YXRlID0gbWF0Y2hlci5pc0Vycm9yU3RhdGUoY29udHJvbCwgcGFyZW50KTtcblxuXHRcdGlmIChuZXdTdGF0ZSAhPT0gb2xkU3RhdGUpIHtcblx0XHRcdHRoaXMuZXJyb3JTdGF0ZSA9IG5ld1N0YXRlO1xuXHRcdFx0dGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuXHRcdH1cblx0fVxuXG5cblx0cHVibGljIHNldERlc2NyaWJlZEJ5SWRzKGlkczogQXJyYXk8c3RyaW5nPik6IHZvaWRcblx0e1xuXHR9XG5cbn1cbiIsImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtRdWlsbE1vZHVsZX0gZnJvbSAnQHdlYmFjYWQvbmctcXVpbGwnO1xuXG5pbXBvcnQge01hdFF1aWxsQ29tcG9uZW50fSBmcm9tICcuL21hdC1xdWlsbC5jb21wb25lbnQnO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRRdWlsbE1vZHVsZSxcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0TWF0UXVpbGxDb21wb25lbnQsXG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRRdWlsbE1vZHVsZSxcblx0XHRNYXRRdWlsbENvbXBvbmVudCxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgTWF0UXVpbGxNb2R1bGUge31cbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fZXh0ZW5kcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVFBLElBQUksWUFBWSxHQUFXLENBQUMsQ0FBQzs7SUFhVUEscUNBQWM7SUErQnBELDJCQUNDLEVBQWMsRUFDTiwyQkFDWSxXQUFtQixFQUNuQixnQkFBb0MsRUFDcEIsU0FBb0I7UUFMekQsWUFPQyxrQkFBTSxFQUFFLENBQUMsU0FLVDtRQVZRLCtCQUF5QixHQUF6Qix5QkFBeUI7UUFDYixp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