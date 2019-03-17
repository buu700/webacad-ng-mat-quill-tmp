/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Self, Optional, ElementRef } from '@angular/core';
import { NgControl, NgForm, FormGroupDirective } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { QuillComponent } from '@webacad/ng-quill';
import { Subject } from 'rxjs';
/** @type {?} */
let nextUniqueId = 0;
export class MatQuillComponent extends QuillComponent {
    /**
     * @param {?} el
     * @param {?} _defaultErrorStateMatcher
     * @param {?} _parentForm
     * @param {?} _parentFormGroup
     * @param {?} ngControl
     */
    constructor(el, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) {
        super(el);
        this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
        this.ngControl = ngControl;
        this.required = false;
        this.errorState = false;
        this.stateChanges = new Subject();
        this.shouldLabelFloat = true;
        this._disabled = false;
        this._uid = `wa-quill-${nextUniqueId++}`;
        if (this.ngControl !== null) {
            this.ngControl.valueAccessor = this;
        }
    }
    /**
     * @return {?}
     */
    get value() {
        return this.getValue();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        if (this.editor) {
            if (value !== this.value) {
                this.editor.setContents(value);
                this.stateChanges.next();
            }
        }
    }
    /**
     * @return {?}
     */
    get disabled() {
        if (this.ngControl && this.ngControl.disabled !== null) {
            return this.ngControl.disabled;
        }
        return this._disabled;
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    set disabled(disabled) {
        this._disabled = disabled;
    }
    /**
     * @return {?}
     */
    get id() {
        return this._id;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    set id(id) {
        this._id = id || this._uid;
    }
    /**
     * @return {?}
     */
    get empty() {
        return typeof this.value === 'undefined';
    }
    /**
     * @return {?}
     */
    get focused() {
        if (this.editor) {
            return this.editor.hasFocus();
        }
        return false;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (typeof changes['value'] !== 'undefined' || typeof changes['required'] !== 'undefined') {
            this.stateChanges.next();
        }
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this.ngControl) {
            this.updateErrorState();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.stateChanges.complete();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onContainerClick(event) {
        if (!this.focused) {
            this.focus();
        }
    }
    /**
     * @return {?}
     */
    focus() {
        if (this.editor) {
            this.editor.focus();
            this.stateChanges.next();
        }
    }
    /**
     * @return {?}
     */
    updateErrorState() {
        /** @type {?} */
        const oldState = this.errorState;
        /** @type {?} */
        const parent = this._parentFormGroup || this._parentForm;
        /** @type {?} */
        const matcher = this.errorStateMatcher || this._defaultErrorStateMatcher;
        /** @type {?} */
        const control = this.ngControl ? /** @type {?} */ (this.ngControl.control) : null;
        /** @type {?} */
        const newState = matcher.isErrorState(control, parent);
        if (newState !== oldState) {
            this.errorState = newState;
            this.stateChanges.next();
        }
    }
    /**
     * @param {?} ids
     * @return {?}
     */
    setDescribedByIds(ids) {
    }
}
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
MatQuillComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ErrorStateMatcher },
    { type: NgForm, decorators: [{ type: Optional }] },
    { type: FormGroupDirective, decorators: [{ type: Optional }] },
    { type: NgControl, decorators: [{ type: Self }, { type: Optional }] }
];
MatQuillComponent.propDecorators = {
    placeholder: [{ type: Input }],
    required: [{ type: Input }],
    errorStateMatcher: [{ type: Input }],
    value: [{ type: Input }],
    disabled: [{ type: Input }],
    id: [{ type: Input }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXF1aWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B3ZWJhY2FkL25nLW1hdC1xdWlsbC8iLCJzb3VyY2VzIjpbIm1hdC1xdWlsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUErQyxNQUFNLGVBQWUsQ0FBQztBQUN6SCxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxrQkFBa0IsRUFBYyxNQUFNLGdCQUFnQixDQUFDO0FBQ2xGLE9BQU8sRUFBQyxpQkFBaUIsRUFBc0IsTUFBTSx3QkFBd0IsQ0FBQztBQUM5RSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQzs7QUFHN0IsSUFBSSxZQUFZLEdBQVcsQ0FBQyxDQUFDO0FBYTdCLE1BQU0sd0JBQXlCLFNBQVEsY0FBYzs7Ozs7Ozs7SUErQnBELFlBQ0MsRUFBYyxFQUNOLDJCQUNZLFdBQW1CLEVBQ25CLGdCQUFvQyxFQUNwQixTQUFvQjtRQUV4RCxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFMRiw4QkFBeUIsR0FBekIseUJBQXlCO1FBQ2IsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFDbkIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFvQjtRQUNwQixjQUFTLEdBQVQsU0FBUyxDQUFXO3dCQXZCOUIsS0FBSzswQkFLSCxLQUFLOzRCQUVZLElBQUksT0FBTyxFQUFRO2dDQUVyQixJQUFJO3lCQUVuQixLQUFLO29CQUlYLFlBQVksWUFBWSxFQUFFLEVBQUU7UUFZbEQsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksRUFBRTtZQUM1QixJQUFJLENBQUMsU0FBUyxDQUFD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USxFQUFFO1lBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1lBQzNCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDekI7Ozs7OztJQUlLLGlCQUFpQixDQUFDLEdBQWtCOzs7O1lBM0szQyxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRSxFQUFFO2dCQUNaLFNBQVMsRUFBRTtvQkFDVjt3QkFDQyxPQUFPLEVBQUUsbUJBQW1CO3dCQUM1QixXQUFXLEVBQUUsaUJBQWlCO3FCQUM5QjtpQkFDRDthQUNEOzs7O1lBcEJ5QyxVQUFVO1lBRTVDLGlCQUFpQjtZQUROLE1BQU0sdUJBc0R0QixRQUFRO1lBdERnQixrQkFBa0IsdUJBdUQxQyxRQUFRO1lBdkRILFNBQVMsdUJBd0RkLElBQUksWUFBSSxRQUFROzs7MEJBM0JqQixLQUFLO3VCQUdMLEtBQUs7Z0NBR0wsS0FBSztvQkErQkwsS0FBSzt1QkFpQkwsS0FBSztpQkFnQkwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgU2VsZiwgT3B0aW9uYWwsIEVsZW1lbnRSZWYsIFNpbXBsZUNoYW5nZXMsIE9uQ2hhbmdlcywgRG9DaGVjaywgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmdDb250cm9sLCBOZ0Zvcm0sIEZvcm1Hcm91cERpcmVjdGl2ZSwgRm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7RXJyb3JTdGF0ZU1hdGNoZXIsIENhblVwZGF0ZUVycm9yU3RhdGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHtNYXRGb3JtRmllbGRDb250cm9sfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7UXVpbGxDb21wb25lbnR9IGZyb20gJ0B3ZWJhY2FkL25nLXF1aWxsJztcbmltcG9ydCB7U3ViamVjdH0gZnJvbSAncnhqcyc7XG5cblxubGV0IG5leHRVbmlxdWVJZDogbnVtYmVyID0gMDtcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICd3YS1tYXQtcXVpbGwnLFxuXHR0ZW1wbGF0ZTogJycsXG5cdHByb3ZpZGVyczogW1xuXHRcdHtcblx0XHRcdHByb3ZpZGU6IE1hdEZvcm1GaWVsZENvbnRyb2wsXG5cdFx0XHR1c2VFeGlzdGluZzogTWF0UXVpbGxDb21wb25lbnQsXG5cdFx0fSxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgTWF0UXVpbGxDb21wb25lbnQgZXh0ZW5kcyBRdWlsbENvbXBvbmVudCBpbXBsZW1lbnRzXG5cdE9uQ2hhbmdlcyxcblx0RG9DaGVjayxcblx0T25EZXN0cm95LFxuXHRNYXRGb3JtRmllbGRDb250cm9sPHN0cmluZz4sXG5cdENhblVwZGF0ZUVycm9yU3RhdGVcbntcblxuXG5cdEBJbnB1dCgpXG5cdHB1YmxpYyBwbGFjZWhvbGRlcjogc3RyaW5nO1xuXG5cdEBJbnB1dCgpXG5cdHB1YmxpYyByZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdEBJbnB1dCgpXG5cdHB1YmxpYyBlcnJvclN0YXRlTWF0Y2hlcjogRXJyb3JTdGF0ZU1hdGNoZXI7XG5cblx0cHVibGljIGVycm9yU3RhdGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwdWJsaWMgcmVhZG9ubHkgc3RhdGVDaGFuZ2VzOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuXHRwdWJsaWMgcmVhZG9ubHkgc2hvdWxkTGFiZWxGbG9hdDogYm9vbGVhbiA9IHRydWU7XG5cblx0cHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwcml2YXRlIF9pZDogc3RyaW5nO1xuXG5cdHByaXZhdGUgX3VpZDogc3RyaW5nID0gYHdhLXF1aWxsLSR7bmV4dFVuaXF1ZUlkKyt9YDtcblxuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdGVsOiBFbGVtZW50UmVmLFxuXHRcdHByaXZhdGUgX2RlZmF1bHRFcnJvclN0YXRlTWF0Y2hlcjogRXJyb3JTdGF0ZU1hdGNoZXIsXG5cdFx0QE9wdGlvbmFsKCkgcHJpdmF0ZSBfcGFyZW50Rm9ybTogTmdGb3JtLFxuXHRcdEBPcHRpb25hbCgpIHByaXZhdGUgX3BhcmVudEZvcm1Hcm91cDogRm9ybUdyb3VwRGlyZWN0aXZlLFxuXHRcdEBTZWxmKCkgQE9wdGlvbmFsKCkgcHVibGljIHJlYWRvbmx5IG5nQ29udHJvbDogTmdDb250cm9sLFxuXHQpIHtcblx0XHRzdXBlcihlbCk7XG5cblx0XHRpZiAodGhpcy5uZ0NvbnRyb2wgIT09IG51bGwpIHtcblx0XHRcdHRoaXMubmdDb250cm9sLnZhbHVlQWNjZXNzb3IgPSB0aGlzO1xuXHRcdH1cblx0fVxuXG5cblx0QElucHV0KClcblx0Z2V0IHZhbHVlKCk6IGFueVxuXHR7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0VmFsdWUoKTtcblx0fVxuXG5cdHNldCB2YWx1ZSh2YWx1ZTogYW55KVxuXHR7XG5cdFx0aWYgKHRoaXMuZWRpdG9yKSB7XG5cdFx0XHRpZiAodmFsdWUgIT09IHRoaXMudmFsdWUpIHtcblx0XHRcdFx0dGhpcy5lZGl0b3Iuc2V0Q29udGVudHModmFsdWUpO1xuXHRcdFx0XHR0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblxuXHRASW5wdXQoKVxuXHRnZXQgZGlzYWJsZWQoKTogYm9vbGVhblxuXHR7XG5cdFx0aWYgKHRoaXMubmdDb250cm9sICYmIHRoaXMubmdDb250cm9sLmRpc2FibGVkICE9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5uZ0NvbnRyb2wuZGlzYWJsZWQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuXHR9XG5cblx0c2V0IGRpc2FibGVkKGRpc2FibGVkOiBib29sZWFuKVxuXHR7XG5cdFx0dGhpcy5fZGlzYWJsZWQgPSBkaXNhYmxlZDtcblx0fVxuXG5cblx0QElucHV0KClcblx0Z2V0IGlkKCk6IHN0cmluZ1xuXHR7XG5cdFx0cmV0dXJuIHRoaXMuX2lkO1xuXHR9XG5cblx0c2V0IGlkKGlkOiBzdHJpbmcpXG5cdHtcblx0XHR0aGlzLl9pZCA9IGlkIHx8IHRoaXMuX3VpZDtcblx0fVxuXG5cblx0Z2V0IGVtcHR5KCk6IGJvb2xlYW5cblx0e1xuXHRcdHJldHVybiB0eXBlb2YgdGhpcy52YWx1ZSA9PT0gJ3VuZGVmaW5lZCc7XG5cdH1cblxuXG5cdGdldCBmb2N1c2VkKCk6IGJvb2xlYW5cblx0e1xuXHRcdGlmICh0aGlzLmVkaXRvcikge1xuXHRcdFx0cmV0dXJuIHRoaXMuZWRpdG9yLmhhc0ZvY3VzKCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblxuXHRwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWRcblx0e1xuXHRcdGlmICh0eXBlb2YgY2hhbmdlc1sndmFsdWUnXSAhPT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGNoYW5nZXNbJ3JlcXVpcmVkJ10gIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHR0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG5cdFx0fVxuXHR9XG5cblxuXHRwdWJsaWMgbmdEb0NoZWNrKCk6IHZvaWRcblx0e1xuXHRcdGlmICh0aGlzLm5nQ29udHJvbCkge1xuXHRcdFx0dGhpcy51cGRhdGVFcnJvclN0YXRlKCk7XG5cdFx0fVxuXHR9XG5cblxuXHRwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZFxuXHR7XG5cdFx0dGhpcy5zdGF0ZUNoYW5nZXMuY29tcGxldGUoKTtcblx0fVxuXG5cblx0cHVibGljIG9uQ29udGFpbmVyQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkXG5cdHtcblx0XHRpZiAoIXRoaXMuZm9jdXNlZCkge1xuXHRcdFx0dGhpcy5mb2N1cygpO1xuXHRcdH1cblx0fVxuXG5cblx0cHVibGljIGZvY3VzKCk6IHZvaWRcblx0e1xuXHRcdGlmICh0aGlzLmVkaXRvcikge1xuXHRcdFx0dGhpcy5lZGl0b3IuZm9jdXMoKTtcblx0XHRcdHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcblx0XHR9XG5cdH1cblxuXG5cdHB1YmxpYyB1cGRhdGVFcnJvclN0YXRlKCk6IHZvaWRcblx0e1xuXHRcdGNvbnN0IG9sZFN0YXRlID0gdGhpcy5lcnJvclN0YXRlO1xuXHRcdGNvbnN0IHBhcmVudCA9IHRoaXMuX3BhcmVudEZvcm1Hcm91cCB8fCB0aGlzLl9wYXJlbnRGb3JtO1xuXHRcdGNvbnN0IG1hdGNoZXIgPSB0aGlzLmVycm9yU3RhdGVNYXRjaGVyIHx8IHRoaXMuX2RlZmF1bHRFcnJvclN0YXRlTWF0Y2hlcjtcblx0XHRjb25zdCBjb250cm9sID0gdGhpcy5uZ0NvbnRyb2wgPyA8Rm9ybUNvbnRyb2w+dGhpcy5uZ0NvbnRyb2wuY29udHJvbCA6IG51bGw7XG5cdFx0Y29uc3QgbmV3U3RhdGUgPSBtYXRjaGVyLmlzRXJyb3JTdGF0ZShjb250cm9sLCBwYXJlbnQpO1xuXG5cdFx0aWYgKG5ld1N0YXRlICE9PSBvbGRTdGF0ZSkge1xuXHRcdFx0dGhpcy5lcnJvclN0YXRlID0gbmV3U3RhdGU7XG5cdFx0XHR0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG5cdFx0fVxuXHR9XG5cblxuXHRwdWJsaWMgc2V0RGVzY3JpYmVkQnlJZHMoaWRzOiBBcnJheTxzdHJpbmc+KTogdm9pZFxuXHR7XG5cdH1cblxufVxuIl19