(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/material/core'), require('@angular/material/form-field'), require('@webacad/ng-quill'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@webacad/ng-mat-quill', ['exports', '@angular/core', '@angular/forms', '@angular/material/core', '@angular/material/form-field', '@webacad/ng-quill', 'rxjs'], factory) :
    (factory((global.webacad = global.webacad || {}, global.webacad['ng-mat-quill'] = {}),global.ng.core,global.ng.forms,global.ng.material.core,global.ng.material['form-field'],global.ngQuill,global.rxjs));
}(this, (function (exports,core,forms,core$1,formField,ngQuill,rxjs) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

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
            _this.stateChanges = new rxjs.Subject();
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
             */ function () {
                return this.getValue();
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
             */ function () {
                if (this.ngControl && this.ngControl.disabled !== null) {
                    return this.ngControl.disabled;
                }
                return this._disabled;
            },
            set: /**
             * @param {?} disabled
             * @return {?}
             */ function (disabled) {
                this._disabled = disabled;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatQuillComponent.prototype, "id", {
            get: /**
             * @return {?}
             */ function () {
                return this._id;
            },
            set: /**
             * @param {?} id
             * @return {?}
             */ function (id) {
                this._id = id || this._uid;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatQuillComponent.prototype, "empty", {
            get: /**
             * @return {?}
             */ function () {
                return typeof this.value === 'undefined';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatQuillComponent.prototype, "focused", {
            get: /**
             * @return {?}
             */ function () {
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
            { type: core.Component, args: [{
                        selector: 'wa-mat-quill',
                        template: '',
                        providers: [
                            {
                                provide: formField.MatFormFieldControl,
                                useExisting: MatQuillComponent,
                            },
                        ]
                    }] }
        ];
        /** @nocollapse */
        MatQuillComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core$1.ErrorStateMatcher },
                { type: forms.NgForm, decorators: [{ type: core.Optional }] },
                { type: forms.FormGroupDirective, decorators: [{ type: core.Optional }] },
                { type: forms.NgControl, decorators: [{ type: core.Self }, { type: core.Optional }] }
            ];
        };
        MatQuillComponent.propDecorators = {
            placeholder: [{ type: core.Input }],
            required: [{ type: core.Input }],
            errorStateMatcher: [{ type: core.Input }],
            value: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            id: [{ type: core.Input }]
        };
        return MatQuillComponent;
    }(ngQuill.QuillComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MatQuillModule = /** @class */ (function () {
        function MatQuillModule() {
        }
        MatQuillModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            ngQuill.QuillModule,
                        ],
                        declarations: [
                            MatQuillComponent,
                        ],
                        exports: [
                            ngQuill.QuillModule,
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

    exports.MatQuillComponent = MatQuillComponent;
    exports.MatQuillModule = MatQuillModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViYWNhZC1uZy1tYXQtcXVpbGwudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vQHdlYmFjYWQvbmctbWF0LXF1aWxsL21hdC1xdWlsbC5jb21wb25lbnQudHMiLCJuZzovL0B3ZWJhY2FkL25nLW1hdC1xdWlsbC9tYXQtcXVpbGwubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBTZWxmLCBPcHRpb25hbCwgRWxlbWVudFJlZiwgU2ltcGxlQ2hhbmdlcywgT25DaGFuZ2VzLCBEb0NoZWNrLCBPbkRlc3Ryb3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOZ0NvbnRyb2wsIE5nRm9ybSwgRm9ybUdyb3VwRGlyZWN0aXZlLCBGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtFcnJvclN0YXRlTWF0Y2hlciwgQ2FuVXBkYXRlRXJyb3JTdGF0ZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQge01hdEZvcm1GaWVsZENvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHtRdWlsbENvbXBvbmVudH0gZnJvbSAnQHdlYmFjYWQvbmctcXVpbGwnO1xuaW1wb3J0IHtTdWJqZWN0fSBmcm9tICdyeGpzJztcblxuXG5sZXQgbmV4dFVuaXF1ZUlkOiBudW1iZXIgPSAwO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3dhLW1hdC1xdWlsbCcsXG5cdHRlbXBsYXRlOiAnJyxcblx0cHJvdmlkZXJzOiBbXG5cdFx0e1xuXHRcdFx0cHJvdmlkZTogTWF0Rm9ybUZpZWxkQ29udHJvbCxcblx0XHRcdHVzZUV4aXN0aW5nOiBNYXRRdWlsbENvbXBvbmVudCxcblx0XHR9LFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBNYXRRdWlsbENvbXBvbmVudCBleHRlbmRzIFF1aWxsQ29tcG9uZW50IGltcGxlbWVudHNcblx0T25DaGFuZ2VzLFxuXHREb0NoZWNrLFxuXHRPbkRlc3Ryb3ksXG5cdE1hdEZvcm1GaWVsZENvbnRyb2w8c3RyaW5nPixcblx0Q2FuVXBkYXRlRXJyb3JTdGF0ZVxue1xuXG5cblx0QElucHV0KClcblx0cHVibGljIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG5cblx0QElucHV0KClcblx0cHVibGljIHJlcXVpcmVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0QElucHV0KClcblx0cHVibGljIGVycm9yU3RhdGVNYXRjaGVyOiBFcnJvclN0YXRlTWF0Y2hlcjtcblxuXHRwdWJsaWMgZXJyb3JTdGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHB1YmxpYyByZWFkb25seSBzdGF0ZUNoYW5nZXM6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG5cdHB1YmxpYyByZWFkb25seSBzaG91bGRMYWJlbEZsb2F0OiBib29sZWFuID0gdHJ1ZTtcblxuXHRwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHByaXZhdGUgX2lkOiBzdHJpbmc7XG5cblx0cHJpdmF0ZSBfdWlkOiBzdHJpbmcgPSBgd2EtcXVpbGwtJHtuZXh0VW5pcXVlSWQrK31gO1xuXG5cblx0Y29uc3RydWN0b3IoXG5cdFx0ZWw6IEVsZW1lbnRSZWYsXG5cdFx0cHJpdmF0ZSBfZGVmYXVsdEVycm9yU3RhdGVNYXRjaGVyOiBFcnJvclN0YXRlTWF0Y2hlcixcblx0XHRAT3B0aW9uYWwoKSBwcml2YXRlIF9wYXJlbnRGb3JtOiBOZ0Zvcm0sXG5cdFx0QE9wdGlvbmFsKCkgcHJpdmF0ZSBfcGFyZW50Rm9ybUdyb3VwOiBGb3JtR3JvdXBEaXJlY3RpdmUsXG5cdFx0QFNlbGYoKSBAT3B0aW9uYWwoKSBwdWJsaWMgcmVhZG9ubHkgbmdDb250cm9sOiBOZ0NvbnRyb2wsXG5cdCkge1xuXHRcdHN1cGVyKGVsKTtcblxuXHRcdGlmICh0aGlzLm5nQ29udHJvbCAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5uZ0NvbnRyb2wudmFsdWVBY2Nlc3NvciA9IHRoaXM7XG5cdFx0fVxuXHR9XG5cblxuXHRASW5wdXQoKVxuXHRnZXQgdmFsdWUoKTogYW55XG5cdHtcblx0XHRyZXR1cm4gdGhpcy5nZXRWYWx1ZSgpO1xuXHR9XG5cblx0c2V0IHZhbHVlKHZhbHVlOiBhbnkpXG5cdHtcblx0XHRpZiAodGhpcy5lZGl0b3IpIHtcblx0XHRcdGlmICh2YWx1ZSAhPT0gdGhpcy52YWx1ZSkge1xuXHRcdFx0XHR0aGlzLmVkaXRvci5zZXRDb250ZW50cyh2YWx1ZSk7XG5cdFx0XHRcdHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXG5cdEBJbnB1dCgpXG5cdGdldCBkaXNhYmxlZCgpOiBib29sZWFuXG5cdHtcblx0XHRpZiAodGhpcy5uZ0NvbnRyb2wgJiYgdGhpcy5uZ0NvbnRyb2wuZGlzYWJsZWQgIT09IG51bGwpIHtcblx0XHRcdHJldHVybiB0aGlzLm5nQ29udHJvbC5kaXNhYmxlZDtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG5cdH1cblxuXHRzZXQgZGlzYWJsZWQoZGlzYWJsZWQ6IGJvb2xlYW4pXG5cdHtcblx0XHR0aGlzLl9kaXNhYmxlZCA9IGRpc2FibGVkO1xuXHR9XG5cblxuXHRASW5wdXQoKVxuXHRnZXQgaWQoKTogc3RyaW5nXG5cdHtcblx0XHRyZXR1cm4gdGhpcy5faWQ7XG5cdH1cblxuXHRzZXQgaWQoaWQ6IHN0cmluZylcblx0e1xuXHRcdHRoaXMuX2lkID0gaWQgfHwgdGhpcy5fdWlkO1xuXHR9XG5cblxuXHRnZXQgZW1wdHkoKTogYm9vbGVhblxuXHR7XG5cdFx0cmV0dXJuIHR5cGVvZiB0aGlzLnZhbHVlID09PSAndW5kZWZpbmVkJztcblx0fVxuXG5cblx0Z2V0IGZvY3VzZWQoKTogYm9vbGVhblxuXHR7XG5cdFx0aWYgKHRoaXMuZWRpdG9yKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5lZGl0b3IuaGFzRm9jdXMoKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXG5cdHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZFxuXHR7XG5cdFx0aWYgKHR5cGVvZiBjaGFuZ2VzWyd2YWx1ZSddICE9PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgY2hhbmdlc1sncmVxdWlyZWQnXSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcblx0XHR9XG5cdH1cblxuXG5cdHB1YmxpYyBuZ0RvQ2hlY2soKTogdm9pZFxuXHR7XG5cdFx0aWYgKHRoaXMubmdDb250cm9sKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZUVycm9yU3RhdGUoKTtcblx0XHR9XG5cdH1cblxuXG5cdHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkXG5cdHtcblx0XHR0aGlzLnN0YXRlQ2hhbmdlcy5jb21wbGV0ZSgpO1xuXHR9XG5cblxuXHRwdWJsaWMgb25Db250YWluZXJDbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWRcblx0e1xuXHRcdGlmICghdGhpcy5mb2N1c2VkKSB7XG5cdFx0XHR0aGlzLmZvY3VzKCk7XG5cdFx0fVxuXHR9XG5cblxuXHRwdWJsaWMgZm9jdXMoKTogdm9pZFxuXHR7XG5cdFx0aWYgKHRoaXMuZWRpdG9yKSB7XG5cdFx0XHR0aGlzLmVkaXRvci5mb2N1cygpO1xuXHRcdFx0dGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuXHRcdH1cblx0fVxuXG5cblx0cHVibGljIHVwZGF0ZUVycm9yU3RhdGUoKTogdm9pZFxuXHR7XG5cdFx0Y29uc3Qgb2xkU3RhdGUgPSB0aGlzLmVycm9yU3RhdGU7XG5cdFx0Y29uc3QgcGFyZW50ID0gdGhpcy5fcGFyZW50Rm9ybUdyb3VwIHx8IHRoaXMuX3BhcmVudEZvcm07XG5cdFx0Y29uc3QgbWF0Y2hlciA9IHRoaXMuZXJyb3JTdGF0ZU1hdGNoZXIgfHwgdGhpcy5fZGVmYXVsdEVycm9yU3RhdGVNYXRjaGVyO1xuXHRcdGNvbnN0IGNvbnRyb2wgPSB0aGlzLm5nQ29udHJvbCA/IDxGb3JtQ29udHJvbD50aGlzLm5nQ29udHJvbC5jb250cm9sIDogbnVsbDtcblx0XHRjb25zdCBuZXdTdGF0ZSA9IG1hdGNoZXIuaXNFcnJvclN0YXRlKGNvbnRyb2wsIHBhcmVudCk7XG5cblx0XHRpZiAobmV3U3RhdGUgIT09IG9sZFN0YXRlKSB7XG5cdFx0XHR0aGlzLmVycm9yU3RhdGUgPSBuZXdTdGF0ZTtcblx0XHRcdHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcblx0XHR9XG5cdH1cblxuXG5cdHB1YmxpYyBzZXREZXNjcmliZWRCeUlkcyhpZHM6IEFycmF5PHN0cmluZz4pOiB2b2lkXG5cdHtcblx0fVxuXG59XG4iLCJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UXVpbGxNb2R1bGV9IGZyb20gJ0B3ZWJhY2FkL25nLXF1aWxsJztcblxuaW1wb3J0IHtNYXRRdWlsbENvbXBvbmVudH0gZnJvbSAnLi9tYXQtcXVpbGwuY29tcG9uZW50JztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0UXVpbGxNb2R1bGUsXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdE1hdFF1aWxsQ29tcG9uZW50LFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0UXVpbGxNb2R1bGUsXG5cdFx0TWF0UXVpbGxDb21wb25lbnQsXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIE1hdFF1aWxsTW9kdWxlIHt9XG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX2V4dGVuZHMiLCJTdWJqZWN0IiwiQ29tcG9uZW50IiwiTWF0Rm9ybUZpZWxkQ29udHJvbCIsIkVsZW1lbnRSZWYiLCJFcnJvclN0YXRlTWF0Y2hlciIsIk5nRm9ybSIsIk9wdGlvbmFsIiwiRm9ybUdyb3VwRGlyZWN0aXZlIiwiTmdDb250cm9sIiwiU2VsZiIsIklucHV0IiwiUXVpbGxDb21wb25lbnQiLCJOZ01vZHVsZSIsIlF1aWxsTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBQTs7Ozs7Ozs7Ozs7Ozs7SUFjQTtJQUVBLElBQUksYUFBYSxHQUFHLFVBQVMsQ0FBQyxFQUFFLENBQUM7UUFDN0IsYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjO2FBQ2hDLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxZQUFZLEtBQUssSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQzVFLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQUUsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztvQkFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVB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