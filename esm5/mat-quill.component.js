/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Self, Optional, ElementRef } from '@angular/core';
import { NgControl, NgForm, FormGroupDirective } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { QuillComponent } from '@webacad/ng-quill';
import { Subject } from 'rxjs';
/** @type {?} */
var nextUniqueId = 0;
var MatQuillComponent = /** @class */ (function (_super) {
    tslib_1.__extends(MatQuillComponent, _super);
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
export { MatQuillComponent };
if (false) {
    /** @type {?} */
    MatQuillComponent.prototype.placeholder;
    /** @type {?} */
    MatQuillComponent.prototype.required;
    /** @type {?} */
    MatQuillComponent.prototype.errorStateMatcher;
    /** @type {?} */
    MatQuillComponent.prototype.errorState;
    /** @type {?} */
    MatQuillComponent.prototype.stateChanges;
    /** @type {?} */
    MatQuillComponent.prototype.shouldLabelFloat;
    /** @type {?} */
    MatQuillComponent.prototype._disabled;
    /** @type {?} */
    MatQuillComponent.prototype._id;
    /** @type {?} */
    MatQuillComponent.prototype._uid;
    /** @type {?} */
    MatQuillComponent.prototype._defaultErrorStateMatcher;
    /** @type {?} */
    MatQuillComponent.prototype._parentForm;
    /** @type {?} */
    MatQuillComponent.prototype._parentFormGroup;
    /** @type {?} */
    MatQuillComponent.prototype.ngControl;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXF1aWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B3ZWJhY2FkL25nLW1hdC1xdWlsbC8iLCJzb3VyY2VzIjpbIm1hdC1xdWlsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBK0MsTUFBTSxlQUFlLENBQUM7QUFDekgsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsa0JBQWtCLEVBQWMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRixPQUFPLEVBQUMsaUJBQWlCLEVBQXNCLE1BQU0sd0JBQXdCLENBQUM7QUFDOUUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7O0FBRzdCLElBQUksWUFBWSxHQUFXLENBQUMsQ0FBQzs7SUFhVSw2Q0FBYztJQStCcEQsMkJBQ0MsRUFBYyxFQUNOLDJCQUNZLFdBQW1CLEVBQ25CLGdCQUFvQyxFQUNwQixTQUFvQjtRQUx6RCxZQU9DLGtCQUFNLEVBQUUsQ0FBQyxTQUtUO1FBVlEsK0JBQXlCLEdBQXpCLHlCQUF5QjtRQUNiLGlCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQ25CLHNCQUFnQixHQUFoQixnQkFBZ0IsQ0FBb0I7UUFDcEIsZUFBUyxHQUFULFNBQVMsQ0FBVzt5QkF2QjlCLEtBQUs7MkJBS0gsS0FBSzs2QkFFWSxJQUFJLE9BQU8sRUFBUTtpQ0FFckIsSUFBSTswQkFFbkIsS0FBSztxQkFJWCxjQUFZLFlBQVksRUFBSTtRQVlsRCxJQUFJLEtBQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxFQUFFO1lBQzVCLEtBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLEtBQUksQ0FBQztTQUNw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QUUsTUFBTSxDQUFDLENBQUM7UUFFdkQsSUFBSSxRQUFRLEtBQUssUUFBUSxFQUFFO1lBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1lBQzNCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDekI7Ozs7OztJQUlLLDZDQUFpQjs7OztjQUFDLEdBQWtCOzs7Z0JBM0szQyxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRSxFQUFFO29CQUNaLFNBQVMsRUFBRTt3QkFDVjs0QkFDQyxPQUFPLEVBQUUsbUJBQW1COzRCQUM1QixXQUFXLEVBQUUsaUJBQWlCO3lCQUM5QjtxQkFDRDtpQkFDRDs7OztnQkFwQnlDLFVBQVU7Z0JBRTVDLGlCQUFpQjtnQkFETixNQUFNLHVCQXNEdEIsUUFBUTtnQkF0RGdCLGtCQUFrQix1QkF1RDFDLFFBQVE7Z0JBdkRILFNBQVMsdUJBd0RkLElBQUksWUFBSSxRQUFROzs7OEJBM0JqQixLQUFLOzJCQUdMLEtBQUs7b0NBR0wsS0FBSzt3QkErQkwsS0FBSzsyQkFpQkwsS0FBSztxQkFnQkwsS0FBSzs7NEJBcEdQO0VBcUJ1QyxjQUFjO1NBQXhDLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgU2VsZiwgT3B0aW9uYWwsIEVsZW1lbnRSZWYsIFNpbXBsZUNoYW5nZXMsIE9uQ2hhbmdlcywgRG9DaGVjaywgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmdDb250cm9sLCBOZ0Zvcm0sIEZvcm1Hcm91cERpcmVjdGl2ZSwgRm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7RXJyb3JTdGF0ZU1hdGNoZXIsIENhblVwZGF0ZUVycm9yU3RhdGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHtNYXRGb3JtRmllbGRDb250cm9sfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7UXVpbGxDb21wb25lbnR9IGZyb20gJ0B3ZWJhY2FkL25nLXF1aWxsJztcbmltcG9ydCB7U3ViamVjdH0gZnJvbSAncnhqcyc7XG5cblxubGV0IG5leHRVbmlxdWVJZDogbnVtYmVyID0gMDtcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICd3YS1tYXQtcXVpbGwnLFxuXHR0ZW1wbGF0ZTogJycsXG5cdHByb3ZpZGVyczogW1xuXHRcdHtcblx0XHRcdHByb3ZpZGU6IE1hdEZvcm1GaWVsZENvbnRyb2wsXG5cdFx0XHR1c2VFeGlzdGluZzogTWF0UXVpbGxDb21wb25lbnQsXG5cdFx0fSxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgTWF0UXVpbGxDb21wb25lbnQgZXh0ZW5kcyBRdWlsbENvbXBvbmVudCBpbXBsZW1lbnRzXG5cdE9uQ2hhbmdlcyxcblx0RG9DaGVjayxcblx0T25EZXN0cm95LFxuXHRNYXRGb3JtRmllbGRDb250cm9sPHN0cmluZz4sXG5cdENhblVwZGF0ZUVycm9yU3RhdGVcbntcblxuXG5cdEBJbnB1dCgpXG5cdHB1YmxpYyBwbGFjZWhvbGRlcjogc3RyaW5nO1xuXG5cdEBJbnB1dCgpXG5cdHB1YmxpYyByZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdEBJbnB1dCgpXG5cdHB1YmxpYyBlcnJvclN0YXRlTWF0Y2hlcjogRXJyb3JTdGF0ZU1hdGNoZXI7XG5cblx0cHVibGljIGVycm9yU3RhdGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwdWJsaWMgcmVhZG9ubHkgc3RhdGVDaGFuZ2VzOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuXHRwdWJsaWMgcmVhZG9ubHkgc2hvdWxkTGFiZWxGbG9hdDogYm9vbGVhbiA9IHRydWU7XG5cblx0cHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwcml2YXRlIF9pZDogc3RyaW5nO1xuXG5cdHByaXZhdGUgX3VpZDogc3RyaW5nID0gYHdhLXF1aWxsLSR7bmV4dFVuaXF1ZUlkKyt9YDtcblxuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdGVsOiBFbGVtZW50UmVmLFxuXHRcdHByaXZhdGUgX2RlZmF1bHRFcnJvclN0YXRlTWF0Y2hlcjogRXJyb3JTdGF0ZU1hdGNoZXIsXG5cdFx0QE9wdGlvbmFsKCkgcHJpdmF0ZSBfcGFyZW50Rm9ybTogTmdGb3JtLFxuXHRcdEBPcHRpb25hbCgpIHByaXZhdGUgX3BhcmVudEZvcm1Hcm91cDogRm9ybUdyb3VwRGlyZWN0aXZlLFxuXHRcdEBTZWxmKCkgQE9wdGlvbmFsKCkgcHVibGljIHJlYWRvbmx5IG5nQ29udHJvbDogTmdDb250cm9sLFxuXHQpIHtcblx0XHRzdXBlcihlbCk7XG5cblx0XHRpZiAodGhpcy5uZ0NvbnRyb2wgIT09IG51bGwpIHtcblx0XHRcdHRoaXMubmdDb250cm9sLnZhbHVlQWNjZXNzb3IgPSB0aGlzO1xuXHRcdH1cblx0fVxuXG5cblx0QElucHV0KClcblx0Z2V0IHZhbHVlKCk6IGFueVxuXHR7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0VmFsdWUoKTtcblx0fVxuXG5cdHNldCB2YWx1ZSh2YWx1ZTogYW55KVxuXHR7XG5cdFx0aWYgKHRoaXMuZWRpdG9yKSB7XG5cdFx0XHRpZiAodmFsdWUgIT09IHRoaXMudmFsdWUpIHtcblx0XHRcdFx0dGhpcy5lZGl0b3Iuc2V0Q29udGVudHModmFsdWUpO1xuXHRcdFx0XHR0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblxuXHRASW5wdXQoKVxuXHRnZXQgZGlzYWJsZWQoKTogYm9vbGVhblxuXHR7XG5cdFx0aWYgKHRoaXMubmdDb250cm9sICYmIHRoaXMubmdDb250cm9sLmRpc2FibGVkICE9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5uZ0NvbnRyb2wuZGlzYWJsZWQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuXHR9XG5cblx0c2V0IGRpc2FibGVkKGRpc2FibGVkOiBib29sZWFuKVxuXHR7XG5cdFx0dGhpcy5fZGlzYWJsZWQgPSBkaXNhYmxlZDtcblx0fVxuXG5cblx0QElucHV0KClcblx0Z2V0IGlkKCk6IHN0cmluZ1xuXHR7XG5cdFx0cmV0dXJuIHRoaXMuX2lkO1xuXHR9XG5cblx0c2V0IGlkKGlkOiBzdHJpbmcpXG5cdHtcblx0XHR0aGlzLl9pZCA9IGlkIHx8IHRoaXMuX3VpZDtcblx0fVxuXG5cblx0Z2V0IGVtcHR5KCk6IGJvb2xlYW5cblx0e1xuXHRcdHJldHVybiB0eXBlb2YgdGhpcy52YWx1ZSA9PT0gJ3VuZGVmaW5lZCc7XG5cdH1cblxuXG5cdGdldCBmb2N1c2VkKCk6IGJvb2xlYW5cblx0e1xuXHRcdGlmICh0aGlzLmVkaXRvcikge1xuXHRcdFx0cmV0dXJuIHRoaXMuZWRpdG9yLmhhc0ZvY3VzKCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblxuXHRwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWRcblx0e1xuXHRcdGlmICh0eXBlb2YgY2hhbmdlc1sndmFsdWUnXSAhPT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGNoYW5nZXNbJ3JlcXVpcmVkJ10gIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHR0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG5cdFx0fVxuXHR9XG5cblxuXHRwdWJsaWMgbmdEb0NoZWNrKCk6IHZvaWRcblx0e1xuXHRcdGlmICh0aGlzLm5nQ29udHJvbCkge1xuXHRcdFx0dGhpcy51cGRhdGVFcnJvclN0YXRlKCk7XG5cdFx0fVxuXHR9XG5cblxuXHRwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZFxuXHR7XG5cdFx0dGhpcy5zdGF0ZUNoYW5nZXMuY29tcGxldGUoKTtcblx0fVxuXG5cblx0cHVibGljIG9uQ29udGFpbmVyQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkXG5cdHtcblx0XHRpZiAoIXRoaXMuZm9jdXNlZCkge1xuXHRcdFx0dGhpcy5mb2N1cygpO1xuXHRcdH1cblx0fVxuXG5cblx0cHVibGljIGZvY3VzKCk6IHZvaWRcblx0e1xuXHRcdGlmICh0aGlzLmVkaXRvcikge1xuXHRcdFx0dGhpcy5lZGl0b3IuZm9jdXMoKTtcblx0XHRcdHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcblx0XHR9XG5cdH1cblxuXG5cdHB1YmxpYyB1cGRhdGVFcnJvclN0YXRlKCk6IHZvaWRcblx0e1xuXHRcdGNvbnN0IG9sZFN0YXRlID0gdGhpcy5lcnJvclN0YXRlO1xuXHRcdGNvbnN0IHBhcmVudCA9IHRoaXMuX3BhcmVudEZvcm1Hcm91cCB8fCB0aGlzLl9wYXJlbnRGb3JtO1xuXHRcdGNvbnN0IG1hdGNoZXIgPSB0aGlzLmVycm9yU3RhdGVNYXRjaGVyIHx8IHRoaXMuX2RlZmF1bHRFcnJvclN0YXRlTWF0Y2hlcjtcblx0XHRjb25zdCBjb250cm9sID0gdGhpcy5uZ0NvbnRyb2wgPyA8Rm9ybUNvbnRyb2w+dGhpcy5uZ0NvbnRyb2wuY29udHJvbCA6IG51bGw7XG5cdFx0Y29uc3QgbmV3U3RhdGUgPSBtYXRjaGVyLmlzRXJyb3JTdGF0ZShjb250cm9sLCBwYXJlbnQpO1xuXG5cdFx0aWYgKG5ld1N0YXRlICE9PSBvbGRTdGF0ZSkge1xuXHRcdFx0dGhpcy5lcnJvclN0YXRlID0gbmV3U3RhdGU7XG5cdFx0XHR0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG5cdFx0fVxuXHR9XG5cblxuXHRwdWJsaWMgc2V0RGVzY3JpYmVkQnlJZHMoaWRzOiBBcnJheTxzdHJpbmc+KTogdm9pZFxuXHR7XG5cdH1cblxufVxuIl19