
(function() {
    var wpEditInPlaceDirectives = angular.module('wpEditInPlace.directives', []);

    // Create an edit section to hold wp:**-ip items.
    wpEditInPlaceDirectives.directive('wpEditSection', function() {
        return {
            restrict : 'AE',
            scope : true,
            require : '^sectionCtrl',
            replace : true,
            transclude : true,
            template : '<div class="editableSection">' + '<button class="btn pull-right" type="button" ng-hide="editing" ng-click="edit()"> + </button>' + '<div ng-transclude></div>'
                    + '<button class="btn" type="button" ng-show="editing" ng-click="save()">Save</button>'
                    + '<!--<button class="btn" type="button" ng-show="editing" ng-click="cancel()">Cancel</button>--> </div>'
        };
    });

    // Extend form functionality for boostrap forms in a editSection accepts all
    // standard form inputs with validation. Try this first.
    // <form-input value="currentJob.wpEditInPlaceDirectiveslyEmail" label="Email
    // address"
    // form-id="emailAddress" type="email" required></form-input>
    // Includes support for all HTML5 types: text, password, datetime,
    // datetime-local, date, month, time, week, number, email, url, search, tel,
    // and
    // color
    wpEditInPlaceDirectives.directive('wpFormInputIp', function() {
        return {
            restrict : 'E',
            scope : {
                value : '='
            },
            compile : function(element, attrs) {
                var type = attrs.type || 'text';
                var elementType = attrs.elementType || 'span';
                var classes = attrs.classes || 'input-medium';
                var id = attrs.formId || ' ';
                var label;
                if (attrs.label) {
                    label = '<label  ng-show="$parent.editing" for="' + id + '">' + attrs.label + '</label>';
                } else {
                    label = ' ';
                }
                var placeholder = attrs.hasOwnProperty('placeholder') ? "placeholder='" + attrs.placeholder + "'" : "";
                var required = attrs.hasOwnProperty('required') ? "required='required'" : "";
                var htmlText = '<div><' + elementType + ' ng-bind="value" ng-hide="$parent.editing"></' + elementType + '>' + label + '<input type="' + type + '" class="' + classes + '" id="' + id
                        + '" name="' + id + '" ' + placeholder + required + ' ng-show="$parent.editing" ng-model="value"></div>';
                element.replaceWith(htmlText);
            }
        };
    });

    wpEditInPlaceDirectives.directive('wpFormInputIpInline', function() {
        return {
            restrict : 'E',
            scope : {
                value : '='
            },
            compile : function(element, attrs) {
                var type = attrs.type || 'text';
                var elementType = attrs.elementType || 'span';
                var classes = attrs.classes || 'input-medium';
                var id = attrs.formId || ' ';
                var label;
                if (attrs.label) {
                    label = '<label class="control-label" for="' + id + '">' + attrs.label + '</label>';
                } else {
                    label = ' ';
                }
                var placeholder = attrs.hasOwnProperty('placeholder') ? "placeholder='" + attrs.placeholder + "'" : "";
                var required = attrs.hasOwnProperty('required') ? "required='required'" : "";
                var htmlText = '<span class="inPlaceFormElement"><' + elementType + ' ng-bind="value" ng-hide="$parent.editing"></' + elementType + '>' + '<input type="' + type + '" class="'
                        + classes + '" id="' + id + '" name="' + id + '" ' + placeholder + required + ' ng-show="$parent.editing" ng-model="value"></span>';
                element.replaceWith(htmlText);
            }
        };
    });

    wpEditInPlaceDirectives.directive('wpFormTextAreaIp', function() {
        return {
            restrict : 'E',
            scope : {
                value : '='
            },
            compile : function(element, attrs) {
                var rows = attrs.rows || '3';
                var elementType = attrs.elementType || 'div';
                var classes = attrs.classes || 'large';
                var id = attrs.formId || ' ';
                var label;
                if (attrs.label) {
                    label = '<label class="control-label" for="' + id + '">' + attrs.label + '</label>';
                } else {
                    label = ' ';
                }
                var placeholder = attrs.hasOwnProperty('placeholder') ? "placeholder=" + attrs.placeholder : "";
                var required = attrs.hasOwnProperty('required') ? "required='required'" : "";
                var htmlText = '<div class="inPlaceFormElement"><' + elementType + ' ng-bind="value" ng-hide="$parent.editing"></' + elementType + '>' + '<textarea rows="' + rows + '" class="'
                        + classes + '" id="' + id + '" name="' + id + '" ' + placeholder + required + ' ng-show="$parent.editing" ng-model="value"></textarea></div>';
                element.replaceWith(htmlText);
            }
        };
    });

    wpEditInPlaceDirectives.directive('wpFormInputIpHorizontal', function() {
        return {
            restrict : 'E',
            scope : {
                value : '='
            },
            compile : function(element, attrs) {
                var type = attrs.type || 'text';
                var classes = attrs.classes || 'input-medium';
                var id = attrs.formId || ' ';
                var label;
                if (attrs.label) {
                    label = '<label class="control-label" for="' + id + '">' + attrs.label + '</label>';
                } else {
                    label = ' ';
                }
                var placeholder = attrs.hasOwnProperty('placeholder') ? "placeholder='" + attrs.placeholder + "'" : "";
                var required = attrs.hasOwnProperty('required') ? "required='required'" : "";
                var htmlText = '<div class="control-group">' + label + '<div class="controls">' + '<span ng-bind="value" ng-hide="$parent.editing"></span>' + '<input type="' + type + '" class="'
                        + classes + '" id="' + id + '" name="' + id + '" ' + placeholder + required + ' ng-show="$parent.editing" ng-model="value">' + '</div>' + '</div>';
                element.replaceWith(htmlText);
            }
        };
    });

    wpEditInPlaceDirectives.directive('wpHtmlInputIp', function() {
        return {
            restrict : 'E',
            scope : {
                value : '='
            },
            compile : function(element, attrs) {
                var classes = attrs.classes || ' ';
                var id = attrs.id || '';
                var required = attrs.hasOwnProperty('required') ? "required='required'" : "";
                var htmlText = '<div><div ng-bind-html-unsafe="value" ng-hide="$parent.editing"></div>'
                        + '<div class="editorBloc" ng-show="$parent.editing"><textarea cl-editor rows="20" cols="500" class="' + classes + '" id="' + id + '" name="' + id + '" ' + required
                        + 'ng-model="value"></textarea>' + '</div></div>';
                element.replaceWith(htmlText);
            }
        };
    });

    wpEditInPlaceDirectives.directive('wpEditTextIp', function() {
        return {
            restrict : 'E',
            scope : {
                value : '='
            },
            template : '<span ng-click="edit()" ng-bind="value" ng-hide="$parent.editing"></span>' + '<input class="inPlaceEditor" type="text" ng-show="$parent.editing" ng-model="value">'
        };
    });

}).call(this);
